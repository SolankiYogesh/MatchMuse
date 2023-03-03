import React from 'react'
import {Image, StyleSheet, Text} from 'react-native'
import {t} from 'i18next'

import CommonModalHeader from '../../../../../Components/Modals/CommonModalHeader'
import {Color, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, verticalScale} from '../../../../../Helpers/Responsive'

interface SubmitModalProps {
  onClose?: () => void
}

const SubmitModal = ({onClose = () => {}}: SubmitModalProps) => {
  return (
    <CommonModalHeader onBack={onClose} onClose={onClose}>
      <Image style={styles.rightImage} resizeMode={'contain'} source={Images.greenCheck} />
      <Text style={styles.thankText}>{t('FD430')}</Text>
    </CommonModalHeader>
  )
}

export default SubmitModal

const styles = StyleSheet.create({
  rightImage: {
    height: verticalScale(100),
    width: verticalScale(100),
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  thankText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    textAlign: 'center'
  }
})
