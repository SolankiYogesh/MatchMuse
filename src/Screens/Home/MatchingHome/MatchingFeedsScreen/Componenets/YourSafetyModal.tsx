import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {t} from 'i18next'

import AppButton from '../../../../../Components/AppButton'
import CommonModalHeader from '../../../../../Components/Modals/CommonModalHeader'
import {Color, Fonts, Images} from '../../../../../Helpers'
import {BUTTON_HEIGHT, moderateScale, verticalScale} from '../../../../../Helpers/Responsive'

interface YourSafetyModalProps {
  onClose?: () => void
}

const YourSafetyModal = ({onClose = () => {}}: YourSafetyModalProps) => {
  return (
    <CommonModalHeader onBack={onClose} onClose={onClose}>
      <Image style={styles.rightImage} resizeMode={'contain'} source={Images.verification} />
      <Text style={styles.text1}>{'Deine sicherheit liegt uns am herzen'}</Text>
      <Text style={styles.text2}>
        {
          'Wir legen viel Wert auf die Verifizierung unserer Nutzer. Du erkennst einen überprüften Account anhand des grünen Badges'
        }
      </Text>
      <Text style={styles.text2}>
        {
          'Die Verifizierung dauert nur wenige Minuten und zeigt den anderen Nutzern, dass Du wirklich auf der Suche nach Dates bist.'
        }
      </Text>
      <Text style={styles.text2}>
        {
          'Mit der Verifizierung erhältst du auch in allen anderen Apps von GBN One ein grünes Badge.'
        }
      </Text>
      <AppButton
        gradientStyleContainer={styles.gradientStyleContainer}
        title={t('FD50')}
        onPress={onClose}
      />
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.btnText}>{t('FD431')}</Text>
      </TouchableOpacity>
    </CommonModalHeader>
  )
}

export default YourSafetyModal

const styles = StyleSheet.create({
  rightImage: {
    height: verticalScale(100),
    width: verticalScale(100),
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  text1: {
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(14.5),
    color: Color.black,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  text2: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(11),
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  gradientStyleContainer: {
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(15)
  },
  btnText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(13),
    color: Color.textGrey,
    textAlign: 'center',
    marginVertical: verticalScale(15)
  }
})
