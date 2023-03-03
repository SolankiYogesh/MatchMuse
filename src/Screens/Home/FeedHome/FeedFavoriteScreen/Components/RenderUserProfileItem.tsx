import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Animated, {FadeInDown} from 'react-native-reanimated'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, W_WIDTH} from '../../../../../Helpers/Responsive'

const RenderUserProfileItem = ({item, onPress = () => {}}: any) => {
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
  return (
    <AnimatedTouchableOpacity entering={FadeInDown} style={styles.container} onPress={onPress}>
      <View style={styles.headerMainImageContainer}>
        <Image
          borderRadius={moderateScale(5)}
          resizeMode={'cover'}
          source={{uri: item?.image}}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{item?.username}</Text>
        <Image
          resizeMode={'contain'}
          source={Images.creator_talents_star}
          style={styles.followIcon}
        />
      </View>
      <View>
        <View style={CommonStyles.row}>
          <Image resizeMode={'contain'} source={Images.groupImage} style={styles.headerStarIcon} />
          <Text style={styles.followersText}>{item?.followers}</Text>
        </View>
        <View style={CommonStyles.row}>
          <Image
            resizeMode={'contain'}
            source={Images.user_start_icon_blue_128}
            style={styles.followIcon}
          />
          <Text style={styles.followersText}>{item?.starCount}</Text>
        </View>
      </View>
    </AnimatedTouchableOpacity>
  )
}

export default RenderUserProfileItem

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(10),
    width: W_WIDTH / 3.6,
    backgroundColor: Color.white,
    marginVertical: verticalScale(10),
    ...CommonStyles.centerItem,
    padding: scale(10),
    borderRadius: moderateScale(10)
  },
  headerMainImageContainer: {
    height: verticalScale(80),
    width: verticalScale(80),
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
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: scale(10),
    marginTop: verticalScale(5)
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginRight: scale(10)
  },
  headerStarIcon: {
    height: verticalScale(15),
    width: verticalScale(15)
  },
  followersText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    marginLeft: scale(10),
    marginTop: verticalScale(5)
  },
  followIcon: {
    height: verticalScale(15),
    width: verticalScale(15)
  }
})
