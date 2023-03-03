import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  btnContainer: {
    width: '85%',
    alignSelf: 'center',
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(15)
  },
  imageFirstView: {
    width: verticalScale(25),
    height: verticalScale(25)
  },
  titleText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(15)
  },
  imageLastView: {
    width: verticalScale(20),
    height: verticalScale(20)
  },
  devider: {
    marginTop: verticalScale(15),
    flex: 1
  },
  bottomView: {
    width: '80%',
    alignSelf: 'center'
  },
  versionText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(15),
    textAlign: 'center',
    marginVertical: verticalScale(20)
  },
  containerStyle: {
    ...CommonStyles.row
  },
  imageStyle: {
    width: verticalScale(25),
    height: verticalScale(25),
    marginRight: scale(15)
  }
})
