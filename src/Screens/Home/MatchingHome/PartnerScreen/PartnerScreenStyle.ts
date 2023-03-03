import {StyleSheet} from 'react-native'

import {Color, CommonStyles} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  partenerItemContainer: {
    width: verticalScale(150),
    height: verticalScale(150),
    backgroundColor: Color.white,
    ...CommonStyles.redShadow,
    margin: scale(10),
    borderRadius: moderateScale(20),
    ...CommonStyles.centerItem
  },
  imageStyle: {
    width: '80%',
    height: '80%'
  },
  listStyle: {
    alignSelf: 'center'
  }
})
