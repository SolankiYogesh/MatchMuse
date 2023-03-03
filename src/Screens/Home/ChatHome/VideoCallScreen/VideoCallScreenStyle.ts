import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  imageStyle: {
    height: verticalScale(200),
    width: scale(150)
  },
  imageIconnStyle: {
    height: '50%',
    width: '50%',
    tintColor: Color.textGrey
  },
  closeImgae: {
    tintColor: Color.white
  },
  imageback: {
    height: verticalScale(60),
    width: verticalScale(60),
    borderWidth: 1,
    borderRadius: moderateScale(300),
    ...CommonStyles.centerItem,
    marginHorizontal: scale(10),
    backgroundColor: Color.white,
    borderColor: Color.textGrey
  },
  closeback: {
    backgroundColor: Color.redShadeff00,
    borderWidth: 0
  },
  greenbac: {
    backgroundColor: Color.greenShade00ff,
    borderWidth: 0
  },
  btnContainer: {
    ...CommonStyles.row,
    alignSelf: 'center',
    marginVertical: verticalScale(50)
  },
  container: {
    backgroundColor: Color.white,
    ...CommonStyles.centerItem,
    flex: 1
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  timeText: {
    fontSize: moderateScale(13.5),
    fontFamily: Fonts.medium,
    color: Color.black
  }
})
