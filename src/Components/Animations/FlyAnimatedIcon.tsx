import React, {useEffect, useRef} from 'react'
import {Animated, Easing, Image, StyleSheet} from 'react-native'

import {Color, Images} from '../../Helpers'
import {verticalScale, W_HEIGHT} from '../../Helpers/Responsive'

const animationEndY = Math.ceil(W_HEIGHT * 0.7)
const negativeEndY = animationEndY * -1

const FlyAnimatedIcon = ({right}: any) => {
  const position = useRef(new Animated.Value(0))
  const yAnimation = position.current.interpolate({
    inputRange: [negativeEndY, 0],
    outputRange: [animationEndY, 0]
  })

  const opacityAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY],
    outputRange: [1, 0]
  })

  const scaleAnimation = yAnimation.interpolate({
    inputRange: [0, 15, 30],
    outputRange: [0, 1.4, 1],
    extrapolate: 'clamp'
  })

  const xAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY / 6, animationEndY / 3, animationEndY / 2, animationEndY],
    outputRange: [0, -25, 15, 0, 10]
  })

  const rotateAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY / 6, animationEndY / 3, animationEndY / 2, animationEndY],
    outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg']
  })

  useEffect(() => {
    Animated.timing(position.current, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true
    }).start()
  }, [])

  const getHeartStyle = () => ({
    transform: [
      {translateY: position.current},
      {scale: scaleAnimation},
      {translateX: xAnimation},
      {rotate: rotateAnimation}
    ],
    opacity: opacityAnimation
  })

  return (
    <Animated.View style={[styles.heartContainer, getHeartStyle()]}>
      <Image source={Images.heart_fill} style={styles.heart} resizeMode={'contain'} />
    </Animated.View>
  )
}

export default FlyAnimatedIcon

const styles = StyleSheet.create({
  heartContainer: {
    position: 'absolute',
    // bottom: verticalScale(30),
    backgroundColor: Color.transparent
  },
  heart: {
    width: verticalScale(30),
    height: verticalScale(30)
  }
})
