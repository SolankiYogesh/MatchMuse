import React from 'react'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const Slide3 = () => {
  const renderSlideHeader = () => {
    return (
      <View style={styles.headerCOntainer}>
        <Text style={styles.prizeText}>{'17.99'}</Text>
        <Text style={styles.currencynameText}>{t('FD243')}</Text>
        <Text style={styles.creditText}>{`${500} ${t('FD244')}`}</Text>
      </View>
    )
  }

  const renderButton = () => {
    return (
      <TouchableOpacity>
        <LinearGradient
          style={styles.btnContainer}
          colors={[Color.grey_Shade2, Color.grey_Shade3, Color.blackShade2]}
        >
          <Text style={styles.btnTextStyle}>{t('FD241')}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <LinearGradient
        colors={[Color.grey_Shade2, Color.grey_Shade3, Color.blackShade2]}
        style={styles.container}
      >
        <View style={styles.rowContainer}>
          <Image source={Images.fyerdates_logo} resizeMode={'contain'} style={styles.lgoImages} />
          <Text style={styles.title}>{t('FD242')}</Text>
        </View>
      </LinearGradient>
      <View style={styles.innerView}>
        {renderSlideHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD233')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD245')}</Text>
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
            <Text style={styles.innnerText}>{t('FD237')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD250')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD246')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.closeImage} resizeMode={'contain'} source={Images.close} />
            <Text style={styles.innnerText}>{t('FD247')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD248')}</Text>
          </View>
          <View style={styles.innerRowView}>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.checkRight} />
            <Text style={styles.innnerText}>{t('FD249')}</Text>
          </View>
        </ScrollView>
        {renderButton()}
      </View>
    </>
  )
}

export default Slide3
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
    marginVertical: verticalScale(10),
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(20)
  },
  closeImage: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.Primary
  },
  headerCOntainer: {
    padding: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: Color.black
  },
  prizeText: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    textAlign: 'center',
    marginVertical: scale(10)
  },
  currencynameText: {
    fontSize: moderateScale(18),
    color: Color.darkGrey,
    fontFamily: Fonts.semi_bold,
    textAlign: 'center',
    marginBottom: scale(10)
  },
  creditText: {
    fontSize: moderateScale(18),
    color: Color.lightGrey,
    fontFamily: Fonts.semi_bold,
    textAlign: 'center',
    marginBottom: scale(10)
  },
  btnTextStyle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.white
  }
})
