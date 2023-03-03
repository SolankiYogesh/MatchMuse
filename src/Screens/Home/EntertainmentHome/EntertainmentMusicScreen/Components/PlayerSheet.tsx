import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player'
import {useIsFocused, useNavigation} from '@react-navigation/native'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const PlayerSheet = () => {
  const isFocus = useIsFocused()
  const [Track, setTrack] = useState<any>(null)
  const playerState = usePlaybackState()
  const isPlaying = playerState === State.Playing
  const navigation: any = useNavigation()
  useEffect(() => {
    if (isFocus) {
      TrackPlayer.getCurrentTrack().then((index) => {
        TrackPlayer.getTrack(index ?? 0).then((track) => {
          setTrack(track)
        })
      })
    }
  }, [isFocus])

  const onPressPlayPause = () => {
    if (isPlaying) {
      TrackPlayer.pause()
    } else {
      TrackPlayer.play()
    }
  }

  const onPressAudioScreen = () => {
    navigation.push(Screen.AudioPlayerScreen)
  }

  return (
    <TouchableOpacity onPress={onPressAudioScreen}>
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={styles.container}
      >
        <AppProfileImage borderWidth={0} url={Track?.artwork} />
        <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.trackName}>
          {Track?.album}
        </Text>
        <TouchableOpacity onPress={onPressPlayPause}>
          <Image
            source={isPlaying ? Images.pause : Images.play}
            style={styles.playButtonImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default PlayerSheet

const styles = StyleSheet.create({
  playButtonImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    tintColor: Color.white,
    marginHorizontal: scale(20)
  },
  container: {
    marginHorizontal: scale(10),
    ...CommonStyles.row,
    padding: scale(10),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(5)
  },
  trackName: {
    fontFamily: Fonts.medium,
    color: Color.white,
    fontSize: moderateScale(15),
    flex: 1,
    marginLeft: scale(10)
  }
})
