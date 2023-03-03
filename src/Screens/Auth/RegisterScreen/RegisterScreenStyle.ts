import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale, widthPx} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    marginTop: verticalScale(20),
    marginHorizontal: scale(20)
  },
  logoImage: {
    width: verticalScale(150),
    height: verticalScale(150),
    tintColor: Color.white
  },

  logoTitle: {
    fontSize: moderateScale(30),
    fontFamily: Fonts.bold,
    color: Color.white,
    textTransform: 'uppercase',
    marginBottom: verticalScale(80)
  },

  btnImage: {
    width: verticalScale(60),
    height: verticalScale(60),
    marginRight: scale(15),
    alignSelf: 'center',
    marginBottom: verticalScale(15)
  },
  createAccountTxt: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  innerContainer: {
    padding: scale(10),
    borderRadius: moderateScale(20),
    width: widthPx(90)
    // alignItems: 'center'
  },
  inputCOntainer: {
    marginVertical: verticalScale(8),
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    height: verticalScale(55)
  },
  input: {
    fontSize: moderateScale(14)
  },
  btnText: {
    fontSize: moderateScale(15),
    margin: scale(5)
  },

  login: {
    color: Color.Primary
  },
  hintText: {
    marginTop: verticalScale(15),
    fontSize: moderateScale(10),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    textAlign: 'center',
    width: '100%'
  },
  topHinttext: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.medium,
    color: Color.white,
    textAlign: 'center',
    marginVertical: verticalScale(15),
    width: '90%',
    alignSelf: 'center'
  },
  boldText: {
    fontFamily: Fonts.semi_bold
  },
  btnStyleContainer: {
    marginTop: verticalScale(8)
  },
  btn: {
    width: '85%',
    alignSelf: 'center',
    padding: 0,
    height: verticalScale(55)
  },
  textContainer: {
    width: '85%',
    alignSelf: 'center'
  }
})
