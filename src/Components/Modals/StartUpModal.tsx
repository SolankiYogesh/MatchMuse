import React, {useMemo} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts, Images} from '../../Helpers'
import {BUTTON_HEIGHT, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import CommonModalHeader from './CommonModalHeader'

interface StartUpModalProps {
  onClose?: () => void
  onPressContinue?: () => void
}

const StartUpModal = ({onClose = () => {}, onPressContinue = () => {}}: StartUpModalProps) => {
  const randomeCode = useMemo(() => Math.floor(Math.random() * 100000), [])
  return (
    <CommonModalHeader onClose={onClose}>
      <Text style={styles.headerText}>{t('FD428')}</Text>
      <View style={styles.codeView}>
        <Text style={styles.randomeNumberText}>{randomeCode}</Text>
      </View>
      <Text style={styles.TakeaPicText}>{t('FD429')}</Text>
      <Text style={styles.hintText}>
        {
          'We attach great importance to the verification of our users. You can recognize a verified account by the green badge'
        }
      </Text>
      <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={onPressContinue}>
        <LinearGradient
          start={{x: 0, y: 0}}
          angle={360}
          end={{x: 1, y: 0}}
          style={styles.btnContainer}
          colors={[Color.blueShade041, Color.blueShade0414, Color.blueShade040]}
        >
          <Image source={Images.gbn_logo} style={styles.btnImage} resizeMode={'contain'} />
          <Text style={styles.createAccountTxt}>{t('FD50')}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </CommonModalHeader>
  )
}

export default StartUpModal

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  btnContainer: {
    // padding: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    width: '100%',
    ...CommonStyles.shadow,
    height: BUTTON_HEIGHT,
    alignSelf: 'center'
    // width: '100%'
  },
  btnImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginRight: scale(15)
  },
  createAccountTxt: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.medium,
    color: Color.white
  },

  headerText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center'
  },
  randomeNumberText: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.bold,
    color: Color.black,
    letterSpacing: scale(15),
    textAlign: 'center',
    marginLeft: scale(10)
  },
  codeView: {
    alignSelf: 'center',
    backgroundColor: Color.greyLightColor,
    padding: scale(10),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    ...CommonStyles.centerItem,
    marginVertical: verticalScale(10),
    marginBottom: verticalScale(20)
  },
  TakeaPicText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  hintText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  }
})
