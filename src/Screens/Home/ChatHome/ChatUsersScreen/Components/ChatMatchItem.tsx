import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const ChatMatchItem = ({item}: any) => {
  return (
    <View style={styles.itemContainer}>
      <AppProfileImage borderRadius={20} size={60} url={item?.image} />
      <Text style={styles.nameText}>{item?.name}</Text>
      <Image source={Images.logo} resizeMode={'contain'} style={styles.logoImage} />
    </View>
  )
}

export default ChatMatchItem

const styles = StyleSheet.create({
  logoImage: {
    width: verticalScale(25),
    height: verticalScale(25)
  },
  itemContainer: {
    marginHorizontal: scale(10),
    ...CommonStyles.centerItem,
    padding: scale(20),
    backgroundColor: Color.white,
    // ...CommonStyles.shadow,
    height: verticalScale(150),
    borderRadius: moderateScale(15)
  },
  nameText: {
    marginVertical: verticalScale(10),
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15),
    color: Color.black
  }
})
