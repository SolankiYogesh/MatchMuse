import React, {memo, useMemo, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {TapGestureHandler} from 'react-native-gesture-handler'

import AnimatedHeart from '../../../../../Components/Animations/AnimatedHeart'
import ChatModal from '../../../../../Components/Modals/ChatModal'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const RenderFeedItem = ({item}: any) => {
  const [isHeart, setISHeart] = useState(false)
  const [isChatModal, setISChatModal] = useState(false)
  const renderHeaderView = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerMainImageContainer}>
          <Image
            borderRadius={moderateScale(5)}
            resizeMode={'cover'}
            source={{uri: item?.image}}
            style={styles.profileImage}
          />
        </View>
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{item?.name}</Text>
            <Image
              resizeMode={'contain'}
              source={Images.creator_talents_star}
              style={styles.headerStarIcon}
            />
          </View>
          <View style={styles.nameContainer}>
            <Image
              resizeMode={'contain'}
              source={Images.location_line}
              style={[styles.headerStarIcon, styles.primaryTint]}
            />
            <Text style={styles.locationText}>{item?.location}</Text>
            <Text style={styles.locationText}>{`(${item?.distanc}km)`}</Text>
          </View>
        </View>
        <View style={styles.headerBtnContainer}>
          <TouchableOpacity onPress={() => setISChatModal(true)}>
            <Image
              resizeMode={'contain'}
              source={Images.comment_send_64}
              style={styles.headerSmallIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode={'contain'}
              source={Images.rotate_left}
              style={styles.headerSmallIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode={'contain'}
              source={Images.close}
              style={[styles.headerSmallIcon, styles.tintPrimary]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }, [item])

  const renderImage = useMemo(() => {
    return (
      <TapGestureHandler numberOfTaps={2} onActivated={() => setISHeart(true)}>
        <Image
          borderBottomLeftRadius={moderateScale(20)}
          borderBottomRightRadius={moderateScale(20)}
          resizeMode={'cover'}
          source={{uri: item?.image}}
          style={styles.bigProifleImage}
        />
      </TapGestureHandler>
    )
  }, [item?.image])

  const renderBottom = useMemo(() => {
    return (
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Image source={Images.rocket_color} resizeMode={'contain'} style={styles.bottomImages} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Images.electric_color}
            resizeMode={'contain'}
            style={styles.bottomImages}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.logo} resizeMode={'contain'} style={styles.bottomImages} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.group_color} resizeMode={'contain'} style={styles.bottomImages} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Images.bookmark_color}
            resizeMode={'contain'}
            style={styles.bottomImages}
          />
        </TouchableOpacity>
      </View>
    )
  }, [])

  return (
    <View style={styles.itemContainer}>
      {renderHeaderView}
      {renderImage}
      {renderBottom}
      {isHeart && <AnimatedHeart onEnd={() => setISHeart(false)} />}
      {isChatModal && <ChatModal onClose={() => setISChatModal(false)} item={item} />}
    </View>
  )
}

export default memo(RenderFeedItem)

const styles = StyleSheet.create({
  itemContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    width: '95%',
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    marginVertical: verticalScale(20)
  },
  headerSmallIcon: {
    height: verticalScale(25),
    width: verticalScale(25),
    marginRight: scale(8)
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(20)
  },
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
  headerStarIcon: {
    height: verticalScale(15),
    width: verticalScale(15)
  },
  primaryTint: {
    tintColor: Color.Primary
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginRight: scale(10)
  },
  locationText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginVertical: verticalScale(5),
    marginLeft: scale(10)
  },
  bigProifleImage: {
    height: verticalScale(400),
    width: '100%'
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(20),
    width: '85%',
    alignSelf: 'center'
  },
  bottomImages: {
    height: verticalScale(35),
    width: verticalScale(35)
  },
  tintPrimary: {
    tintColor: Color.Primary
  }
})
