import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  headerTitle: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginLeft: scale(15)
  },
  headerContainer: {
    width: '100%',
    // ...CommonStyles.row,
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    padding: scale(15),
    paddingVertical: verticalScale(20),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    justifyContent: 'space-between'
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  dotMenu: {
    width: verticalScale(25),
    height: verticalScale(25)
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  headerMainImageContainer: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  timeText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginTop: verticalScale(10)
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginRight: scale(10),
    flex: 1
  },
  descText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  postViewContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: verticalScale(15)
  },
  textContainer: {
    marginLeft: scale(10)
  },
  innerView: {
    justifyContent: 'space-between'
  },
  commentContainer: {
    alignSelf: 'center',
    width: '90%'
  },
  greyTint: {
    tintColor: Color.lightGrey
  },
  heartImage: {
    width: verticalScale(25),
    height: verticalScale(25)
  },
  replytext: {
    marginLeft: scale(10)
  },
  underLine: {
    textDecorationLine: 'underline',
    fontSize: moderateScale(15)
  }
})
