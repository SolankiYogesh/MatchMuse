import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: Color.white,
    paddingBottom: verticalScale(25),
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
  itemView: {
    // padding: scale(10),
    backgroundColor: Color.white,
    borderRadius: moderateScale(15),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(50),
    paddingHorizontal: scale(20),
    borderWidth: 1,
    borderColor: Color.darkGrey
  },
  itemText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.lightGrey
  },
  colorText: {
    color: Color.white
  },
  spaccer: {
    marginRight: scale(10)
  },
  noBorder: {
    borderWidth: 0
  },
  hintText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(50),
    marginVertical: verticalScale(15),
    width: '70%'
  },
  margin: {
    marginLeft: scale(30)
  }
})
