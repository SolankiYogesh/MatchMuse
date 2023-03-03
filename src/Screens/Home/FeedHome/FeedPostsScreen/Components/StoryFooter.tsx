import React, {useState} from 'react'
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import {Color, CommonStyles, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const StoryFooter = (props: any) => {
  const [comment, setComment] = useState('')

  return (
    <View style={styles.footerContainer}>
      <View style={styles.inputView}>
        <TouchableOpacity>
          <Image source={Images.emoji_happy} resizeMode={'contain'} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TextInput
          placeholder={String(t('FD252'))}
          placeholderTextColor={Color.white}
          onChangeText={setComment}
          value={comment}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Image source={Images.send} resizeMode={'contain'} style={styles.sendBtnImage} />
      </TouchableOpacity>
    </View>
  )
}

export default StoryFooter

const styles = StyleSheet.create({
  footerContainer: {
    ...CommonStyles.row,
    paddingHorizontal: scale(20)
  },
  inputView: {
    ...CommonStyles.row,
    paddingHorizontal: scale(10),
    borderWidth: 1,
    borderColor: Color.white,
    flex: 1,
    borderRadius: moderateScale(10),
    padding: scale(10)
  },
  emojiIcon: {
    height: verticalScale(20),
    width: verticalScale(20),
    tintColor: Color.grey_Shade2,
    marginRight: scale(10)
  },
  input: {
    flex: 1
  },
  sendBtnImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    marginLeft: scale(10)
  }
})
