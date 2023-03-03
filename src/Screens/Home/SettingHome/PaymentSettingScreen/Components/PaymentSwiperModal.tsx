import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ReactNativeModal from 'react-native-modal'
import Swiper from 'react-native-swiper'
import {t} from 'i18next'

import AppContainer from '../../../../../Components/AppContainer'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

interface PaymentSwiperModalProps {
  isVisible?: boolean
  onClose?: () => void
}

const PaymentSwiperModal = ({isVisible = false, onClose = () => {}}: PaymentSwiperModalProps) => {
  const renderHeader = () => {
    return (
      <View style={CommonStyles.row}>
        <TouchableOpacity onPress={onClose}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('FD159')}</Text>
      </View>
    )
  }

  const renderSwiper = () => {
    return (
      <Swiper
        activeDotColor={Color.lightGrey}
        dotColor={Color.blackShade2}
        loop={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.dotStyle}
        style={styles.swiperWrapper}
        index={0}
      >
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </Swiper>
    )
  }

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      coverScreen
      style={styles.modalStyle}
    >
      <AppContainer>
        {renderHeader()}
        {renderSwiper()}
      </AppContainer>
    </ReactNativeModal>
  )
}

export default PaymentSwiperModal

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginLeft: scale(25)
  },
  headerTitle: {
    fontSize: moderateScale(20),
    color: Color.black,
    fontFamily: Fonts.medium,
    marginLeft: scale(15)
  },

  swiperWrapper: {
    marginTop: verticalScale(20)
  },
  dotStyle: {
    width: verticalScale(13),
    height: verticalScale(13),
    borderRadius: moderateScale(20)
  }
})
