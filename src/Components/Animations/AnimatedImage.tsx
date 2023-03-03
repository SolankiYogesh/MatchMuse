import React from 'react'
import {Image, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle} from 'react-native'
import RNBounceable from '@freakycoder/react-native-bounceable'

import {CommonStyles, Images} from '../../Helpers'

interface AnimatedHeartProps {
  onEnd?: () => void
  onPress?: () => void
  source?: ImageSourcePropType
  style?: StyleProp<ImageStyle>
  disabled?: boolean
  containerStyle?: StyleProp<ViewStyle>
}
const AnimatedImage = ({
  onPress = () => {},
  style = {},
  source = Images.fill_bookmark,
  disabled = false,
  containerStyle = {}
}: AnimatedHeartProps) => {
  return (
    <RNBounceable
      onPress={onPress}
      style={[CommonStyles.centerItem, containerStyle]}
      bounceEffectOut={1}
      bounceEffectIn={0.2}
      useNativeDriver
      disabled={disabled}
    >
      <Image source={source} resizeMode={'contain'} style={style} />
    </RNBounceable>
  )
}

export default AnimatedImage
