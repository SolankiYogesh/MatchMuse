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
    left: scale(5),
    zIndex: 1000
  },
  imageBtn: {
    height: verticalScale(25),
    width: verticalScale(25)
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
  input: {
    flex: 1,
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    height: verticalScale(35),
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(10)
  },
  inputCOntainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  hintText: {
    fontSize: moderateScale(15),
    color: Color.black,
    fontFamily: Fonts.medium
  },
  middleText: {
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  clickBoxView: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    borderRadius: moderateScale(15),
    ...CommonStyles.centerItem,
    padding: scale(20),
    width: '80%',
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    height: verticalScale(170),
    overflow: 'hidden'
  },
  plusImage: {
    width: verticalScale(50),
    height: verticalScale(50),
    tintColor: Color.Primary
  },
  shadowVIew: {
    width: verticalScale(80),
    height: verticalScale(80),
    ...CommonStyles.centerItem,
    ...CommonStyles.redShadow,
    backgroundColor: Color.white,
    borderRadius: moderateScale(15)
  },
  goverment_id_Text: {
    marginBottom: verticalScale(15),
    fontSize: moderateScale(15),
    color: Color.black,
    fontFamily: Fonts.medium
  },
  checkBoxVIew: {
    flexDirection: 'row',
    // alignItems: 'center',
    width: '80%',
    alignSelf: 'center'
  },
  checktext: {
    flex: 1,
    fontSize: moderateScale(13),
    color: Color.textGrey,
    fontFamily: Fonts.medium
  },
  plusView: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  docImage: {
    width: '115%',
    height: verticalScale(170),
    position: 'absolute',
    zIndex: 1000
  }
})
