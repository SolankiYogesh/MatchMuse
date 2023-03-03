import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  kingImage: {
    width: verticalScale(40),
    height: verticalScale(40),
    marginVertical: verticalScale(10)
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.white
  },
  eventNameText: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.bold,
    color: Color.white,
    marginBottom: verticalScale(5)
  },
  descText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  awardNameText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(10)
  },
  headerTextContainer: {
    marginLeft: scale(10),
    flex: 1
  },
  radioContainer: {
    ...CommonStyles.row,
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  radioButtonContainer: {
    ...CommonStyles.centerItem,
    backgroundColor: Color.red_start,
    padding: scale(10),
    paddingHorizontal: scale(15)
  },
  radioButtonText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  selectedRadio: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    padding: scale(15),
    borderRadius: moderateScale(15),
    paddingHorizontal: scale(20)
  },
  selectedRadiotext: {
    color: Color.red_start
  },
  headerMainImageContainer: {
    height: verticalScale(60),
    width: verticalScale(60),
    borderWidth: scale(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.white,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  initialProfileImage: {
    height: verticalScale(80),
    width: verticalScale(80)
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  srTextView: {
    flexDirection: 'row'
  },
  srText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.white
  },
  srTextprimary: {color: Color.Primary, marginBottom: verticalScale(10)},
  srSmallText: {
    fontSize: moderateScale(9),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  awardView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(15)
  },
  awardContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: verticalScale(15)
  },
  imageWhite: {
    tintColor: Color.white,
    width: verticalScale(15),
    height: verticalScale(15)
  },
  initialView: {
    marginTop: verticalScale(60)
  },
  itemContainer: {
    ...CommonStyles.row,
    backgroundColor: Color.white,
    marginVertical: verticalScale(10),
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    padding: scale(10)
  },
  listContainer: {
    backgroundColor: Color.offWhite,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    overflow: 'hidden',
    flex: 1
  },
  nameContainer: {
    flex: 1,
    marginLeft: scale(10)
  },
  points: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.darkGrey
  },

  username: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginBottom: verticalScale(10)
  },
  otherHeaderView: {
    height: verticalScale(60),
    width: verticalScale(60),
    borderColor: Color.Primary
  }
})
