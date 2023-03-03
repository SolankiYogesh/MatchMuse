import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const RenderLocalSearchitem = ({item, onPress = () => {}}: any) => {
  return (
    <View style={styles.itemContainer}>
      <AppProfileImage borderWidth={2} url={item?.image} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item?.title}</Text>
        <Text style={styles.smallText}>{item?.title}</Text>
      </View>
      <TouchableOpacity onPress={() => onPress(item)}>
        <Image source={Images.close} style={styles.closeImage} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  )
}

export default RenderLocalSearchitem

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    padding: scale(10),
    marginVertical: verticalScale(10),
    ...CommonStyles.row
  },
  textContainer: {
    marginLeft: scale(10),
    flex: 1
  },
  closeImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.textGrey,
    marginRight: scale(10)
  },
  titleText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15),
    color: Color.black
  },
  smallText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12),
    color: Color.textGrey
  }
})
