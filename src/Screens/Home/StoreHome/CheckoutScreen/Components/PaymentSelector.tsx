import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const payOptions = [
  {
    text: t('FD357'),
    image: Images.rozerPay
  },
  {
    text: t('FD358'),
    image: Images.paytm
  },
  {
    text: t('FD359'),
    image: Images.paypal
  }
]

const PaymentSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPressItem = (item: any, index: number) => {
    setActiveIndex(index)
  }
  return (
    <View>
      {_.map(payOptions, (i, index) => {
        const selected = index === activeIndex
        return (
          <View style={styles.itemContainer} key={index.toString()}>
            <View style={CommonStyles.row}>
              <View style={styles.imageLocBack}>
                <Image style={styles.locationImage} source={i.image} resizeMode={'contain'} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.payText}>{i.text}</Text>
                <Text style={styles.starText}>{'***********'}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => onPressItem(i, index)}
              style={[styles.circle, selected && styles.selectedCircle]}
            />
          </View>
        )
      })}
    </View>
  )
}

export default PaymentSelector

const styles = StyleSheet.create({
  imageLocBack: {
    width: verticalScale(50),
    height: verticalScale(50),
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(10)
  },
  locationImage: {
    width: '60%',
    height: '60%'
  },
  itemContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  textContainer: {
    marginLeft: scale(10)
  },
  payText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginBottom: verticalScale(5)
  },
  starText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  circle: {
    width: verticalScale(25),
    height: verticalScale(25),
    borderRadius: moderateScale(100),
    borderWidth: 1,
    borderColor: Color.Primary
  },
  selectedCircle: {
    borderWidth: 8
  }
})
