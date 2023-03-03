import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  mainImageView: {
    width: '100%',
    height: heightPx(50),
    ...CommonStyles.shadow
  },

  gradientStyleContainer: {
    height: verticalScale(45),
    padding: scale(10),
    borderRadius: moderateScale(15),
    width: '90%',
    alignSelf: 'center'
  },

  bottomImages: {
    height: verticalScale(30),
    width: verticalScale(30),
    // tintColor: Color.black,
    marginRight: scale(15)
  },
  primaryImage: {
    tintColor: Color.Primary,
    marginVertical: verticalScale(10)
  },
  tintColorBlack: {
    tintColor: Color.Primary
  },
  likeCount: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(20)
  },
  topText: {
    fontSize: moderateScale(22),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  textContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  voteText: {
    marginRight: scale(10),
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  },
  dotView: {
    width: verticalScale(5),
    height: verticalScale(5),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(100),
    marginRight: scale(10)
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.white
  },
  imageBack: {
    position: 'absolute',
    zIndex: 1000,
    top: verticalScale(10),
    left: scale(10)
  },
  animatedImage: {
    position: 'absolute',
    zIndex: 1000,
    top: verticalScale(10),
    right: scale(10)
  },
  likeView: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  labelText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginBottom: verticalScale(5)
  },
  bodyText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    marginBottom: verticalScale(15)
  }
})
