import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(25),
    width: '90%',
    alignSelf: 'center'
  },
  itemContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
    width: '100%',
    paddingRight: scale(20)
  },
  itemText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(16),
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  middleText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(11),
    color: Color.greyShade,
    marginBottom: verticalScale(5)
  },
  bottomText: {
    color: Color.darkGrey,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(11)
  },
  rowTextContainer: {
    marginRight: scale(20),
    flex: 1
  },
  reuiredText: {
    color: Color.darkGrey
  }
})
