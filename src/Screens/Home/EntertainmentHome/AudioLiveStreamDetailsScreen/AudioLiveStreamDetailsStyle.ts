import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {
  heightPx,
  INPUT_HEIGHT,
  moderateScale,
  scale,
  STATUSBAR_HEIGHT,
  verticalScale
} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: heightPx(15)
  },
  bigImage80: {
    marginBottom: verticalScale(15)
  },
  backImage: {
    width: verticalScale(35),
    height: verticalScale(35),
    tintColor: Color.white,
    marginVertical: STATUSBAR_HEIGHT
  },
  videoIcon: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.white
  },
  liveText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginLeft: scale(5),
    flex: 0,
    flexGrow: 0
  },
  earImageBack: {
    ...CommonStyles.row,
    backgroundColor: Color.whiteRGB1,
    padding: scale(5),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
    width: '18%'
  },
  innerView: {
    marginHorizontal: scale(20),
    flex: 1
  },
  textContainer: {
    marginTop: verticalScale(30)
  },
  podcastNameText: {
    fontSize: moderateScale(22),
    fontFamily: Fonts.bold,
    color: Color.white
  },
  createrName: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.Primary,
    marginVertical: verticalScale(10)
  },
  descText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.lightGrey
  },
  tagText: {
    color: Color.white,
    marginVertical: verticalScale(10)
  },
  sendImage: {
    tintColor: Color.white,
    height: verticalScale(25),
    width: verticalScale(25)
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    ...CommonStyles.row
  },
  inputInnerView: {
    ...CommonStyles.row,
    height: INPUT_HEIGHT,
    borderWidth: 1,
    borderColor: Color.darkGrey,
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(15),
    width: '90%',
    paddingHorizontal: scale(15)
  },
  input: {
    flex: 1,
    fontSize: moderateScale(15),
    color: Color.white
  },
  imageback: {
    marginHorizontal: scale(15),
    height: INPUT_HEIGHT
  }
})
