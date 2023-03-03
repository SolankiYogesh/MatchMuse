import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Color.white
  },
  verticalView: {
    height: verticalScale(40),
    backgroundColor: Color.black,
    width: scale(2),
    bottom: verticalScale(5)
  },
  imgTintWhite: {
    tintColor: Color.white
  },
  middleInnerContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20)
  },
  bigButtonContainer: {
    width: '100%',
    height: heightPx(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    backgroundColor: Color.offWhite,
    overflow: 'hidden',
    ...CommonStyles.shadow
  },
  bigPlusImgae: {
    width: verticalScale(100),
    height: verticalScale(100),
    tintColor: Color.Primary
  },
  bigUploadText: {
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(25),
    color: Color.Primary,
    textAlign: 'center',
    width: '70%'
  },
  primaryBack: {
    color: Color.Primary
  },
  gradientContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: verticalScale(90),
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(15),
    zIndex: 1000
    // opacity: 0.8,
  },
  usernameStylebig: {
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(15),
    color: Color.white,
    marginRight: scale(10),
    opacity: 1
  },
  rightImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    opacity: 1
  },
  smallImage: {
    width: verticalScale(40),
    height: verticalScale(40),
    tintColor: Color.Primary
  },
  uploadSmallText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(10),
    color: Color.black,
    textAlign: 'center',
    marginLeft: scale(5),
    width: '100%'
  },
  uplocaCount: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold
  },
  firstBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    padding: scale(10),
    borderWidth: 4,
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    height: '100%'
  },
  padding0: {
    padding: 0,
    borderWidth: 4,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  mainRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scale(10),
    marginVertical: verticalScale(20),
    height: verticalScale(120)
  },
  secondBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    padding: scale(10)
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(5)
  },
  followerImage: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  btnSmallContainer: {
    borderRadius: moderateScale(10),
    overflow: 'hidden'
  },
  btnSmallText: {
    fontSize: moderateScale(11),
    color: Color.white,
    paddingHorizontal: scale(10),
    fontFamily: Fonts.medium,
    textAlign: 'center'
  },
  followerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(5)
  },
  linearContainer: {
    // padding: scale(5),
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadowContainer: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    overflow: 'hidden'
  },
  shadowContainerStyle: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    overflow: 'hidden',
    marginBottom: verticalScale(20),
    backgroundColor: Color.white
    // ...CommonStyles.redShadow
  },
  rowShadowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    marginVertical: verticalScale(15)
  },
  menuItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  colorView: {
    backgroundColor: Color.Primary,
    top: verticalScale(5),
    height: verticalScale(30)
  },
  menuText: {
    fontSize: moderateScale(11),
    color: Color.black,
    fontFamily: Fonts.medium,
    marginVertical: verticalScale(5)
  },
  menuImage: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.black
  },
  greenDot: {
    width: verticalScale(20),
    height: verticalScale(20),
    backgroundColor: Color.green_shade,
    borderRadius: moderateScale(300)
  },
  tabIconBack: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    padding: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(20)
  },
  tabImage: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.Primary
  },
  tintColorWhite: {
    tintColor: Color.white
  },
  touchableContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...CommonStyles.shadow,
    marginHorizontal: scale(5),
    backgroundColor: Color.white,
    borderRadius: moderateScale(20),
    height: verticalScale(150),
    // overflow: 'hidden',
    zIndex: 999
  },

  gridCotianer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: verticalScale(5)
  },
  textContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    borderRadius: moderateScale(20),
    padding: scale(10),
    width: '90%',
    alignSelf: 'center'
  },
  input: {
    minHeight: verticalScale(100),
    maxHeight: verticalScale(150)
  },
  appScollCOntainer: {
    marginBottom: verticalScale(100)
  },
  biotext: {
    fontSize: moderateScale(15),
    color: Color.black,
    fontFamily: Fonts.medium,
    marginVertical: verticalScale(10),
    marginLeft: scale(20)
  },
  innerContainer: {
    width: '45%',
    alignSelf: 'center',
    marginVertical: verticalScale(50),
    padding: scale(20),
    borderRadius: moderateScale(20)
  },
  btnQueText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    color: Color.white,
    textAlign: 'center'
  },
  tabViewContainer: {
    marginTop: verticalScale(20)
  },
  imageContainer: {
    zIndex: 1000,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallImageContainer: {
    width: '100%',
    height: '100%'
  },
  absoluteButton: {
    position: 'absolute',
    zIndex: 1000,
    right: scale(20),
    bottom: verticalScale(20)
  },
  abtnImage: {
    borderRadius: moderateScale(5),
    width: verticalScale(50),
    height: verticalScale(50),
    ...CommonStyles.centerItem
  },
  btnToggle: {
    width: verticalScale(40),
    height: verticalScale(40),
    position: 'absolute',
    zIndex: 1000,
    right: scale(15),
    top: verticalScale(15)
  },
  toogleCOntainer: {
    borderRadius: moderateScale(10)
  }
})
