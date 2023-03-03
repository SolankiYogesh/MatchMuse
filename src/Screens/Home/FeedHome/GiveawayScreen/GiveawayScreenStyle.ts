import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: Color.offWhite,
    paddingBottom: verticalScale(10),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    justifyContent: 'space-between'
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginLeft: scale(10)
  },
  headerTitle: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginLeft: scale(10)
  },
  hintText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(50),
    marginVertical: verticalScale(15),
    width: '70%'
  },
  newText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginTop: verticalScale(15),
    marginBottom: verticalScale(5),
    marginLeft: scale(20)
  }
})
