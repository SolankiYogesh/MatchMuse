import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  smallImageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(15)
  },
  firstBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: verticalScale(55),
    borderWidth: 1,
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    height: verticalScale(55),
    overflow: 'hidden'
  },
  profileCOntainer: {
    ...CommonStyles.row,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: verticalScale(25)
  },
  profileNameCOntainer: {
    marginLeft: scale(10)
  },
  profileNameText: {
    fontSize: moderateScale(15),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginBottom: verticalScale(5)
  },
  profileChangetext: {
    fontSize: moderateScale(13),
    color: Color.Primary,
    fontFamily: Fonts.medium,
    marginBottom: verticalScale(5)
  },
  hintText: {
    fontSize: moderateScale(12),
    color: Color.textGrey,
    fontFamily: Fonts.medium,
    width: '85%',
    alignSelf: 'center',
    marginLeft: scale(10)
  },
  btnText: {
    color: Color.Primary,
    fontFamily: Fonts.semi_bold
  },
  nameText: {
    fontSize: moderateScale(16),
    color: Color.textGrey,
    fontFamily: Fonts.medium,
    marginLeft: scale(10),
    width: '85%',
    alignSelf: 'center'
  },
  radioViewContainer: {
    ...CommonStyles.row,
    width: '85%',
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
  similarAccountText: {
    fontSize: moderateScale(16),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginLeft: scale(25),
    width: '85%',
    alignSelf: 'center',
    marginTop: verticalScale(10)
  },
  includeYourAccText: {
    fontSize: moderateScale(13),
    color: Color.black,
    fontFamily: Fonts.medium,
    marginLeft: scale(15),
    width: '60%',
    alignSelf: 'center'
  },
  switchContainer: {
    ...CommonStyles.row,
    width: '85%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  btnStyleContainer: {
    width: '85%',
    alignSelf: 'center'
  },
  gradientStyleContainer: {
    height: verticalScale(50)
  },
  disableText: {
    fontSize: moderateScale(16),
    color: Color.Primary,
    fontFamily: Fonts.bold,
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  }
})
