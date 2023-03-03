import React from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'

import AppButton from '../../../../../Components/AppButton'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const Slide1 = () => {
  return (
    <>
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={styles.container}
      >
        <View style={styles.rowContainer}>
          <Image source={Images.fyerdates_logo} resizeMode={'contain'} style={styles.lgoImages} />
          <Text style={styles.title}>{t('FD232')}</Text>
        </View>
      </LinearGradient>
      <View style={styles.innerView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD233')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD234')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD235')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD236')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD237')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD238')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD239')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD240')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD452')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD246')}</Text>
          </View>
        </ScrollView>
        <AppButton title={t('FD241')} gradientStyleContainer={styles.btnContainer} />
      </View>
    </>
  )
}

export default Slide1

const styles = StyleSheet.create({
  container: {
    height: heightPx(72),
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    marginTop: verticalScale(60)
  },
  lgoImages: {
    tintColor: Color.white,
    width: verticalScale(45),
    height: verticalScale(45)
  },
  title: {
    fontSize: moderateScale(23),
    color: Color.white,
    fontFamily: Fonts.bold,
    marginLeft: scale(10)
  },
  rowContainer: {
    ...CommonStyles.row,
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  innerView: {
    width: '90%',
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    zIndex: 1000,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    padding: scale(15),
    bottom: verticalScale(150),
    height: heightPx(57)
  },
  innerRowView: {
    ...CommonStyles.row,
    paddingHorizontal: scale(15),
    marginVertical: verticalScale(10)
  },
  rightImage: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.green_shade
  },
  innnerText: {
    fontSize: moderateScale(15),
    color: Color.black,
    fontFamily: Fonts.medium,
    marginLeft: scale(20)
  },
  btnContainer: {
    width: '50%',
    alignSelf: 'center',
    height: verticalScale(50),
    marginVertical: verticalScale(10)
  }
})
