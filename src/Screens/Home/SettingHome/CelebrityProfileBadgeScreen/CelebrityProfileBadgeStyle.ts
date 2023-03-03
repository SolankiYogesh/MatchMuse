import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {BUTTON_HEIGHT, moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  startImageStyle: {
    width: '60%',
    height: '60%',
    tintColor: Color.white
  },
  imageBack: {
    width: verticalScale(25),
    height: verticalScale(15),
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(5),
    position: 'absolute',
    bottom: verticalScale(10),
    right: scale(10)
  },
  innerImageStyle: {
    width: verticalScale(160),
    height: verticalScale(160),
    borderRadius: moderateScale(10)
  },
  imageProfileView: {
    borderRadius: moderateScale(10),
    marginTop: verticalScale(100),
    alignSelf: 'center',
    width: verticalScale(160),
    height: verticalScale(160),
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  verifyText: {
    fontFamily: Fonts.bold,
    color: Color.black,
    fontSize: moderateScale(17),
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  descText: {
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    fontSize: moderateScale(13),
    textAlign: 'center',
    marginVertical: verticalScale(10),
    marginHorizontal: scale(20)
  },
  gradientStyleContainer: {
    alignSelf: 'center',
    width: '50%',
    height: BUTTON_HEIGHT,
    marginVertical: verticalScale(15)
  },
  btnText: {
    fontFamily: Fonts.semi_bold,
    color: Color.Primary,
    fontSize: moderateScale(15.5),
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  contactText: {
    textDecorationLine: 'underline'
  },
  bottomText: {
    position: 'absolute',
    bottom: verticalScale(20)
  },
  shadowVIew: {
    width: verticalScale(80),
    height: verticalScale(80),
    ...CommonStyles.centerItem,
    ...CommonStyles.redShadow,
    backgroundColor: Color.white,
    borderRadius: moderateScale(15)
  },
  clickBoxView: {
    borderRadius: moderateScale(15),
    ...CommonStyles.centerItem,

    width: verticalScale(160),
    height: verticalScale(160),
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    overflow: 'hidden',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Color.Primary
  },
  borderNull: {borderWidth: 0, padding: 0},
  docImage: {
    width: '100%',
    height: '100%'
  },
  plusImage: {
    width: verticalScale(50),
    height: verticalScale(50),
    tintColor: Color.Primary
  },
  rowView: {
    ...CommonStyles.row,
    alignItems: 'center',
    marginTop: verticalScale(100),
    justifyContent: 'space-between',
    marginHorizontal: scale(20)
  }
})
