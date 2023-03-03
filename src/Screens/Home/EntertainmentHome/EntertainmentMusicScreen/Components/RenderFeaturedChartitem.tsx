import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {Color, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const RenderFeaturedChartitem = ({item}: any) => {
  return (
    <LinearGradient
      start={{x: 0.3, y: 0}}
      end={{x: 0.8, y: 1}}
      locations={[0.1865, 0.8077]}
      colors={item?.colors}
      style={styles.itemContainer}
    >
      <View style={styles.rowView}>
        <Text style={styles.titleText}>{item?.title}</Text>
        <Image source={Images.rightArrow} style={styles.arrowImage} resizeMode={'contain'} />
      </View>
      <Text style={styles.formtext}>{item?.from}</Text>
      <Text style={styles.descText}>{item?.descText}</Text>
    </LinearGradient>
  )
}

export default RenderFeaturedChartitem

const styles = StyleSheet.create({
  arrowImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    tintColor: Color.white,
    marginTop: verticalScale(10)
  },
  rowView: {
    flexDirection: 'row'
  },
  titleText: {
    fontSize: moderateScale(22),
    fontFamily: Fonts.bold,
    color: Color.white,
    width: scale(100)
  },
  itemContainer: {
    marginHorizontal: scale(10),
    padding: scale(15),
    borderRadius: moderateScale(15)
  },
  formtext: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Color.lightGrey,
    marginVertical: verticalScale(10)
  },
  descText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginTop: verticalScale(40)
  }
})
