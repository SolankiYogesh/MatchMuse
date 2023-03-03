import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    marginTop: verticalScale(100),
    width: '100%'
  },
  checkEmoji: {
    height: verticalScale(20),
    width: verticalScale(20)
  },
  logoImage: {
    width: verticalScale(150),
    height: verticalScale(150),
    tintColor: Color.white
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  logoTitle: {
    fontSize: moderateScale(30),
    fontFamily: Fonts.bold,
    color: Color.white,
    textTransform: 'uppercase'
  },

  innerContainer: {
    padding: scale(20),
    borderRadius: moderateScale(15),
    backgroundColor: Color.offWhite,
    marginTop: verticalScale(60)

    // alignItems: 'center'
  },
  inputCOntainer: {
    marginVertical: verticalScale(8),
    width: '85%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    ...CommonStyles.shadow,
    height: verticalScale(55)
  },

  login: {
    color: Color.blueShade
  },
  hintText: {
    marginTop: verticalScale(15),
    fontSize: moderateScale(12.5),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    textAlign: 'center'
  },

  btnStyleContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(15),
    borderRadius: moderateScale(15),
    height: verticalScale(55)
  },
  btntext: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  btn: {
    width: '85%',
    alignSelf: 'center'
  },
  textContainer: {
    width: '80%',
    alignSelf: 'center'
  },
  scrollStyle: {
    marginBottom: verticalScale(50)
  },
  rightText: {
    marginLeft: scale(5),
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    fontStyle: 'italic',
    color: Color.textGrey
  },
  forgotxt: {
    color: Color.Primary
  },
  profileImageStyle: {
    width: verticalScale(100),
    height: verticalScale(100),
    borderRadius: moderateScale(20),
    borderWidth: 2,
    borderColor: Color.Primary,
    alignSelf: 'center'
  },
  usernameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  starImageStyle: {
    width: verticalScale(20),
    height: verticalScale(20),
    marginLeft: scale(10)
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10)
  },
  logoSecondImage: {
    width: verticalScale(50),
    height: verticalScale(50),
    tintColor: Color.Primary
  },
  logoSecondTitle: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.bold,
    color: Color.Primary,
    textTransform: 'uppercase'
  }
})
