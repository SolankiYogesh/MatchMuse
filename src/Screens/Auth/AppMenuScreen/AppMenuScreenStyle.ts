import {StyleSheet} from 'react-native'

import {Color} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.transparent
  },
  logoAnimateStyle: {
    width: verticalScale(200),
    height: verticalScale(200)
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomView: {
    flex: 1,
    borderTopLeftRadius: moderateScale(20),
    backgroundColor: Color.white,
    borderTopRightRadius: moderateScale(20),
    padding: scale(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  imageBack: {
    width: verticalScale(90),
    height: verticalScale(90),
    marginVertical: verticalScale(10)
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  contentContainerStyle: {
    alignSelf: 'center'
  }
})
