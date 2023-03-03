import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  logoImage: {
    width: verticalScale(70),
    height: verticalScale(70),
    tintColor: Color.white
  },
  logoTitle: {
    fontSize: moderateScale(30),
    fontFamily: Fonts.bold,
    color: Color.white,
    textTransform: 'uppercase',
    marginLeft: scale(10)
  },
  topContainer: {
    ...CommonStyles.row,
    alignSelf: 'center',
    marginTop: verticalScale(50)
  },
  list: {
    marginVertical: verticalScale(10),
    flex: 1
  }
})
