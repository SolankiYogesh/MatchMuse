import React, {useRef, useState} from 'react'
import {Image, Text, TextInput, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppButton from '../../../Components/AppButton'
import AppContainer from '../../../Components/AppContainer'
import AppScrollView from '../../../Components/AppScrollView'
import InputText from '../../../Components/InputText'
import {Color, Images, Screen, Utility} from '../../../Helpers'
import {styles} from './RegisterScreenStyle'

const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const emailRef = useRef<TextInput>()
  const phoneNumberRef = useRef<TextInput>()
  const passwordRef = useRef<TextInput>()
  const confirmPasswordRef = useRef<TextInput>()
  const navigation: any = useNavigation()

  const onPressJoin = () => {
    if (!_.trim(username)) {
      Utility.showToast(t('FD15'))
      return
    }
    if (!_.trim(email)) {
      Utility.showToast(t('FD16'))
      return
    }
    if (Utility.isValid(email)) {
      Utility.showToast(t('FD20'))
      return
    }
    if (!_.trim(phoneNumber)) {
      Utility.showToast(t('FD17'))
      return
    }

    if (phoneNumber?.length < 10) {
      Utility.showToast(t('FD399'))
      return
    }

    if (!_.trim(password)) {
      Utility.showToast(t('FD18'))
      return
    }
    if (!_.trim(confirmPassword)) {
      Utility.showToast(t('FD19'))
      return
    }
    if (password !== confirmPassword) {
      Utility.showToast(t('FD22'))
      return
    }
    navigation.replace(Screen.LoginScreen, {
      index: 2
    })
  }

  const onPressLogin = () => {
    navigation.replace(Screen.LoginScreen, {
      index: 1
    })
  }

  return (
    <AppContainer isGradient>
      <AppScrollView>
        <View style={styles.container}>
          <Image source={Images.fyerdates_logo} style={styles.logoImage} resizeMode={'contain'} />
          <Text style={styles.logoTitle}>{t('FD1')}</Text>

          <LinearGradient
            angle={90}
            useAngle
            angleCenter={{x: 0.5, y: 1}}
            end={{
              x: 0,
              y: 1
            }}
            style={styles.innerContainer}
            colors={[Color.blue_shade, Color.thar_shade]}
          >
            <Text style={styles.topHinttext}>
              {t('FD5')}
              <Text style={styles.boldText}>
                {t('FD6')}
                {t('FD7')}
              </Text>
            </Text>
            <Image source={Images.gbn_logo} style={styles.btnImage} resizeMode={'contain'} />
            <InputText
              keyboardType={'default'}
              selectionColor={Color.Primary}
              placeHolderCustom={t('FD10')}
              value={username}
              onChangeText={setUsername}
              onSubmitEditing={() => {
                emailRef.current?.focus()
              }}
              inputStyles={styles.input}
              returnKeyType={'next'}
              image={Images.gbn_user_96_fit}
              style={styles.inputCOntainer}
            />
            <InputText
              keyboardType={'default'}
              selectionColor={Color.Primary}
              placeHolderCustom={t('FD11')}
              ref={emailRef}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => {
                phoneNumberRef.current?.focus()
              }}
              returnKeyType={'next'}
              image={Images.gbn_mail_96_fit}
              inputStyles={styles.input}
              style={styles.inputCOntainer}
            />
            <InputText
              keyboardType={'default'}
              selectionColor={Color.Primary}
              placeHolderCustom={t('FD12')}
              ref={phoneNumberRef}
              value={phoneNumber}
              maxLength={10}
              inputStyles={styles.input}
              onChangeText={setPhoneNumber}
              onSubmitEditing={() => {
                passwordRef.current?.focus()
              }}
              returnKeyType={'next'}
              image={Images.gbn_telephone_96_fit}
              style={styles.inputCOntainer}
            />
            <InputText
              keyboardType={'default'}
              secureTextEntry
              inputStyles={styles.input}
              selectionColor={Color.Primary}
              placeHolderCustom={t('FD13')}
              ref={passwordRef}
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={() => {
                confirmPasswordRef.current?.focus()
              }}
              returnKeyType={'next'}
              image={Images.password_128_fit}
              style={styles.inputCOntainer}
            />
            <InputText
              keyboardType={'default'}
              secureTextEntry
              inputStyles={styles.input}
              selectionColor={Color.Primary}
              placeHolderCustom={t('FD14')}
              ref={confirmPasswordRef}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onSubmitEditing={onPressJoin}
              returnKeyType={'done'}
              image={Images.password_128_fit}
              style={styles.inputCOntainer}
            />
            <AppButton
              gradientStyleContainer={styles.btn}
              btnStyleContainer={styles.btnStyleContainer}
              title={t('FD8')}
              btnTextStyle={styles.btnText}
              onPress={onPressJoin}
            />
            <View style={styles.textContainer}>
              <Text style={styles.hintText}>
                {t('FD28')}
                <Text onPress={onPressLogin} style={[styles.hintText, styles.login]}>
                  {t('FD9')}
                </Text>
              </Text>
              <Text style={styles.hintText}>{t('FD4')}</Text>
            </View>
          </LinearGradient>
        </View>
      </AppScrollView>
    </AppContainer>
  )
}

export default RegisterScreen
