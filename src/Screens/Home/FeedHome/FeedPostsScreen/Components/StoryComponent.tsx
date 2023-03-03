import React, {useRef} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import Video from 'react-native-video'

import {Color, CommonStyles, Fonts} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const StoryComponent = ({item, isProfile = false, profileImage = null}: any) => {
  const player = useRef<Video>(null)
  const stories = item?.stories

  return (
    <View>
      {stories[0].type === 'image' ? (
        <Image
          source={{
            uri: stories[0]?.url
          }}
          style={styles.storyImage}
          resizeMode={'cover'}
        />
      ) : (
        <Video
          source={{
            uri: stories[0]?.url
          }}
          ref={player}
          paused
          style={styles.storyImage}
          onLoad={() => {
            player?.current?.seek(1) // this will set first frame of video as thumbnail
          }}
        />
      )}
      <View style={styles.profikleView}>
        {!isProfile ? (
          <Image
            source={{
              uri: item?.profile
            }}
            style={styles.imageStyle}
            resizeMode={'cover'}
          />
        ) : (
          <View style={[styles.imageStyle, styles.profile, CommonStyles.centerItem]}>
            <Image
              source={profileImage?.image}
              style={styles.profileImageStyle}
              resizeMode={'contain'}
            />
          </View>
        )}
        <Text style={styles.usernameText}>{isProfile ? profileImage?.text : item?.username}</Text>
      </View>
    </View>
  )
}

export default StoryComponent

const styles = StyleSheet.create({
  storyImage: {
    width: scale(100),
    height: verticalScale(130),
    marginHorizontal: scale(5),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10)
  },
  profileImageStyle: {
    width: '70%',
    height: '70%'
  },
  imageStyle: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderWidth: 2,
    borderColor: Color.Primary,
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    backgroundColor: Color.white
  },
  usernameText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.white,
    textAlign: 'center'
  },
  profikleView: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1000,
    bottom: verticalScale(5),
    justifyContent: 'center'
  },
  profile: {
    borderRadius: moderateScale(20),
    borderWidth: scale(3)
  }
})
