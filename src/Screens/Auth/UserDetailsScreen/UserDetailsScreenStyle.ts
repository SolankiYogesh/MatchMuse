import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../Helpers'
import {
  BUTTON_HEIGHT,
  heightPx,
  INPUT_HEIGHT,
  moderateScale,
  scale,
  verticalScale
} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  innerView: {
    backgroundColor: Color.offWhite,
    width: '90%',
    alignSelf: 'center',
    padding: scale(15),
    borderRadius: moderateScale(15),
    height: heightPx(90)
  },
  inputStyles: {
    height: INPUT_HEIGHT
  },
  innerScrollView: {
    paddingHorizontal: scale(5)
  },
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  queText: {
    color: Color.black,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10)
  },
  sliderText: {
    color: Color.textGrey,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    textAlign: 'center'
  },
  markerStyle: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    width: moderateScale(20),
    height: moderateScale(20),
    ...CommonStyles.shadow
  },
  trackStyle: {
    backgroundColor: Color.textGrey,
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
  btnTextStyle: {
    textTransform: 'uppercase'
  },
  btnContainer: {
    marginVertical: verticalScale(15)
  },
  input: {
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(15),
    ...CommonStyles.shadow,
    marginHorizontal: scale(5)
  },
  imageContainer: {
    width: scale(130),
    height: verticalScale(80),
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(5),
    marginHorizontal: scale(10),
    overflow: 'hidden'
  },
  listView: {
    height: heightPx(50),
    alignItems: 'center',
    marginTop: verticalScale(15)
  },
  iconStyle: {
    width: '40%',
    height: '40%',
    tintColor: Color.white
  },
  innerImageView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
    // backgroundColor: 'red'
  },
  itemtext: {
    color: Color.white,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15)
  },
  foodImage: {
    flex: 1
  },
  foodImageback: {
    width: scale(200),
    height: verticalScale(180),
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  foodSeperator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(15)
  },
  foodSeperatorLine: {
    flex: 1,
    height: verticalScale(4),
    backgroundColor: Color.lightGrey
  },
  foodSeperatorText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginHorizontal: scale(5)
  },
  foodListView: {
    width: '100%',
    marginVertical: verticalScale(10)
  },
  footBoldText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginVertical: scale(15),
    textAlign: 'center'
  },
  innerCircle: {
    width: verticalScale(25),
    height: verticalScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: moderateScale(10),
    borderColor: Color.Primary,
    marginRight: scale(10),
    backgroundColor: Color.white,
    position: 'absolute',
    top: verticalScale(10),
    right: scale(10)
  },
  selectedCircle: {
    backgroundColor: Color.redExtra,
    borderColor: Color.white
  },
  imageCheck: {
    width: '60%',
    height: '60%',
    tintColor: Color.white
  },
  gradientStyleContainer: {
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliceContainer: {
    width: '95%',
    alignSelf: 'center'
  }
})
