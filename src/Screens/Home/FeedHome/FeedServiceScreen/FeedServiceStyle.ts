import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  imageView: {
    width: '90%',
    alignSelf: 'center',
    height: verticalScale(150),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(15)
  },
  absoluteView: {
    position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    bottom: verticalScale(10),
    marginBottom: verticalScale(15)
  },
  bigText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.white
  },
  smallText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.white
  }
})
