import React, {forwardRef} from 'react'
import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface TextFieldProfileProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>
  title?: string | undefined | null
  isFocused?: boolean
  isMultiple?: boolean
}

const TextFieldProfile = forwardRef((props: TextFieldProfileProps, ref: any) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {!!props?.title && <Text style={styles.nameText}>{props.title}</Text>}
      <View
        style={[
          styles.innerContainer,
          !!props?.isMultiple && styles.multiCOntainer,
          props.isFocused && styles.focusContainer
        ]}
      >
        <TextInput
          multiline={!!props?.isMultiple}
          selectionColor={Color.Primary}
          style={styles.inputContainer}
          {...props}
          ref={ref}
        />
      </View>
    </View>
  )
})
export default TextFieldProfile

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    fontSize: moderateScale(17)
  },
  container: {
    width: '85%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  nameText: {
    fontSize: moderateScale(16),
    color: Color.textGrey,
    fontFamily: Fonts.medium,
    marginLeft: scale(10)
  },
  innerContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    height: verticalScale(45),
    borderRadius: moderateScale(15),
    marginTop: verticalScale(10),
    paddingHorizontal: scale(10)
  },
  focusContainer: {
    backgroundColor: Color.lightGrey
  },
  multiCOntainer: {
    height: verticalScale(100)
  }
})
