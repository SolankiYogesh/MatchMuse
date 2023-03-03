import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.white
  },
  bottomImages: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.white
  },
  rowHeaderView: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    marginHorizontal: scale(10)
  },
  bigText: {
    fontSize: moderateScale(22),
    fontFamily: Fonts.bold,
    color: Color.white,
    marginLeft: scale(20),
    marginTop: verticalScale(40)
  },
  profileView: {
    ...CommonStyles.row,
    marginBottom: verticalScale(40)
  },
  profileImage1: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  profileImage: {
    width: verticalScale(45),
    height: verticalScale(45),
    borderWidth: scale(2),
    borderColor: Color.white,
    borderRadius: moderateScale(100),
    marginRight: scale(10),
    marginLeft: scale(20),
    marginVertical: verticalScale(10)
  },
  headerMainImageContainer: {
    height: verticalScale(40),
    width: verticalScale(40),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    marginRight: scale(15)
  },
  nameText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.white
  },
  timeText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.white
  },
  bodyView: {
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    backgroundColor: Color.white,
    overflow: 'hidden',
    padding: scale(20),
    flex: 1,
    top: -verticalScale(20)
  },
  queText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginBottom: verticalScale(10)
  },
  ansText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.darkGrey,
    marginBottom: verticalScale(10)
  },
  footerContainer: {
    ...CommonStyles.row,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: Color.deepGrey
  },
  inputView: {
    ...CommonStyles.row,
    paddingHorizontal: scale(10),
    borderWidth: 1,
    borderColor: Color.grey_Shade2,
    flex: 1,
    borderRadius: moderateScale(10),
    padding: scale(5)
  },
  input: {
    flex: 1
  },
  sendBtnImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    marginLeft: scale(10)
  }
})
