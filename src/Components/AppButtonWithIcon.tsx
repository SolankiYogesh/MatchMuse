import React from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {Color, Fonts} from '../Helpers'
import {moderateScale, scale, verticalScale} from '../Helpers/Responsive'

interface AppButtonWithIconProps {
  title?: string | undefined | null
  image?: ImageSourcePropType
  style?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  titleStyle?: StyleProp<TextStyle>
  colors?: number[] | string[] | undefined | null
  onPress?: () => void
}

const AppButtonWithIcon = (props: AppButtonWithIconProps) => {
  const {
    title,
    colors,
    image,
    style = {},
    containerStyle = {},
    imageStyle = {},
    titleStyle = {},
    onPress = () => {}
  } = props
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <LinearGradient
        colors={colors ?? [Color.pink_shade1, Color.red_shade1]}
        style={[styles.linearContainer, containerStyle]}
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
      >
        <Image source={image} style={[styles.image, imageStyle]} />
        {!!title && <Text style={[styles.titleText, titleStyle]}>{title}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default AppButtonWithIcon

const styles = StyleSheet.create({
  linearContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10),
    borderRadius: moderateScale(15)
  },
  image: {
    height: verticalScale(50),
    width: verticalScale(50)
  },
  titleText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(11),
    color: Color.white
  }
})
