import React, {useMemo, useState} from 'react'
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {useNavigation, useRoute} from '@react-navigation/native'

import AnimatedDragView from '../../../../Components/Animations/AnimatedDragView'
import AppContainer from '../../../../Components/AppContainer'
import AppProfileImage from '../../../../Components/AppProfileImage'
import Timer from '../../../../Components/Timer'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import {styles} from './VideoCallScreenStyle'

const VideoCallScreen = () => {
  const {item}: any = useRoute().params
  const navigation = useNavigation()
  const [isVideoCall, setISVideoCall] = useState(true)
  const CustomComponent: any = useMemo(() => (isVideoCall ? ImageBackground : View), [isVideoCall])

  const onPressEndCall = () => {
    navigation.goBack()
  }

  const onPressVideoButton = () => {
    setISVideoCall(!isVideoCall)
  }

  const renderbuttonContainer = useMemo(() => {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.imageback}>
          <Image
            source={Images.audio_sound}
            resizeMode={'contain'}
            style={styles.imageIconnStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageback}>
          <Image source={Images.audio_mic} resizeMode={'contain'} style={styles.imageIconnStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressVideoButton}
          style={[styles.imageback, isVideoCall && styles.greenbac]}
        >
          <Image
            source={isVideoCall ? Images.audio_on_video : Images.audio_of_video}
            resizeMode={'contain'}
            style={[styles.imageIconnStyle, isVideoCall && styles.closeImgae]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressEndCall} style={[styles.imageback, styles.closeback]}>
          <Image
            source={Images.audio_stop_call}
            resizeMode={'contain'}
            style={[styles.imageIconnStyle, styles.closeImgae]}
          />
        </TouchableOpacity>
      </View>
    )
  }, [isVideoCall])

  const renderVideoView = useMemo(() => {
    return (
      <AnimatedDragView>
        <AppProfileImage activeOpacity={1} style={styles.imageStyle} url={item?.image} />
      </AnimatedDragView>
    )
  }, [])

  const renderAudioCallView = useMemo(() => {
    return (
      <View style={CommonStyles.centerItem}>
        <AppProfileImage
          borderRadius={50}
          borderWidth={4}
          onPress={undefined}
          url={item?.image}
          size={150}
        />
        <Text style={styles.nameText}>{item?.name}</Text>
        <Timer autoStart textStyle={styles.timeText} />
      </View>
    )
  }, [])

  return (
    <AppContainer color={Color.transparent}>
      <CustomComponent
        source={{
          uri: 'https://img.freepik.com/free-photo/woman-with-headset-video-call_23-2148854900.jpg'
        }}
        resizeMode={'cover'}
        style={[CommonStyles.flex, !isVideoCall && styles.container]}
      >
        <GestureHandlerRootView style={[CommonStyles.flex, !isVideoCall && styles.container]}>
          {isVideoCall ? renderVideoView : renderAudioCallView}
        </GestureHandlerRootView>
        {renderbuttonContainer}
      </CustomComponent>
    </AppContainer>
  )
}

export default VideoCallScreen
