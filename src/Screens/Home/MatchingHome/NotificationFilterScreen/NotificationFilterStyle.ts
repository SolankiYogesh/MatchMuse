import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  topText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.darkGrey,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center'
  },
  mainText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    marginVertical: verticalScale(10)
  },
  distanceContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    padding: scale(10),
    borderRadius: moderateScale(20)
  },
  downImage: {
    width: moderateScale(25),
    height: moderateScale(25)
  },
  rowContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    padding: scale(10),
    alignItems: 'center',
    paddingHorizontal: scale(15),
    marginVertical: verticalScale(10)
  },
  distanceText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  hintText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginVertical: verticalScale(15)
  }
})
