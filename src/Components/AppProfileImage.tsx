import React from 'react'
import {ImageStyle, StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native'

import {Color} from '../Helpers'
import {moderateScale, scale, verticalScale} from '../Helpers/Responsive'
import AppLoadingImage from './AppLoadingImage'

interface AppProfileImageProps {
  onPress?: () => void
  borderWidth?: number
  borderColor?: string
  url?: string
  imageStyle?: StyleProp<ImageStyle>
  style?: StyleProp<ViewStyle>
  size?: number
  borderRadius?: number
  activeOpacity?: number
}

const AppProfileImage = (props: AppProfileImageProps) => {
  const {
    onPress,
    borderWidth,
    url,
    size = 50,
    imageStyle,
    style,
    borderColor,
    borderRadius = 15,
    activeOpacity = 0.5
  } = props

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderWidth,
          borderColor,
          width: verticalScale(size),
          height: verticalScale(size),
          borderRadius: moderateScale(borderRadius)
        },
        style
      ]}
      activeOpacity={activeOpacity}
      disabled={!onPress}
      onPress={onPress}
    >
      <AppLoadingImage
        borderRadius={moderateScale(5)}
        url={url}
        style={[styles.profileImage, imageStyle]}
      />
    </TouchableOpacity>
  )
}

export default AppProfileImage

AppProfileImage.defaultProps = {
  onPress: () => {},
  borderWidth: scale(2),
  url: '',
  size: 50,
  imageStyle: {},
  style: {},
  borderColor: Color.Primary,
  borderRadius: 15
}

const styles = StyleSheet.create({
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  container: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  }
})
