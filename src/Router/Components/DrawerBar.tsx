import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {DrawerContentComponentProps} from '@react-navigation/drawer'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, CommonStyles, Fonts, Images, Screen, Utility} from '../../Helpers'
import {moderateScale, scale, verticalScale, widthPx} from '../../Helpers/Responsive'

const data = [
  {
    title: t('FD419'),
    text: t('FD422'),
    image: Images.star_normal,
    isSelected: false,
    screen: Screen.CreateDrawerScreen
  },
  {
    title: t('FD420'),
    text: t('FD423'),
    image: Images.business,
    isSelected: false,
    screen: Screen.BusinessDrawerScreen
  },
  {
    title: t('FD421'),
    text: t('FD424'),
    image: Images.celebrity,
    isSelected: false,
    screen: Screen.AccountScreen
  }
]

const DrawerBar = (props: DrawerContentComponentProps) => {
  const [drawerButtons, setDrawerButtons] = useState(data)
  const {navigation} = props

  const onPressItem = (item: any) => {
    const deepClone = Utility.deepClone(drawerButtons)
    const currentIndex = _.findIndex(deepClone, (i: any) => i?.isSelected)
    for (let index = 0; index < deepClone?.length; index++) {
      deepClone[index].isSelected = false
    }
    const findIndex = _.findIndex(deepClone, (i: any) => i?.title === item?.title)
    if (currentIndex === findIndex) {
      navigation.navigate(Screen.AccountScreen)
    } else {
      navigation.navigate(item?.screen)
      deepClone[findIndex].isSelected = true
    }

    setDrawerButtons(deepClone)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleTex}>{t('FD425')}</Text>
      {_.map(drawerButtons, (i) => {
        return (
          <TouchableOpacity onPress={() => onPressItem(i)} style={styles.itemContainer}>
            <View style={styles.imageBack}>
              <Image style={styles.image} resizeMode={'contain'} source={i?.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{i?.title}</Text>
              <Text style={styles.textText}>{i?.text}</Text>
            </View>
            <LinearGradient
              start={{x: 0.3, y: 0}}
              end={{x: 0.8, y: 1}}
              locations={[0.1865, 0.8077]}
              colors={
                i.isSelected
                  ? [Color.pink_shade1, Color.red_shade1]
                  : [Color.transparent, Color.transparent]
              }
              style={[styles.radioButton, i.isSelected && styles.selectedRadioButton]}
            >
              {i.isSelected && (
                <Image source={Images.checkRight} resizeMode={'contain'} style={styles.check} />
              )}
            </LinearGradient>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default DrawerBar

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flex,
    backgroundColor: Color.white,
    width: widthPx(80)
  },
  image: {
    height: '50%',
    width: '50%'
  },
  imageBack: {
    height: verticalScale(45),
    width: verticalScale(45),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(10)
  },
  itemContainer: {
    ...CommonStyles.row,
    marginVertical: verticalScale(20),
    alignSelf: 'center',
    marginHorizontal: scale(15)
  },
  radioButton: {
    height: verticalScale(20),
    width: verticalScale(20),
    borderColor: Color.Primary,
    borderWidth: 1,
    borderRadius: moderateScale(7),
    ...CommonStyles.centerItem
  },
  textContainer: {
    flex: 1,
    marginHorizontal: scale(10)
  },
  titleText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  textText: {
    fontSize: moderateScale(13.5),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginTop: scale(10)
  },
  check: {
    height: '50%',
    width: '50%',
    tintColor: Color.white
  },
  selectedRadioButton: {
    backgroundColor: Color.Primary
  },
  titleTex: {
    fontSize: moderateScale(13.5),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginVertical: verticalScale(20),
    marginHorizontal: scale(15)
  }
})
