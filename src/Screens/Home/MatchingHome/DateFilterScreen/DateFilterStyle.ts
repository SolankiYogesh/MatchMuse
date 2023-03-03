import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  markerStyle: {
    backgroundColor: Color.Primary,
    justifyContent: 'center',
    width: moderateScale(25),
    height: moderateScale(25),
    ...CommonStyles.shadow
  },
  largemarkerStyle: {
    backgroundColor: Color.Primary,
    justifyContent: 'center',
    width: moderateScale(35),
    height: moderateScale(35),
    ...CommonStyles.shadow
  },
  trackStyle: {
    backgroundColor: Color.lightGrey,
    height: verticalScale(3.5),
    borderRadius: moderateScale(30)
  },
  sliderStyle: {
    alignSelf: 'center',
    height: verticalScale(20)
  },
  selectedStyle: {
    backgroundColor: Color.Primary,
    height: verticalScale(3.5),
    borderRadius: moderateScale(30)
  },
  distanceContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    width: '90%',
    alignSelf: 'center',
    padding: scale(15),
    borderRadius: moderateScale(20)
  },
  distanceText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  distanceRowView: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  mainText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    marginVertical: verticalScale(10),
    width: '90%',
    alignSelf: 'center'
  },
  radioViewContainer: {
    ...CommonStyles.row,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    borderWidth: 0.5,
    borderRadius: moderateScale(15)
  },
  linearContainer: {
    // flex: 1,
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    flex: 1,
    // marginHorizontal: scale(2),
    overflow: 'hidden',
    borderRadius: moderateScale(15)
  },
  btntext: {
    fontSize: moderateScale(16),
    color: Color.white,
    fontFamily: Fonts.medium
  },
  notSelectedbtntext: {
    color: Color.black
  },
  distanceHintText: {
    fontSize: moderateScale(13),
    color: Color.black,
    fontFamily: Fonts.medium,
    flex: 1,
    marginRight: scale(15)
  },
  downImage: {
    width: moderateScale(35),
    height: moderateScale(35)
  },
  rowContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    padding: scale(10),
    alignItems: 'center'
  }
})
