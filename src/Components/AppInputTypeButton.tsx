import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native'

import {Color, CommonStyles} from '../Helpers'
import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from '../Helpers/Responsive'

interface AppInputTypeButtonProps {
  image?: ImageSourcePropType
  style?: StyleProp<ViewStyle>
  btntextStyle?: StyleProp<TextStyle>
  title?: string | undefined | null | number
  onPress?: () => void
}
const AppInputTypeButton = (props: AppInputTypeButtonProps) => {
  const {image, style, title, onPress, btntextStyle} = props
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.inputContainer, style]} onPress={onPress}>
      <Text numberOfLines={1} ellipsizeMode={'tail'} style={[styles.btntext, btntextStyle]}>
        {title}
      </Text>
      {image && <Image source={image} style={styles.inputImage} resizeMode={'contain'} />}
    </TouchableOpacity>
  )
}

export default AppInputTypeButton

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Color.white,
    borderRadius: moderateScale(15),
    padding: scale(7),
    flexDirection: 'row',
    alignItems: 'center',
    ...CommonStyles.shadow,
    height: INPUT_HEIGHT,
    marginHorizontal: scale(4)
  },
  btntext: {
    flex: 1,
    fontSize: moderateScale(15),
    color: Color.textGrey,
    marginLeft: scale(15)
  },
  inputImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    marginHorizontal: scale(5)
  }
})
