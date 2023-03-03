import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {
  INPUT_HEIGHT,
  moderateScale,
  scale,
  STATUSBAR_HEIGHT,
  verticalScale
} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  searchButtonContainer: {
    ...CommonStyles.row,
    backgroundColor: Color.deepGrey,
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(20),
    marginLeft: scale(10),
    height: INPUT_HEIGHT,
    marginTop: verticalScale(10)
  },
  headerText: {
    fontSize: moderateScale(15),
    color: Color.darkGrey,
    fontFamily: Fonts.medium,
    marginLeft: scale(15),
    flex: 1
  },
  searchImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.black
  },
  container: {
    backgroundColor: Color.white
  },
  headerContainer: {
    ...CommonStyles.row,
    marginTop: STATUSBAR_HEIGHT
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginLeft: scale(10)
  },
  closeImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.darkGrey
  },
  tabIcon: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.lightGrey,
    marginRight: scale(5)
  },
  selectedTabIcon: {
    tintColor: Color.black
  },
  tabText: {
    fontSize: moderateScale(15),
    color: Color.lightGrey,
    fontFamily: Fonts.semi_bold
  },
  selectedTabText: {
    color: Color.black
  },
  tabContainer: {
    ...CommonStyles.row,
    marginHorizontal: scale(15),
    marginVertical: verticalScale(10),
    ...CommonStyles.centerItem
  },
  tabBackContainer: {
    borderBottomWidth: 2,
    borderBottomColor: Color.lightGrey,
    paddingHorizontal: scale(10)
  },
  selectedTabBackContainer: {
    borderBottomColor: Color.black
  },
  tabContainerView: {
    marginVertical: verticalScale(10)
  },
  btntext: {
    fontSize: moderateScale(15),
    color: Color.black,
    fontFamily: Fonts.semi_bold
  },
  playIcon: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.Primary,
    marginLeft: scale(10)
  },
  btnContainer: {
    alignSelf: 'center',
    marginVertical: verticalScale(20)
  }
})
