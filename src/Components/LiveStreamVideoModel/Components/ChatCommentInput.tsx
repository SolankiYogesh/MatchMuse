import React, {useState} from 'react'
import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, CommonStyles, Images, Utility} from '../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'

interface ChatCommentInputProps {
  username?: string
  onPressComment?: (value: string) => void
  style?: StyleProp<ViewStyle>
}

const ChatCommentInput = (props: ChatCommentInputProps) => {
  const [comment, setComment] = useState('')
  const {style = {}} = props

  const onPressComment = () => {
    if (_.trim(comment)) {
      if (props.onPressComment) props.onPressComment(comment)
      setComment('')
    }
  }
  return (
    <View style={[styles.commentContainer, style]}>
      <View style={styles.inputView}>
        <TouchableOpacity>
          <Image source={Images.emoji_happy} resizeMode={'contain'} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TextInput
          placeholder={`${String(t('FD327'))} ${Utility.randomeUserName()}`}
          placeholderTextColor={Color.grey_Shade2}
          onChangeText={setComment}
          value={comment}
          style={styles.input}
          selectionColor={Color.Primary}
        />
        <TouchableOpacity onPress={onPressComment}>
          <Image source={Images.send_message} style={styles.sendImage} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatCommentInput

const styles = StyleSheet.create({
  emojiIcon: {
    height: verticalScale(20),
    width: verticalScale(20),
    tintColor: Color.grey_Shade2,
    marginRight: scale(10)
  },
  sendImage: {
    tintColor: Color.black,
    height: verticalScale(25),
    width: verticalScale(25)
  },
  input: {
    flex: 1
  },
  commentContainer: {
    // position: 'absolute',
    backgroundColor: Color.lightGrey,
    width: '100%',
    zIndex: 1000,
    top: heightPx(95),
    position: 'absolute'
  },
  inputView: {
    ...CommonStyles.row,
    paddingHorizontal: scale(10),
    borderWidth: 1,
    borderColor: Color.grey_Shade2,
    borderRadius: moderateScale(15),
    height: verticalScale(50),
    margin: scale(20)
  }
})
