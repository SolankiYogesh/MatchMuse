import {StyleSheet} from 'react-native'

import {Color, CommonStyles, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  scrollStyle: {
    marginBottom: verticalScale(50)
  },
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    marginTop: verticalScale(100),
    width: '100%'
  },
  logoImage: {
    width: verticalScale(150),
    height: verticalScale(150),
    tintColor: Color.white
  },
  logoTitle: {
    fontSize: moderateScale(30),
    fontFamily: Fonts.bold,
    color: Color.white,
    textTransform: 'uppercase'
  },
  innerContainer: {
    padding: scale(20),
    borderRadius: moderateScale(15),
    backgroundColor: Color.offWhite,
    marginTop: verticalScale(60)

    // alignItems: 'center'
  },
  inputCOntainer: {
    marginVertical: verticalScale(8),
    width: '85%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    ...CommonStyles.shadow,
    height: verticalScale(55)
  },
  btnStyleContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(15),
    borderRadius: moderateScale(15),
    height: verticalScale(55)
  },
  btntext: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.white
  }
})
