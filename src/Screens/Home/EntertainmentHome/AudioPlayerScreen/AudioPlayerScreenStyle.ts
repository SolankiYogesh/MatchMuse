import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {
  moderateScale,
  scale,
  STATUSBAR_HEIGHT,
  verticalScale,
  W_WIDTH,
  widthPx
} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  imageContainer: {
    ...CommonStyles.viewFull
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.white,
    marginLeft: scale(20),
    marginVertical: verticalScale(10),
    marginTop: STATUSBAR_HEIGHT
  },
  audioImageContainer: {
    width: '100%',
    marginVertical: verticalScale(80),
    alignItems: 'center',
    justifyContent: 'center'
  },
  wave: {
    width: W_WIDTH,
    height: verticalScale(150)
  },
  podcastImage: {
    width: widthPx(50),
    height: widthPx(50),
    borderRadius: moderateScale(20),
    ...CommonStyles.shadow,
    alignSelf: 'center',
    position: 'absolute'
  },
  audioTitle: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.white
  },
  singerNames: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginVertical: verticalScale(5)
  },
  innerView: {
    width: '95%',
    alignSelf: 'center'
  },
  markerStyle: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    width: moderateScale(13),
    height: moderateScale(13),
    ...CommonStyles.shadow
  },
  soundMarkerStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    backgroundColor: Color.white,
    justifyContent: 'center',
    ...CommonStyles.shadow
  },
  trackStyle: {
    backgroundColor: Color.lightGrey,
    height: verticalScale(7)
  },
  soundTrackStyle: {
    backgroundColor: Color.lightGrey,
    height: verticalScale(3.5)
  },

  soundSelectedStyle: {
    backgroundColor: Color.white,
    height: verticalScale(3.5),
    borderRadius: moderateScale(30)
  },
  timeView: {
    ...CommonStyles.row,
    width: '85%',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  timeText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  skipButtonImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    tintColor: Color.white
  },
  playButtonImage: {
    width: moderateScale(60),
    height: moderateScale(60),
    tintColor: Color.white,
    marginHorizontal: scale(20)
  },
  buttonContainer: {
    ...CommonStyles.row,
    width: '60%',
    alignSelf: 'center',
    marginVertical: verticalScale(50),
    justifyContent: 'center'
  },
  soundContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginHorizontal: scale(20)
  },
  soundImage: {
    width: moderateScale(22),
    height: moderateScale(22),
    marginHorizontal: scale(5)
  },
  textContainer: {
    marginVertical: verticalScale(15),
    width: '95%',
    alignSelf: 'center'
  },
  sliceContainerStyle: {
    width: '95%',
    alignSelf: 'center'
  },
  sliceContainerStyle1: {
    width: '90%',
    alignSelf: 'center'
  }
})
