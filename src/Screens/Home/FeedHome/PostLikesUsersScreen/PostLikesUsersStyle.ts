import {StyleSheet} from 'react-native'

import {Color, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

export const styles = StyleSheet.create({
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30)
  },

  headerTitle: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginLeft: scale(15)
  },
  heartView: {
    alignSelf: 'center',
    marginVertical: verticalScale(20)
  },
  heartImage: {
    width: verticalScale(55),
    height: verticalScale(55)
  },
  likeCountText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(25),
    color: Color.black,
    marginLeft: scale(10)
  },
  searchImage: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.black,
    marginRight: scale(15)
  },
  input: {
    flex: 1,
    fontSize: moderateScale(15)
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.lightGrey,
    width: '90%',
    alignSelf: 'center',
    padding: scale(10),
    borderRadius: moderateScale(10)
  },
  listStyle: {
    marginTop: verticalScale(20)
  }
})
