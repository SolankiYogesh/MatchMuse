import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {BUTTON_HEIGHT, moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  profileContainer: {
    ...CommonStyles.row,
    marginHorizontal: scale(20),
    padding: scale(15),
    borderRadius: moderateScale(20),
    marginVertical: verticalScale(60),
    justifyContent: 'flex-end'
  },
  container: {
    marginTop: scale(1)
  },
  profileImage: {
    top: verticalScale(20),
    marginRight: scale(15),
    zIndex: 1000,
    position: 'absolute',
    left: '12%'
  },
  textContainer: {
    flex: 0.5
  },
  nameText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.white,
    marginVertical: verticalScale(5)
  },
  hintText: {
    fontSize: moderateScale(12.5),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginVertical: verticalScale(5)
  },
  positionText: {
    fontSize: moderateScale(12.5),
    fontFamily: Fonts.medium,
    color: Color.white,
    textAlign: 'right',
    marginVertical: verticalScale(5),
    marginRight: scale(15)
  },
  progressText: {
    fontSize: moderateScale(10.5),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  progressContainer: {
    ...CommonStyles.row,
    marginHorizontal: scale(20),
    padding: scale(20),
    borderRadius: moderateScale(20),
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    marginVertical: verticalScale(10)
  },
  blackText: {
    color: Color.black
  },
  rowReverce: {
    flexDirection: 'row-reverse'
  },
  textProgressContainer: {
    flex: 1,
    marginLeft: scale(15)
  },
  btnContainer: {
    paddingHorizontal: scale(20),
    ...CommonStyles.centerItem,
    marginVertical: verticalScale(10),
    height: BUTTON_HEIGHT,
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    overflow: 'hidden'
  },
  btnText: {
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(15),
    color: Color.white
  },
  mainContainer: {
    ...CommonStyles.shadow
  }
})
