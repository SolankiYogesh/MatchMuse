import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../Helpers'
import {moderateScale, verticalScale} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: verticalScale(250),
    height: verticalScale(250),
    tintColor: Color.white
  },
  logoTitle: {
    fontSize: moderateScale(35),
    fontFamily: Fonts.bold,
    color: Color.white,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
})
