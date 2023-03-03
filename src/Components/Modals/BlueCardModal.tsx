import React from 'react'
import {Image, StyleSheet, Text} from 'react-native'
import {t} from 'i18next'

import {Color, Emitter, Fonts, Images} from '../../Helpers'
import BottomSheetLoader from '../../Helpers/BottomSheetLoader'
import {BUTTON_HEIGHT, moderateScale, verticalScale} from '../../Helpers/Responsive'
import AppButton from '../AppButton'
import CommonModalHeader from './CommonModalHeader'

interface BlueCardModalProps {
  onClose?: () => void
}

const BlueCardModal = ({onClose = () => {}}: BlueCardModalProps) => {
  const onPress = () => {
    onClose()
    BottomSheetLoader.isShowTopSheet(false)
    Emitter.emit('navID', 5)
  }

  return (
    <CommonModalHeader onBack={onClose} onClose={onClose}>
      <Image style={styles.coinImage} resizeMode={'contain'} source={Images.coin_gbn_three} />
      <Text style={styles.getBLueCardtext}>{'Get BLUE CARD'}</Text>
      <Text style={styles.belowGetBLueText}>
        {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
      </Text>
      <Image
        style={styles.sliderImages}
        resizeMode={'contain'}
        source={Images.blue_and_lite_card}
      />
      <Text style={styles.getBLueCardtext}>
        {'€ 14,95'}
        <Text style={styles.mediumPmText}>{'p.m.'}</Text>
      </Text>
      <AppButton
        gradientStyleContainer={styles.gradientStyleContainer}
        title={t('FD50')}
        onPress={onPress}
      />
      <Text style={styles.descText}>
        {
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        }
      </Text>
    </CommonModalHeader>
  )
}

export default BlueCardModal

const styles = StyleSheet.create({
  coinImage: {
    width: '100%',
    height: verticalScale(70)
  },
  sliderImages: {
    width: '100%',
    height: verticalScale(200)
  },
  getBLueCardtext: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.bold,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  belowGetBLueText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(5)
  },
  mediumPmText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14)
  },
  gradientStyleContainer: {
    height: BUTTON_HEIGHT
  },
  descText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  }
})
