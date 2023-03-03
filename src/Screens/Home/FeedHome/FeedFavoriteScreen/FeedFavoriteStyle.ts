import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(15),
    overflow: 'hidden',
    marginHorizontal: scale(15)
  },
  linearContainer: {
    // flex: 1,
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btntext: {
    fontSize: moderateScale(16),
    color: Color.white,
    fontFamily: Fonts.medium
  },
  notSelectedbtntext: {
    color: Color.Primary
  }
})
