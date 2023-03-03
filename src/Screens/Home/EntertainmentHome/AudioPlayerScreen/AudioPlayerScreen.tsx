import React, {useEffect, useMemo, useState} from 'react'
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native'
import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player'
import {VolumeManager} from 'react-native-volume-manager'
import {useDispatch, useSelector} from 'react-redux'
import {Slider} from '@miblanchard/react-native-slider'
import {useNavigation, useRoute} from '@react-navigation/native'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {Color, Images, Utility} from '../../../../Helpers'
import {setAudioList} from '../../../../Store/Reducers/AudioSlice'
import {styles} from './AudioPlayerScreenStyle'

const events = [Event.PlaybackQueueEnded]
const AudioPlayerScreen = () => {
  const navigation = useNavigation()
  const {duration, position} = useProgress()
  const playerState = usePlaybackState()
  const [audioSeeker, setAudioSeeker] = useState([0])
  const [soundSeeker, setSoundSeeker] = useState<any>([0.0])
  const songs = useSelector((state: any) => state?.audio?.audioList)
  const dispatch = useDispatch()

  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackQueueEnded) {
      setIndex((state) => (state === data?.length - 1 ? state : state + 1))
    }
  })
  const {params}: any = useRoute()
  const data: any = params?.data
  const isPlaying = playerState === State.Playing
  VolumeManager.showNativeVolumeUI({
    enabled: true
  })

  useEffect(() => {
    if (data && data?.length > 0) {
      const audiList = _.map(data, (i: any) => {
        return {
          id: Date.now() + Math.random() * 100,
          url: i?.audio,
          artist: i?.title,
          album: i?.title,
          description: i?.deskText,
          artwork: i?.image
        }
      })
      dispatch(setAudioList(audiList))
      firstLoad()
    } else {
      onIndexChange()
    }
  }, [data])

  const firstLoad = async () => {
    await TrackPlayer.reset()
    await TrackPlayer.add(songs[0])
    TrackPlayer.play()
  }

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const slideProgress = (Number(position) / Number(duration)) * 100
    if (!Number.isNaN(slideProgress)) {
      setAudioSeeker([slideProgress])
    }
  }, [position])

  useEffect(() => {
    VolumeManager.getVolume().then((resp) => {
      setSoundSeeker([resp])
    })
  }, [])

  const onIndexChange = async () => {
    if (playerState === State.Stopped || playerState === State.Paused) {
      await TrackPlayer.reset()
      await TrackPlayer.add(songs[index])
      TrackPlayer.play()
    }
  }

  useEffect(() => {
    onIndexChange()
  }, [index])

  const onSeekerChange = (e: any) => {
    const step = duration / 100
    TrackPlayer.seekTo(step * e[0])
  }

  const onPressPlayPause = () => {
    if (isPlaying) {
      TrackPlayer.pause()
    } else {
      TrackPlayer.play()
    }
  }

  const onSoundSeek = (e: any) => {
    VolumeManager.setVolume(e[0], {
      type: 'music'
    })
    TrackPlayer.setVolume(e[0])
    setSoundSeeker(e)
  }

  const renderAudioImage = useMemo(() => {
    return (
      <View style={styles.audioImageContainer}>
        <Image source={Images.audioWave} style={styles.wave} resizeMode={'cover'} />
        <Image
          style={styles.podcastImage}
          resizeMode={'cover'}
          source={{
            uri: songs[index]?.artwork
          }}
        />
      </View>
    )
  }, [index])

  const renderAudioTitleView = useMemo(() => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.audioTitle}>{songs[index]?.album}</Text>
        <Text style={styles.singerNames}>{songs[index]?.artist}</Text>
      </View>
    )
  }, [index])

  const renderAudioSeeker = useMemo(() => {
    const formatedDuration = Utility.secondsToMMSS(duration)
    const formatedCurrentTime = Utility.secondsToMMSS(position)
    return (
      <View>
        <Slider
          step={1}
          value={audioSeeker}
          minimumValue={0}
          animationType={'timing'}
          maximumValue={99}
          onValueChange={onSeekerChange}
          thumbStyle={styles.markerStyle}
          trackStyle={styles.trackStyle}
          minimumTrackTintColor={Color.white}
          containerStyle={styles.sliceContainerStyle}
        />

        <View style={styles.timeView}>
          <Text style={styles.timeText}>{formatedCurrentTime}</Text>
          <Text style={styles.timeText}>{formatedDuration}</Text>
        </View>
      </View>
    )
  }, [duration, position, audioSeeker])

  const renderButtonView = useMemo(() => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setIndex((state) => (state === 0 ? 0 : state - 1))}>
          <Image source={Images.prev_skip} style={styles.skipButtonImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPlayPause}>
          <Image
            source={isPlaying ? Images.pause : Images.play}
            style={styles.playButtonImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIndex((state) => (state === songs?.length - 1 ? state : state + 1))}
        >
          <Image source={Images.next_skip} style={styles.skipButtonImage} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    )
  }, [isPlaying])

  const renderSoundSeeker = useMemo(() => {
    return (
      <View style={styles.soundContainer}>
        <TouchableOpacity
          onPress={() => {
            VolumeManager.setVolume(soundSeeker[0] !== 0 ? soundSeeker[0] - 0.1 : 0)
            setSoundSeeker(soundSeeker[0] !== 0 ? [soundSeeker[0] - 0.1] : 0)
          }}
        >
          <Image source={Images.sound_low} resizeMode={'contain'} style={styles.soundImage} />
        </TouchableOpacity>

        <Slider
          step={0.1}
          value={soundSeeker}
          minimumValue={0}
          animationType={'timing'}
          maximumValue={1}
          onValueChange={onSoundSeek}
          thumbStyle={styles.soundMarkerStyle}
          trackStyle={styles.soundTrackStyle}
          minimumTrackTintColor={Color.white}
          containerStyle={styles.sliceContainerStyle1}
        />
        <TouchableOpacity
          onPress={() => {
            VolumeManager.setVolume(soundSeeker[0] !== 1 ? soundSeeker[0] + 0.1 : 1)
            setSoundSeeker(soundSeeker[0] !== 1 ? [soundSeeker[0] + 0.1] : 1)
          }}
        >
          <Image source={Images.sound_high} resizeMode={'contain'} style={styles.soundImage} />
        </TouchableOpacity>
      </View>
    )
  }, [soundSeeker, songs])

  return (
    <AppContainer>
      <ImageBackground
        style={styles.imageContainer}
        source={Images.audio_player_back}
        resizeMode={'cover'}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        {renderAudioImage}
        <View style={styles.innerView}>
          {renderAudioTitleView}
          {renderAudioSeeker}
          {renderButtonView}
          {renderSoundSeeker}
        </View>
      </ImageBackground>
    </AppContainer>
  )
}

export default AudioPlayerScreen
