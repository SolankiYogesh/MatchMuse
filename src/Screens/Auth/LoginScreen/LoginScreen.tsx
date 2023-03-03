import React, {useEffect, useRef, useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import CheckBox from 'react-native-check-box'
import LinearGradient from 'react-native-linear-gradient'
import {useDispatch} from 'react-redux'
import {useNavigation, useRoute} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../Components/AppContainer'
import AppScrollView from '../../../Components/AppScrollView'
import InputText from '../../../Components/InputText'
import {Color, Images, Screen, Storage, Utility} from '../../../Helpers'
import {setUserData} from '../../../Store/Reducers/UserSlice'
import {styles} from './LoginScreenStyle'

const LoginScreen = () => {
  const route: any = useRoute().params
  const [index, setIndex] = useState(1)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const passwordRef = useRef<TextInput>(null)
  const [check, setCheck] = useState(false)
  const navigation: any = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (route?.index) {
      setIndex(route?.index)
    } else {
      Storage.getRemainData().then((userData: any) => {
        if (userData) {
          setUsername(userData?.username)
          setIndex(2)
        } else {
          setIndex(1)
        }
      })
    }
  }, [])

  const onPressChangeProfile = () => {
    setIndex(1)
  }

  const onPressLogin = async () => {
    if (!_.trim(username) && index === 1) {
      Utility.showToast(t('FD15'))
      return
    }
    if (!_.trim(password)) {
      Utility.showToast(t('FD18'))
      return
    }
    if (check) {
      await Storage.setRemainData({
        username,
        password
      })
    }
    dispatch(
      setUserData({
        username,
        password
      })
    )
    navigation.replace(Screen.AppMenuScreen)
  }

  const onPressForgotPassword = () => {
    navigation.navigate(Screen.ForgotPasswordScreen)
  }

  const renderFirstLogin = () => {
    return (
      <View style={styles.container}>
        <Image source={Images.fyerdates_logo} style={styles.logoImage} resizeMode={'contain'} />
        <Text style={styles.logoTitle}>{t('FD1')}</Text>

        <View style={styles.innerContainer}>
          <InputText
            keyboardType={'default'}
            selectionColor={Color.Primary}
            placeHolderCustom={t('FD10')}
            value={username}
            onChangeText={setUsername}
            onSubmitEditing={() => {
              passwordRef.current?.focus()
            }}
            returnKeyType={'next'}
            image={Images.gbn_logo_blue}
            style={styles.inputCOntainer}
          />
          <InputText
            keyboardType={'default'}
            secureTextEntry
            selectionColor={Color.Primary}
            placeHolderCustom={t('FD13')}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={onPressLogin}
            returnKeyType={'done'}
            image={Images.password_128_fit}
            style={styles.inputCOntainer}
          />
          <View style={styles.checkContainer}>
            <CheckBox
              checkedImage={
                <Image style={styles.checkEmoji} resizeMode={'contain'} source={Images.check} />
              }
              unCheckedImage={
                <Image style={styles.checkEmoji} resizeMode={'contain'} source={Images.unCheck} />
              }
              checkBoxColor={Color.Primary}
              uncheckedCheckBoxColor={Color.textGrey}
              onClick={() => setCheck(!check)}
              isChecked={check}
              rightTextView={<Text style={styles.rightText}>{t('FD25')}</Text>}
            />
            <TouchableOpacity onPress={onPressForgotPassword}>
              <Text style={[styles.rightText, styles.forgotxt]}>{t('FD26')}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onPressLogin}>
            <LinearGradient
              start={{x: 0, y: 0}}
              angle={360}
              end={{x: 1, y: 0}}
              style={styles.btnStyleContainer}
              colors={[Color.blueShade041, Color.blueShade0414, Color.blueShade040]}
            >
              <Text style={styles.btntext}>{t('FD27')}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.hintText}>
              {t('FD24')}
              <Text
                onPress={() => {
                  navigation.replace(Screen.RegisterScreen)
                }}
                style={[styles.hintText, styles.login]}
              >
                {t('FD23')}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }

  const renderSecondLogin = () => {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
              }}
              style={styles.profileImageStyle}
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}>{username}</Text>
            <Image
              style={styles.starImageStyle}
              source={Images.creator_talents_star}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.checkContainer}>
            <CheckBox
              checkedImage={
                <Image style={styles.checkEmoji} resizeMode={'contain'} source={Images.check} />
              }
              unCheckedImage={
                <Image style={styles.checkEmoji} resizeMode={'contain'} source={Images.unCheck} />
              }
              checkBoxColor={Color.Primary}
              uncheckedCheckBoxColor={Color.textGrey}
              onClick={() => setCheck(!check)}
              isChecked={check}
              rightTextView={<Text style={styles.rightText}>{t('FD25')}</Text>}
            />
            <TouchableOpacity onPress={onPressChangeProfile}>
              <Text style={[styles.rightText, styles.forgotxt]}>{t('FD31')}</Text>
            </TouchableOpacity>
          </View>

          <InputText
            keyboardType={'default'}
            secureTextEntry
            selectionColor={Color.Primary}
            placeHolderCustom={t('FD13')}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={onPressLogin}
            returnKeyType={'done'}
            image={Images.password_128_fit}
            style={styles.inputCOntainer}
          />

          <TouchableOpacity onPress={onPressLogin}>
            <LinearGradient
              start={{x: 0, y: 0}}
              angle={360}
              end={{x: 1, y: 0}}
              style={styles.btnStyleContainer}
              colors={['#041c7c', '#041444', '#040c15']}
            >
              <Text style={styles.btntext}>{t('FD27')}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.hintText}>
              {t('FD24')}
              <Text
                onPress={() => {
                  navigation.replace(Screen.RegisterScreen)
                }}
                style={[styles.hintText, styles.login]}
              >
                {t('FD23')}
              </Text>
            </Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={Images.fyerdates_logo}
              style={styles.logoSecondImage}
              resizeMode={'contain'}
            />
            <Text style={styles.logoSecondTitle}>{t('FD1')}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <AppContainer isGradient>
      <AppScrollView contentContainerStyle={styles.scrollStyle}>
        {index === 1 ? renderFirstLogin() : renderSecondLogin()}
      </AppScrollView>
    </AppContainer>
  )
}

export default LoginScreen
