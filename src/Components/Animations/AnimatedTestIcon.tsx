import React, {useEffect, useMemo} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import {Color, CommonStyles, Fonts, Images} from '../../Helpers'
import {heightPx, moderateScale, verticalScale} from '../../Helpers/Responsive'

interface AnimatedTestIconProps {
  onEnd?: () => void
}

const AnimatedTestIcon = (props: AnimatedTestIconProps) => {
  const {onEnd} = props
  const animateValue = useSharedValue(0)
  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

  useEffect(() => {
    animateValue.value = withTiming(1, {
      duration: 500
    })
  }, [])

  const renderCloseImage = useMemo(() => {
    return (
      <TouchableOpacity
        style={styles.imageback}
        onPress={() => {
          animateValue.value = withTiming(0, {
            duration: 500
          })
          setTimeout(() => {
            if (onEnd) onEnd()
          }, 400)
        }}
      >
        <Image source={Images.close} style={styles.closeImage} resizeMode={'contain'} />
      </TouchableOpacity>
    )
  }, [animateValue.value])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: `${interpolate(animateValue.value, [0, 1], [0, 100])}%`,
      width: `${interpolate(animateValue.value, [0, 1], [0, 100])}%`
    }
  })

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animateValue.value, {
        duration: 500
      })
    }
  })

  return (
    <AnimatedLinearGradient
      start={{x: 0.3, y: 0}}
      end={{x: 0.8, y: 1}}
      locations={[0.1865, 0.8077]}
      colors={[Color.pink_shade1, Color.red_shade1]}
      style={[styles.container, animatedStyle]}
    >
      {renderCloseImage}
      <Animated.View style={[CommonStyles.flex, animatedViewStyle, CommonStyles.centerItem]}>
        <View style={styles.bigIcon}>
          <Image source={Images.checkRight} style={styles.checkIcon} resizeMode={'contain'} />
        </View>
        <Text style={styles.nameText}>{'Sports'}</Text>
      </Animated.View>
    </AnimatedLinearGradient>
  )
}

export default AnimatedTestIcon

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.centerItem,
    ...CommonStyles.viewFull
  },
  imageback: {
    top: heightPx(8),
    right: '35%',
    zIndex: 1000
  },
  nameText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(25),
    color: Color.white
  },
  closeImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    tintColor: Color.white
  },
  checkIcon: {
    width: '70%',
    height: '70%',
    tintColor: Color.Primary
  },
  bigIcon: {
    height: verticalScale(80),
    width: verticalScale(80),
    backgroundColor: Color.white,
    borderRadius: moderateScale(300),
    ...CommonStyles.centerItem,
    marginBottom: verticalScale(30)
  }
})
