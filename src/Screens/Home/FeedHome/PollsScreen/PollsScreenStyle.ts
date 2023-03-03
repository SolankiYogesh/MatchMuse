import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  headerStyle: {
    paddingVertical: verticalScale(5),
    padding: scale(5)
  },
  newText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginTop: verticalScale(15),
    marginBottom: verticalScale(5)
  },
  toptext: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(20)
  }
})
