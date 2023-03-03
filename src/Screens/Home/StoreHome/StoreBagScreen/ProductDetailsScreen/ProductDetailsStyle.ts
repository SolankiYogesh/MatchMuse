import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center'
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.black
  },
  imageView: {
    width: '100%',
    height: heightPx(40),
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  likeContainer: {
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    marginTop: verticalScale(40),
    marginLeft: scale(30),
    position: 'absolute',
    borderRadius: moderateScale(10),
    padding: scale(10),
    ...CommonStyles.centerItem
  },
  heartImage: {
    width: verticalScale(20),
    height: verticalScale(20)
  },
  bottomContainer: {
    paddingVertical: scale(10)
  },
  titleText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  marginleft: {
    marginLeft: scale(10)
  },
  ratingContainer: {
    ...CommonStyles.row,
    marginVertical: verticalScale(5)
  },
  reviewText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginVertical: verticalScale(5)
  },
  bottomTextContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  typeText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  unitPriceText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    width: '22%'
  },
  starImage: {
    width: verticalScale(20),
    height: verticalScale(20)
  },
  devider: {
    width: '100%',
    height: verticalScale(0.5),
    backgroundColor: Color.textGrey
  },
  priceContainer: {
    marginVertical: verticalScale(15)
  },
  priceInnnerContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginVertical: verticalScale(7)
  },
  stikePriceText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey,
    textDecorationLine: 'line-through'
  },
  list: {
    marginVertical: verticalScale(10)
  },

  imageStyle: {
    borderRadius: moderateScale(20)
  },
  pickerContainer: {
    marginVertical: verticalScale(10)
  },
  imageIconStyle: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.black
  },
  innerSizeButtonContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    paddingVertical: verticalScale(15)
  },
  sizeInnerText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(10)
  },
  gradientStyleContainer: {
    height: verticalScale(55),
    width: '100%',
    marginVertical: verticalScale(10)
  },
  btnTextStyle: {
    fontFamily: Fonts.semi_bold
  },
  productInfoText: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  descText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    flex: 1,
    marginBottom: verticalScale(10)
  },
  productRatingContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    borderRadius: moderateScale(20),
    backgroundColor: Color.deepGrey,
    padding: scale(10),
    marginVertical: verticalScale(10)
  },
  currentRateText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(15),
    color: Color.black
  },
  maxRateText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14)
  },
  reviewBaseText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(13),
    color: Color.textGrey,
    marginVertical: verticalScale(10)
  },
  progressContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(5)
  },
  progressText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginRight: scale(10)
  },
  mainCOntainer: {
    backgroundColor: Color.white
  }
})
