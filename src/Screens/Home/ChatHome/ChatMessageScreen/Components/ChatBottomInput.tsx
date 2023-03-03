import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import AudioRecord from 'react-native-audio-record'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput'
import {openSettings} from 'react-native-permissions'
import uuid from 'react-native-uuid'
import {t} from 'i18next'
import _ from 'lodash'

import Timer from '../../../../../Components/Timer'
import {Color, CommonStyles, Fonts, Images, Permission, Utility} from '../../../../../Helpers'
import Constant from '../../../../../Helpers/Constant'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface ChatBottomInputProps {
  onPressSendMessage?: (value: any) => void
}

const ChatBottomInput = (props: ChatBottomInputProps) => {
  const {onPressSendMessage} = props
  const [isMicView, setISMicView] = useState(false)
  const [text, setText] = useState<string>('')
  const recordedTime = useRef(0)

  useEffect(() => {
    AudioRecord.on('data', () => {})
  }, [])

  const onPressSend = async () => {
    const recordedFile = String(await stopRecording(false))

    let payload = {}
    if (!_.trim(text) && !_.trim(recordedFile)) {
      return
    }
    if (_.trim(recordedFile)) {
      payload = {
        type: Constant.VOICE,
        message: '',
        audio: recordedFile,
        duration: recordedTime.current
      }
    }
    if (_.trim(text)) {
      payload = {
        type: Constant.TEXT,
        message: text
      }
    }
    if (onPressSendMessage) {
      onPressSendMessage(payload)
      setText('')
    }
  }

  const toggleMicView = useCallback(async () => {
    const isMic = await Permission.getMicPermission()

    if (isMic) {
      setISMicView(!isMicView)
    } else {
      Utility.showToast('Please Provide Record Permission')
      openSettings().then(() => {
        toggleMicView()
      })
    }
  }, [isMicView])

  const startRecording = useCallback(() => {
    AudioRecord.init({
      sampleRate: 16000, // default 44100
      channels: 1, // 1 or 2, default 1
      bitsPerSample: 16, // 8 or 16, default 16
      audioSource: 6, // android only (see below)
      wavFile: `${uuid.v4()}.wav` // default 'audio.wav'
    })
    AudioRecord.start()
  }, [])

  const stopRecording = (isUserCanceled = false) => {
    return new Promise((resolve) => {
      if (!isMicView) {
        resolve('')
      }

      AudioRecord.stop()
        .then((resp: string) => {
          resolve(isUserCanceled && !resp ? '' : resp)

          setISMicView(false)
        })
        .catch((e) => {
          resolve('')
        })
    })
  }

  useEffect(() => {
    if (isMicView) {
      startRecording()
    } else {
      stopRecording(false)
    }
  }, [isMicView])

  const renderinputView = useMemo(() => {
    return (
      <AutoGrowingTextInput
        placeholderTextColor={Color.darkGrey}
        placeholder={String(t('FD414'))}
        style={styles.input}
        value={text}
        onChange={(event: any) => setText(event.nativeEvent.text)}
        onSubmitEditing={onPressSend}
        maxHeight={verticalScale(140)}
        enableScrollToCaret
      />
    )
  }, [text])

  const renderMicTextView = () => {
    return (
      <View style={styles.micView}>
        <View style={styles.circleView} />
        <Timer
          initialSeconds={0}
          autoStart
          onTimes={(s) => (recordedTime.current = s)}
          textStyle={styles.timeText}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {!isMicView && (
        <TouchableOpacity>
          <Image source={Images.plus} style={styles.image} resizeMode={'contain'} />
        </TouchableOpacity>
      )}
      {isMicView ? renderMicTextView() : renderinputView}

      <View style={CommonStyles.row}>
        <TouchableOpacity onPress={toggleMicView}>
          <Image
            source={isMicView ? Images.close : Images.mic}
            style={styles.image}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSend}>
          <Image source={Images.send} style={styles.sendImage} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatBottomInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.offWhite,
    ...CommonStyles.row,
    padding: scale(10)
  },
  image: {
    height: verticalScale(25),
    width: verticalScale(25),
    tintColor: Color.Primary,
    marginHorizontal: scale(10)
  },
  sendImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    tintColor: Color.Primary,
    marginHorizontal: scale(10)
  },
  input: {
    marginHorizontal: scale(10),
    flex: 1,
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: Color.darkGrey,
    overflow: 'hidden',
    fontSize: moderateScale(15),
    padding: scale(5)
  },
  circleView: {
    height: verticalScale(20),
    width: verticalScale(20),
    backgroundColor: Color.Primary,
    borderRadius: moderateScale(300),
    marginLeft: scale(10)
  },
  timeText: {
    fontSize: moderateScale(15),
    marginLeft: scale(20),
    color: Color.offBlack,
    fontFamily: Fonts.medium
  },
  micView: {
    ...CommonStyles.flex,
    ...CommonStyles.row,
    height: verticalScale(45)
  }
})
