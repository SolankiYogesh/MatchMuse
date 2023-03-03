import {StyleSheet, ViewStyle} from 'react-native'

import {Color, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'

export const _container = (borderColor: string, borderWidth: number): ViewStyle => ({
  flex: 1,
  borderWidth,
  borderColor,
  opacity: 1,
  marginTop: 10,
  borderRadius: moderateScale(20),
  overflow: 'hidden',
  paddingVertical: 16,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: Color.redLight
})

export const _animatedViewStyle = (backgroundColor: string, animatedWidth: any): ViewStyle => ({
  backgroundColor,
  width: animatedWidth,
  borderRadius: moderateScale(20)
})

export const styles = StyleSheet.create({
  container: {},
  choiceTextStyle: {
    flexShrink: 1,
    flexWrap: 'wrap',
    color: Color.tharShade19,
    paddingHorizontal: 16,
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold
  },
  pollItemContainer: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  percentageTextStyle: {
    lineHeight: 24,
    color: Color.tharShade19,
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium
  },
  checkMarkImageStyle: {
    width: 18,
    height: 18,
    marginRight: 12,
    tintColor: Color.tharShade19
  },
  innerCircle: {
    width: verticalScale(25),
    height: verticalScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: moderateScale(100),
    borderColor: Color.white,
    backgroundColor: `${Color.Primary}6B`,
    marginLeft: scale(20)
  },
  selectedCircle: {
    backgroundColor: Color.redExtra
  }
})
