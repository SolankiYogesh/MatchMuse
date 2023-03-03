import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  mainCOntainer: {
    backgroundColor: Color.white
  },
  imageLocBack: {
    width: verticalScale(50),
    height: verticalScale(50),
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(15)
  },
  locationImage: {
    width: '60%',
    height: '60%'
  },
  scrollView: {
    paddingHorizontal: scale(20)
  },
  imageLeft: {
    width: verticalScale(25),
    height: verticalScale(25)
  },
  addressText: {
    fontSize: moderateScale(14),
    fontFamilyL: Fonts.medium,
    color: Color.black
  },
  textContainer: {
    fontSize: moderateScale(12),
    fontFamilyL: Fonts.medium,
    color: Color.textGrey
  },
  addressTextCotainer: {
    marginHorizontal: scale(10)
  },
  addressCotainer: {
    width: '100%'
  },
  leftImageBack: {
    right: 0,
    position: 'absolute'
  },
  labeltext: {
    fontSize: moderateScale(16),
    fontFamilyL: Fonts.bold,
    color: Color.black,
    marginBottom: verticalScale(20),
    marginTop: verticalScale(10)
  },
  labelContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  labelCart: {fontSize: moderateScale(16), fontFamilyL: Fonts.bold, color: Color.black},
  cartCountTetx: {
    fontSize: moderateScale(14),
    fontFamilyL: Fonts.medium,
    color: Color.darkGrey,
    marginLeft: scale(5)
  },
  gradientStyleContainer: {
    height: verticalScale(55),
    width: '100%',
    marginVertical: verticalScale(10)
  },
  priceText: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  totalText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  },
  buttnContainer: {
    marginTop: verticalScale(20)
  }
})
