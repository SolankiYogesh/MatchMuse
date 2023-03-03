import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {TapGestureHandler} from 'react-native-gesture-handler'
import Video from 'react-native-video'
import {useIsFocused} from '@react-navigation/native'

import AnimatedHeart from '../../../../../Components/Animations/AnimatedHeart'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const RenderReelItem = ({item, isMute, onPressMute, activeID}: any) => {
  const [paused, setPaused] = useState(false)
  const [isHeart, setISHeart] = useState(false)
  const isFocused = useIsFocused()
  useEffect(() => {
    if (activeID === item.id) {
      setPaused(false)
    }
  }, [activeID, item.id])

  useEffect(() => {
    setPaused(!isFocused)
  }, [isFocused])

  const renderHeaderView = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.nameContainer}>
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
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View style={styles.nameContainer}>
              <Image
                resizeMode={'contain'}
                source={Images.location_line}
                style={[styles.headerStarIcon, styles.primaryTint]}
              />
              {/* <Text style={styles.locationText}>{item.location}</Text> */}
              <Text style={styles.locationText}>{`(${item.distanc}km)`}</Text>
              <Image
                resizeMode={'contain'}
                source={Images.greenCheck}
                style={styles.headerStarIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.headerBtnContainer}>
          <TouchableOpacity>
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
              source={Images.close_autocomplet}
              style={[styles.headerSmallIcon, styles.headeCloseIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderImage = () => {
    return (
      <TouchableOpacity onPress={onPressMute}>
        <Image
          borderBottomLeftRadius={moderateScale(20)}
          borderBottomRightRadius={moderateScale(20)}
          resizeMode={'cover'}
          source={isMute ? Images.muted : Images.sound}
          style={styles.bigProifleImage}
        />
      </TouchableOpacity>
    )
  }

  const renderBottom = () => {
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
  }

  const renderVideo = () => {
    return (
      <Video
        source={{
          uri: item?.video
        }}
        style={styles.videoStyle}
        posterResizeMode={'cover'}
        resizeMode={'cover'}
        playInBackground={false}
        paused={paused}
        repeat
        poster={item.image}
        muted={isMute}
      />
    )
  }

  return (
    <TapGestureHandler numberOfTaps={2} onActivated={() => setISHeart(true)}>
      <View style={styles.itemContainer}>
        {renderVideo()}
        {renderHeaderView()}
        {renderImage()}
        {renderBottom()}
        {isHeart && <AnimatedHeart onEnd={() => setISHeart(false)} />}
      </View>
    </TapGestureHandler>
  )
}

export default RenderReelItem

const styles = StyleSheet.create({
  itemContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    width: '95%',
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    marginVertical: verticalScale(10)
  },
  headerSmallIcon: {
    height: verticalScale(25),
    width: verticalScale(25),
    marginRight: scale(8),
    tintColor: Color.white
  },
  headeCloseIcon: {
    tintColor: Color.Primary
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
    padding: scale(10),
    position: 'absolute',
    width: '100%',
    alignSelf: 'center'
  },
  headerMainImageContainer: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    marginRight: scale(10)
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
    color: Color.white,
    marginRight: scale(10)
  },
  locationText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginVertical: verticalScale(5),
    marginHorizontal: scale(10)
  },
  bigProifleImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    position: 'absolute',
    tintColor: Color.white,
    zIndex: 1000,
    right: scale(20),
    bottom: verticalScale(100)
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(20),
    width: '85%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: 1000
  },
  bottomImages: {
    height: verticalScale(35),
    width: verticalScale(35)
  },
  videoStyle: {
    width: '100%',
    height: heightPx(83),
    borderRadius: moderateScale(20)
  }
})
