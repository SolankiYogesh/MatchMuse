import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  mainCOntainer: {
    backgroundColor: Color.offWhite
  },
  scrollView: {
    paddingHorizontal: scale(20)
  },
  labeltext: {
    fontSize: moderateScale(16),
    fontFamilyL: Fonts.bold,
    color: Color.black,
    marginBottom: verticalScale(20),
    marginTop: verticalScale(10)
  },
  addressCotainer: {
    width: '100%'
  },
  buttnContainer: {
    marginTop: verticalScale(20)
  },
  labelContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  priceText: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  totalText: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  },
  gradientStyleContainer: {
    height: verticalScale(55),
    width: '100%',
    marginVertical: verticalScale(10)
  },
  labelStyle: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginVertical: verticalScale(5)
  },
  input: {
    ...CommonStyles.shadow,
    flex: 1,
    height: INPUT_HEIGHT,
    paddingHorizontal: scale(10),
    backgroundColor: Color.white,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10)
  },
  cvvContainer: {
    ...CommonStyles.row
  },
  Expirycontainer: {
    width: '30%',
    marginLeft: scale(10)
  },
  cvvViewContainer: {
    width: '45%'
  },
  switchView: {
    ...CommonStyles.row,
    flex: 1,
    marginVertical: verticalScale(10)
  },
  topText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  bottomText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  textContainer: {
    flex: 1,
    marginRight: scale(10)
  },
  btnText: {
    color: Color.Primary,
    textAlign: 'center'
  }
})
