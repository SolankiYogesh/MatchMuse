import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, STATUSBAR_HEIGHT, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  headerContainer: {
    ...CommonStyles.row,
    marginTop: STATUSBAR_HEIGHT
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginLeft: scale(10)
  },
  searchButtonContainer: {
    ...CommonStyles.row,
    padding: scale(10),
    backgroundColor: Color.deepGrey,
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(20),
    marginLeft: scale(10)
  },
  headerText: {
    fontSize: moderateScale(15),
    color: Color.darkGrey,
    fontFamily: Fonts.medium,
    marginLeft: scale(15),
    flex: 1
  },
  closeImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.darkGrey
  },
  searchImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.black
  },
  container: {
    backgroundColor: Color.white
  },
  playIcon: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.Primary,
    marginLeft: scale(10)
  },
  btnCOntainer: {
    ...CommonStyles.row
  },
  topContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  topRowView: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  recomeedeText: {
    fontSize: moderateScale(15),
    color: Color.black,
    fontFamily: Fonts.semi_bold
  },
  seeEverythingText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(13)
  },
  longText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(13),
    color: Color.black
  },
  headerTitle: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginLeft: scale(15)
  }
})
