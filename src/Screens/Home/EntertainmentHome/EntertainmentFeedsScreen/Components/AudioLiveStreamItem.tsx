import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'

import {Color, CommonStyles, Fonts, Images, Screen, Utility} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, W_WIDTH} from '../../../../../Helpers/Responsive'

const AudioLiveStreamItem = ({item, isColumn = false}: any) => {
  const navigation: any = useNavigation()
  return (
    <TouchableOpacity
      style={[styles.itemContainer, isColumn && styles.columnView]}
      onPress={() => navigation.navigate(Screen.AudioLiveStreamDetailsScreen)}
    >
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={styles.videoImageContainer}
      >
        <Image source={Images.ear} resizeMode={'contain'} style={styles.videoIcon} />
        <Text style={styles.liveText}>{Utility.convertToFriendlyNumber(item?.views)}</Text>
      </LinearGradient>
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={[styles.videoImageContainer, styles.eyeImageContainer]}
      >
        <Image source={Images.user_network} resizeMode={'contain'} style={styles.videoIcon} />
        <Text style={styles.liveText}>{item?.users}</Text>
      </LinearGradient>
      <View style={[CommonStyles.flex, CommonStyles.centerItem]}>
        <View style={styles.border1}>
          <View style={styles.border2}>
            <View style={styles.border3}>
              <View style={styles.headerMainImageContainer}>
                <Image
                  borderRadius={moderateScale(5)}
                  resizeMode={'cover'}
                  source={{uri: item?.profileImage}}
                  style={styles.profileImage}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={[CommonStyles.row, styles.alignRow]}>
            <Text style={styles.usernameText}>{item?.username}</Text>
            <Image source={Images.greenCheck} style={styles.smallCheck} resizeMode={'contain'} />
          </View>
          <Text style={styles.deskText}>{item?.deskText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AudioLiveStreamItem

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Color.white,
    ...CommonStyles.redShadow,
    borderRadius: moderateScale(15),
    width: verticalScale(150),
    height: verticalScale(150),
    borderTopLeftRadius: moderateScale(15)
  },
  columnView: {
    width: W_WIDTH / 3.2
  },
  videoImageContainer: {
    ...CommonStyles.row,
    padding: scale(5),
    position: 'absolute',
    zIndex: 1000,
    borderBottomRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(15)
  },
  liveText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginLeft: scale(5)
  },
  videoIcon: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.white
  },
  eyeImageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: moderateScale(10)
  },
  headerMainImageContainer: {
    height: verticalScale(40),
    width: verticalScale(40),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(10),
    overflow: 'hidden'
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  border1: {
    borderWidth: scale(0.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.redRGB1,
    borderRadius: moderateScale(10),
    padding: scale(3)
  },
  border2: {
    borderWidth: scale(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.redRGB2,
    borderRadius: moderateScale(10),
    padding: scale(3)
  },
  border3: {
    borderWidth: scale(0.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.redRGB3,
    borderRadius: moderateScale(10),
    padding: scale(3)
  },
  usernameText: {
    color: Color.black,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(12),
    textAlign: 'center'
  },
  deskText: {
    color: Color.darkGrey,
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(10),
    textAlign: 'center'
  },
  smallCheck: {
    height: verticalScale(9),
    width: verticalScale(9),
    marginLeft: scale(5)
  },
  rowView: {
    marginLeft: scale(10)
  },
  alignRow: {
    alignSelf: 'center'
  }
})
