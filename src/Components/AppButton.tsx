import React from 'react'
import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {Color, Fonts} from '../Helpers'
import {moderateScale, scale, verticalScale} from '../Helpers/Responsive'

interface AppButtonProps {
  title?: string | null
  onPress?: () => void
  btnStyleContainer?: StyleProp<ViewStyle>
  btnTextStyle?: StyleProp<TextStyle>
  gradientStyleContainer?: StyleProp<ViewStyle>
  disable?: boolean
  isBackAsItIs?: boolean
}

const AppButton = (props: AppButtonProps) => {
  const {
    title,
    isBackAsItIs,
    disable,
    onPress,
    btnStyleContainer,
    btnTextStyle,
    gradientStyleContainer
  } = props
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      activeOpacity={1}
      style={[styles.mainContainer, disable && styles.disableback, btnStyleContainer]}
    >
      <LinearGradient
        style={[styles.linearContainer, gradientStyleContainer]}
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={
          !disable || isBackAsItIs
            ? [Color.pink_shade1, Color.red_shade1]
            : [Color.lightGrey, Color.lightGrey]
        }
      >
        <Text style={[styles.btntext, !isBackAsItIs && styles.txtGrey, btnTextStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default AppButton

AppButton.defaultProps = {
  isBackAsItIs: true
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: moderateScale(15)
  },
  linearContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(15),
    borderRadius: moderateScale(15),
    height: verticalScale(60)
  },
  btntext: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  disableback: {
    backgroundColor: Color.lightGrey
  },
  txtGrey: {
    color: Color.textGrey
  }
})
