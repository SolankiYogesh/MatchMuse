import React, {useState} from 'react'
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface CommentInputProps {
  isReplyView?: boolean
  replyerName?: string
  onCloseReply?: () => void
  onPressComment?: (value: string) => void
}

const CommentInput = (props: CommentInputProps) => {
  const [comment, setComment] = useState('')

  const onPressComment = () => {
    if (_.trim(comment)) {
      if (props.onPressComment) props.onPressComment(comment)
      setComment('')
    }
  }
  return (
    <View style={styles.commentContainer}>
      {props.isReplyView && (
        <View style={CommonStyles.row}>
          <Text style={styles.replyerName}>
            {t('FD263')}
            {props?.replyerName}
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (props.onCloseReply) props.onCloseReply()
            }}
          >
            <Image source={Images.close} style={styles.closeImage} resizeMode={'contain'} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.inputView}>
        <TouchableOpacity>
          <Image source={Images.emoji_happy} resizeMode={'contain'} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TextInput
          placeholder={String(t('FD252'))}
          placeholderTextColor={Color.grey_Shade2}
          onChangeText={setComment}
          value={comment}
          style={styles.input}
          selectionColor={Color.Primary}
        />
        <TouchableOpacity onPress={onPressComment}>
          <Text style={styles.posttext}>{t('FD262')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CommentInput

const styles = StyleSheet.create({
  emojiIcon: {
    height: verticalScale(20),
    width: verticalScale(20),
    tintColor: Color.grey_Shade2,
    marginRight: scale(10)
  },
  input: {
    flex: 1
  },
  commentContainer: {
    // position: 'absolute',
    backgroundColor: Color.lightGrey,
    width: '100%',
    zIndex: 1000
  },
  inputView: {
    ...CommonStyles.row,
    paddingHorizontal: scale(10),
    borderWidth: 1,
    borderColor: Color.grey_Shade2,
    borderRadius: moderateScale(10),
    height: verticalScale(50),
    margin: scale(20)
  },
  posttext: {
    color: Color.Primary,
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(15)
  },
  replyerName: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.grey_Shade2,
    marginLeft: scale(20),
    marginTop: verticalScale(10),
    flex: 1
  },
  closeImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    tintColor: Color.grey_Shade2,
    marginTop: verticalScale(10),
    alignSelf: 'flex-end',
    marginRight: scale(20)
  }
})
