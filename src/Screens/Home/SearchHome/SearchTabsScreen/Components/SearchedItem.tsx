import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const SearchedItem = ({item, isHistory = false, onRemoveItem = () => {}}: any) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.headerMainImageContainer}>
        <Image
          borderRadius={moderateScale(5)}
          resizeMode={'cover'}
          source={{uri: item?.image}}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={CommonStyles.row}>
          <Text style={styles.userNameTex}>{item?.username}</Text>
          <Image
            source={Images.creator_talents_star}
            style={styles.headerStarIcon}
            resizeMode={'contain'}
          />
        </View>
        <Text style={styles.descText}>{item?.description}</Text>
      </View>
      {isHistory && (
        <TouchableOpacity onPress={() => onRemoveItem(item)}>
          <Image style={styles.closeImage} resizeMode={'contain'} source={Images.close} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default SearchedItem

const styles = StyleSheet.create({
  headerMainImageContainer: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  itemContainer: {
    width: '90%',
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    alignSelf: 'center',
    ...CommonStyles.row,
    padding: scale(10),
    borderRadius: moderateScale(20),
    marginVertical: verticalScale(10)
  },
  textContainer: {
    flex: 1,
    marginLeft: scale(10)
  },
  userNameTex: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  descText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  headerStarIcon: {
    height: verticalScale(15),
    width: verticalScale(15),
    marginLeft: scale(10)
  },
  closeImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.darkGrey,
    marginRight: scale(15)
  }
})
