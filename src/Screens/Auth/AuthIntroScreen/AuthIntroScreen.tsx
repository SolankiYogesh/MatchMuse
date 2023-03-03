import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppContainer from '../../../Components/AppContainer'
import {Color, Images, Screen} from '../../../Helpers'
import {styles} from './AuthIntroScreenStyle'

const AuthIntroScreen = () => {
  const navigation: any = useNavigation()
  const onPressRegister = () => {
    navigation.navigate(Screen.LoginScreen)
  }
  const onCreateAccount = () => {
    navigation.navigate(Screen.RegisterScreen)
  }

  return (
    <AppContainer isGradient>
      <View style={styles.container}>
        <View>
          <Image source={Images.fyerdates_logo} style={styles.logoImage} resizeMode={'contain'} />
          <Text style={styles.logoTitle}>{t('FD1')}</Text>
        </View>
        <View style={styles.innerView}>
          <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={onCreateAccount}>
            <LinearGradient
              start={{x: 0, y: 0}}
              angle={360}
              end={{x: 1, y: 0}}
              style={styles.btnContainer}
              colors={[Color.blueShade041, Color.blueShade0414, Color.blueShade040]}
            >
              <Image source={Images.gbn_logo} style={styles.btnImage} resizeMode={'contain'} />
              <Text style={styles.createAccountTxt}>{t('FD2')}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressRegister}
            style={[styles.btn, styles.btnContainer, styles.normalBtn]}
          >
            <Text style={styles.registerText}>{t('FD3')}</Text>
          </TouchableOpacity>
          <Text style={styles.hintText}>{t('FD4')}</Text>
        </View>
      </View>
    </AppContainer>
  )
}

export default AuthIntroScreen
