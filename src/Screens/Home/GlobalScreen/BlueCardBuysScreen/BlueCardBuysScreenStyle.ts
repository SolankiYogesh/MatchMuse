import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {
  BUTTON_HEIGHT,
  heightPx,
  moderateScale,
  scale,
  verticalScale
} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  imageView: {
    width: '90%',
    height: verticalScale(250),
    alignSelf: 'center',
    borderRadius: moderateScale(15)
  },
  list: {
    marginVertical: verticalScale(10)
  },
  paginationCOntainer: {
    position: 'absolute',
    // right: scale(40),
    bottom: verticalScale(10),
    backgroundColor: Color.white,
    ...CommonStyles.row,
    padding: scale(5),
    borderRadius: moderateScale(10)
  },
  inActiveDot: {
    backgroundColor: Color.lightGrey,
    width: verticalScale(5),
    height: verticalScale(5),
    borderRadius: moderateScale(100),
    marginRight: scale(5)
  },
  activeStyle: {
    backgroundColor: Color.darkGrey
  },
  gradientStyleContainer: {
    height: BUTTON_HEIGHT,
    width: '80%',
    marginVertical: verticalScale(10),
    alignSelf: 'center'
  },
  styleView: {
    width: verticalScale(40),
    height: verticalScale(40),
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(10)
  },
  imageStyle: {
    width: '50%',
    height: '50%',
    tintColor: Color.white
  },
  itemContainer: {
    ...CommonStyles.row,
    marginVertical: scale(10)
  },
  itemText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginHorizontal: scale(10)
  },
  listStyle: {
    width: '80%',
    alignSelf: 'center',
    height: heightPx(30)
  },
  lineImage: {
    width: '40%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  upgradeText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Color.black,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  whatYougetText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Color.blueShade,
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  priceText: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.bold,
    color: Color.blueShade,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  }
})
