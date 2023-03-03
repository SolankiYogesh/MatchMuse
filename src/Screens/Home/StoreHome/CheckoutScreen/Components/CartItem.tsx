import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const CartItem = ({item, isBigView = false}: any) => {
  const navigation: any = useNavigation()

  const onPressItem = () => {
    navigation.navigate(Screen.ProductDetailsScreen, {
      item
    })
  }
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[styles.itemContainer, isBigView && styles.isBigViewContainer]}
    >
      <Image
        source={{
          uri: item?.image
        }}
        style={[styles.imageView, isBigView && styles.bigViewImage]}
        resizeMode={'cover'}
      />
      <View style={[styles.shadowView, isBigView && styles.isBigViewShadowView]}>
        <Text style={styles.titleText}>{item?.title}</Text>
        <Text style={styles.reviewText}>
          {item?.reviews}
          {` ${t('FD336')}`}
        </Text>
        <Text style={styles.typeText}>{item?.type}</Text>
        <Text style={styles.titleText}>
          {'€ '}
          {item?.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CartItem

const styles = StyleSheet.create({
  itemContainer: {
    width: scale(250),
    height: verticalScale(150),
    marginHorizontal: scale(10),
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  isBigViewContainer: {
    marginVertical: verticalScale(10),
    width: '90%',
    alignSelf: 'center'
  },
  imageView: {
    width: '100%',
    height: '100%'
  },
  bigViewImage: {
    width: '50%'
  },
  shadowView: {
    position: 'absolute',
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    right: 0,
    borderRadius: moderateScale(15),
    width: '50%',
    padding: scale(10),
    height: '100%',
    justifyContent: 'space-between'
  },
  isBigViewShadowView: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  titleText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginBottom: verticalScale(5)
  },
  reviewText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginBottom: verticalScale(5)
  },
  typeText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginBottom: verticalScale(5)
  }
})
