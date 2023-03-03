import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../Helpers'
import {moderateScale, scale, STATUSBAR_HEIGHT, verticalScale} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  searchImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.black
  },
  searchButtonContainer: {
    ...CommonStyles.row,
    padding: scale(10),
    backgroundColor: Color.deepGrey,
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(20),
    marginTop: STATUSBAR_HEIGHT
  },
  headerText: {
    fontSize: moderateScale(15),
    color: Color.darkGrey,
    fontFamily: Fonts.medium,
    marginLeft: scale(15)
  },
  container: {
    backgroundColor: Color.white,
    paddingTop: verticalScale(10)
  },
  listStyle: {
    marginTop: verticalScale(15)
  }
})
