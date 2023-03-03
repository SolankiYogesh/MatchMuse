import React, {useEffect} from 'react'
import {Dimensions, View} from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppContainer from '../../../Components/AppContainer'
import {Images, Screen} from '../../../Helpers'
import {styles} from './AnimatedSplashScreenStyle'

const AnimatedSplashScreen = () => {
  const textTop = useSharedValue(Dimensions.get('window').height)
  const scale = useSharedValue(0)
  const navigation: any = useNavigation()
  const user = useSelector((state: any) => state?.user?.user)

  useEffect(() => {
    textTop.value = 0
    scale.value = 1

    setTimeout(() => {
      if (user?.isProfileDone) {
        navigation.replace(Screen.Main)
      } else {
        navigation.replace(Screen.Auth)
      }
    }, 2000)
  }, [])

  const animateUpStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(textTop.value, {
            duration: 2000
          })
        }
      ]
    }
  })

  const animateScale = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scale.value, {
            duration: 2000,
            easing: Easing.bounce
          })
        }
      ]
    }
  })
  return (
    <AppContainer isGradient>
      <View style={styles.container}>
        <Animated.Image
          source={Images.fyerdates_logo}
          style={[styles.logoImage, animateScale]}
          resizeMode={'contain'}
        />
        <Animated.Text style={[styles.logoTitle, animateUpStyle]}>{t('FD1')}</Animated.Text>
      </View>
    </AppContainer>
  )
}

export default AnimatedSplashScreen
