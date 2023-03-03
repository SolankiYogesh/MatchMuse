import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  mainBigText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginVertical: verticalScale(15),
    width: '90%',
    alignSelf: 'center'
  },
  mainSmallText: {
    fontSize: moderateScale(12.5),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    width: '90%',
    alignSelf: 'center'
  }
})
