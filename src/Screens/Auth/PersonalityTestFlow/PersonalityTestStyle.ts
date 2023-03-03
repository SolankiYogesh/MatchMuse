import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../Helpers'
import {moderateScale, verticalScale} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  topText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    alignSelf: 'center',
    marginTop: verticalScale(35),
    width: '85%'
  },
  bottomText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    alignSelf: 'center',
    marginTop: verticalScale(35),
    width: '85%',
    textAlign: 'center'
  }
})
