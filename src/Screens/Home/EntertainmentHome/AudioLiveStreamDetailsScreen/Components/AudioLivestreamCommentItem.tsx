import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const AudioLivestreamCommentItem = ({item}: any) => {
  return (
    <View style={styles.itemContainer}>
      <AppProfileImage borderWidth={4} borderRadius={10} size={40} url={item?.image} />
      <View style={styles.textContainer}>
        <Text style={styles.usernameText}>{item?.name}</Text>
        <Text style={styles.messageText}>{item?.text}</Text>
      </View>
    </View>
  )
}

export default AudioLivestreamCommentItem

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: scale(10)
  },
  itemContainer: {
    ...CommonStyles.row,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10)
  },
  usernameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    flex: 1
  },
  messageText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.white,
    flex: 1
  }
})
