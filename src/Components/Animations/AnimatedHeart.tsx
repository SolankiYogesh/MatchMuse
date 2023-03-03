import React, {useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated'

import {Images} from '../../Helpers'
import {verticalScale} from '../../Helpers/Responsive'

interface AnimatedHeartProps {
  onEnd?: () => void
}

const AnimatedHeart = ({onEnd = () => {}}: AnimatedHeartProps) => {
  const opacity = useSharedValue(0)

  useEffect(() => {
    opacity.value = 1
    setTimeout(() => {
      onEnd()
    }, 700)
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(opacity.value)
        }
      ]
    }
  })

  return (
    <View style={styles.mainContainer}>
      <Animated.Image
        source={Images.animatedHeart}
        resizeMode={'contain'}
        style={[styles.image, animatedStyle]}
      />
    </View>
  )
}

export default AnimatedHeart

const styles = StyleSheet.create({
  image: {
    height: verticalScale(120),
    width: verticalScale(120)
  },
  mainContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
