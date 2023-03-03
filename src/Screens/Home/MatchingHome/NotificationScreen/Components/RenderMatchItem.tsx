import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const RenderMatchItem = ({item}: any) => {
  return (
    <View style={styles.innerCotnaier}>
      <View style={styles.itemImageContainer}>
        <Image
          borderRadius={moderateScale(10)}
          resizeMode={'cover'}
          source={{uri: item?.image}}
          style={styles.itemProfileImage}
        />
        {!!item?.isVerified && (
          <Image resizeMode={'contain'} source={Images.greenCheck} style={styles.ItemRightImages} />
        )}
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.profetionText}>{item?.profession}</Text>
        <Image resizeMode={'contain'} style={styles.logoImage} source={Images.logo} />
      </View>
    </View>
  )
}

export default RenderMatchItem

const styles = StyleSheet.create({
  innerCotnaier: {
    width: verticalScale(135),
    ...CommonStyles.redShadow,
    ...CommonStyles.centerItem,
    padding: scale(10),
    borderRadius: moderateScale(20),
    backgroundColor: Color.white
  },
  itemImageContainer: {
    height: verticalScale(70),
    width: verticalScale(70),
    borderRadius: moderateScale(15),
    // overflow: 'hidden',
    borderWidth: 3,
    borderColor: Color.Primary
  },
  logoImage: {
    height: verticalScale(35),
    width: verticalScale(35),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(5)
  },
  ItemRightImages: {
    height: verticalScale(15),
    width: verticalScale(15),
    position: 'absolute',
    zIndex: 1000,
    right: -3,
    bottom: -3
  },
  itemProfileImage: {
    height: '100%',
    width: '100%'
  },
  itemTextContainer: {
    marginTop: verticalScale(5),
    alignItems: 'center'
  },
  nameText: {
    // flex: 1,
    textAlign: 'center',
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    fontSize: moderateScale(15)
  },
  profetionText: {
    textAlign: 'center',
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    fontSize: moderateScale(13)
  }
})
