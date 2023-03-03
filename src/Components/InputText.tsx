import React, {forwardRef} from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle
} from 'react-native'

import {Color} from '../Helpers'
import {moderateScale, scale, verticalScale} from '../Helpers/Responsive'

interface InputTextProps extends TextInputProps {
  image?: ImageSourcePropType
  style?: StyleProp<ViewStyle>
  inputStyles?: StyleProp<TextStyle>
  placeHolderCustom?: string | undefined | null
}
const InputText = forwardRef((props: InputTextProps, reference: any) => {
  const {image, style, inputStyles, placeHolderCustom} = props
  return (
    <View style={[styles.inputContainer, style]}>
      {image && <Image source={image} style={styles.inputImage} resizeMode={'contain'} />}
      <TextInput
        {...props}
        placeholder={placeHolderCustom?.toString()}
        ref={reference}
        style={[styles.input, inputStyles]}
      />
    </View>
  )
})

export default InputText

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Color.white,
    borderRadius: moderateScale(10),
    padding: scale(5),
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    fontSize: moderateScale(17)
  },
  inputImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginHorizontal: scale(10)
  }
})
