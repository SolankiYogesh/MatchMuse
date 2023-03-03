import React, {useEffect} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts} from '../../Helpers'
import {moderateScale, scale, verticalScale} from '../../Helpers/Responsive'

interface AnimatedButtonProps {
  isVisible?: boolean
  onPress?: () => void
}

const AnimatedButton = ({isVisible = false, onPress = () => {}}: AnimatedButtonProps) => {
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
  const animatedValue = useSharedValue(0)

  useEffect(() => {
    if (isVisible) {
      animatedValue.value = withTiming(1)
    } else {
      animatedValue.value = withTiming(0)
    }
  }, [isVisible])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(animatedValue.value, [0, 1], [100, 0])
        }
      ]
    }
  })

  return (
    <AnimatedTouchableOpacity onPress={onPress} style={[styles.btnContainer, animatedStyle]}>
      <Text style={styles.btntext}>{t('FD394')}</Text>
    </AnimatedTouchableOpacity>
  )
}

export default AnimatedButton

const styles = StyleSheet.create({
  btnContainer: {
    padding: scale(10),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(25),
    position: 'absolute',
    bottom: 0
  },
  btntext: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15),
    color: Color.black
  }
})
