import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    marginTop: verticalScale(120),
    width: '100%'
  },
  logoImage: {
    width: verticalScale(150),
    height: verticalScale(150),
    tintColor: Color.white,
    alignSelf: 'center'
  },
  flexView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoTitle: {
    fontSize: moderateScale(30),
    fontFamily: Fonts.bold,
    color: Color.white,
    textTransform: 'uppercase'
  },
  innerView: {
    backgroundColor: Color.offWhite,
    // flex: 1,
    borderRadius: moderateScale(10),
    margin: scale(15),
    width: '90%',
    alignItems: 'center',
    padding: scale(20),
    marginTop: verticalScale(30)
  },
  btnContainer: {
    // padding: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    width: '100%',
    ...CommonStyles.shadow,
    height: verticalScale(65)
    // width: '100%'
  },
  btnImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginRight: scale(15)
  },
  createAccountTxt: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  btn: {
    width: '90%'
  },
  normalBtn: {
    backgroundColor: Color.white,
    marginTop: verticalScale(15),
    width: '90%',
    padding: scale(18)
  },
  registerText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.Primary,
    textTransform: 'uppercase'
  },
  hintText: {
    marginTop: verticalScale(15),
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.offBlack,
    width: '90%',
    textAlign: 'center'
  }
})
