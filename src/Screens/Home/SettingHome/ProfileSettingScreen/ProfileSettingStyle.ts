import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  boxView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    marginTop: verticalScale(15),
    borderRadius: moderateScale(20),
    padding: scale(5)
  },
  imageBtn: {
    height: verticalScale(25),
    width: verticalScale(25)
  },
  hintText: {},
  rowContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    padding: scale(10)
  },
  inLoveImage: {
    height: verticalScale(35),
    width: verticalScale(35),
    left: scale(10),
    zIndex: 1000
  },
  inputCOntainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    height: verticalScale(35),
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(10),
    paddingLeft: scale(18)
  },
  expendView: {
    paddingVertical: verticalScale(10)
  },
  btnToggle: {
    width: verticalScale(40),
    height: verticalScale(40),
    alignSelf: 'flex-end',
    marginTop: verticalScale(10)
  },
  smallImageContainer: {
    width: '100%',
    height: '100%',
    tintColor: Color.white
  },
  toogleCOntainer: {
    borderRadius: moderateScale(10)
  },
  itemContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
    width: '85%',
    alignSelf: 'center'
  },
  itemText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(18),
    color: Color.black,
    flex: 1
  },
  container: {
    marginTop: verticalScale(25),
    width: '100%'
  }
})
