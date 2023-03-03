import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  topContainer: {
    ...CommonStyles.row,
    width: '85%',
    alignSelf: 'center',
    marginTop: verticalScale(20)
  },
  itemGradLogo: {
    height: verticalScale(70),
    width: verticalScale(70),
    tintColor: Color.white
  },
  textContainer: {
    flex: 1
  },
  appNametext: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    textTransform: 'capitalize',
    marginVertical: verticalScale(10)
  },
  subText: {
    fontSize: moderateScale(14),
    color: Color.textGrey,
    fontFamily: Fonts.medium,
    textTransform: 'capitalize'
  },
  primaryText: {
    color: Color.Primary,
    marginVertical: verticalScale(5)
  },
  lasrgeText: {
    fontSize: moderateScale(18)
  },
  gradientContainer: {
    padding: scale(20),
    borderRadius: moderateScale(35),
    marginLeft: scale(10)
  },
  seperator: {
    width: '90%',
    height: verticalScale(0.5),
    backgroundColor: Color.black,
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  bottomText: {
    fontSize: moderateScale(18),
    color: Color.textGrey,
    fontFamily: Fonts.medium,
    width: '85%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  }
})
