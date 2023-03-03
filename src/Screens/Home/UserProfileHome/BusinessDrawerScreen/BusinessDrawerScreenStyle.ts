import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: scale(10),
    justifyContent: 'center',
    ...CommonStyles.row
  },
  headerMainImageContainer: {
    height: verticalScale(100),
    width: verticalScale(100),
    borderWidth: scale(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(25),
    overflow: 'hidden'
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  secondBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10),
    flex: 1
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
  verticalView: {
    height: verticalScale(30),
    backgroundColor: Color.black,
    width: scale(1),
    bottom: verticalScale(5)
  },
  uploadSmallText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(10),
    color: Color.black,
    textAlign: 'center',
    marginLeft: scale(5),
    width: '100%'
  },
  followerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(5)
  },
  uplocaCount: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold
  },
  gradientButton: {
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(5),
    paddingVertical: verticalScale(7)
  },
  btntext: {
    fontSize: moderateScale(10),
    color: Color.white
  },
  menuContainer: {
    width: '100%',
    paddingRight: scale(10)
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    marginHorizontal: scale(10),
    flex: 1
  },
  usernameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  starImageStyle: {
    width: verticalScale(20),
    height: verticalScale(20),
    marginLeft: scale(10)
  },
  image: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.black,
    marginHorizontal: scale(20)
  },

  smallImageContainer: {
    width: '100%',
    height: '100%'
  },
  imgTintWhite: {
    tintColor: Color.white
  },
  btnToggle: {
    width: verticalScale(30),
    height: verticalScale(30),
    padding: 0
  },
  toogleCOntainer: {
    borderRadius: moderateScale(10)
  },
  rightContainer: {
    flex: 1,
    marginHorizontal: scale(10)
  },
  nameContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
    marginVertical: verticalScale(15)
  },
  fullnameText: {
    fontSize: moderateScale(16.5),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginBottom: verticalScale(10)
  },
  desktext: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  innerViewContainer: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    backgroundColor: Color.offWhite,
    overflow: 'hidden',
    paddingTop: verticalScale(15),
    ...CommonStyles.shadow
  },
  ratingText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  smallRatingText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  }
})
