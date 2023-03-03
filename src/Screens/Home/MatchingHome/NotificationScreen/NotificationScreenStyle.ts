import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  headerTitles: {
    fontFamily: Fonts.medium,
    color: Color.black,
    fontSize: moderateScale(16),
    marginLeft: scale(20),
    marginVertical: verticalScale(10)
  },
  itemSeparator: {
    marginHorizontal: scale(10)
  },
  contentStyle: {
    paddingLeft: scale(20),
    paddingVertical: verticalScale(15)
  },
  activityContentStyle: {
    // paddingLeft: scale(20),
    paddingBottom: verticalScale(25)
    // marginBottom: verticalScale(150),
  }
})
