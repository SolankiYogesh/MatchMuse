import React, {useEffect, useRef, useState} from 'react'
import {
  ActivityIndicator,
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation-locker'
import Video from 'react-native-video'
import {Slider} from '@miblanchard/react-native-slider'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts, Images} from '../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'
import Utility from '../../../Helpers/Utility'

const videourl = 'https://kaprat.com/dev/demo/videos/8.mp4'

const posterUrl = 'https://kaprat.com/dev/demo/profile/08.jpg'

interface VideoPlayerProps {
  onClose?: () => void
  url?: string
  isLive?: boolean
}
const VideoPlayer = (props: VideoPlayerProps) => {
  const {onClose = () => {}, url = videourl, isLive = false} = props
  const [paused, setPause] = useState(false)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState([0])
  const [opacity, setOpacity] = useState(false)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<Video>(null)
  const [isFullScreen, setISFullScreen] = useState(false)
  const [isError, setISError] = useState(false)
  const [isRetry, setRetry] = useState(true)

  useEffect(() => {
    if (isFullScreen) {
      Orientation.lockToLandscape()
    } else {
      Orientation.lockToPortrait()
    }
    const back = BackHandler.addEventListener('hardwareBackPress', () => {
      onPressBack()
      return true
    })
    return () => {
      back.remove()
    }
  }, [isFullScreen])

  useEffect(() => {
    if (!isRetry) {
      setRetry(true)
    }
  }, [isRetry])

  const onLoad = (e: any) => {
    setLoading(false)
    setDuration(e?.duration)
  }

  const onPressRetry = () => {
    setRetry(false)
    setISError(false)
  }

  const onProgress = (e: any) => {
    const slideProgress = (Number(e?.currentTime) / Number(duration)) * 100
    setProgress([Number(slideProgress.toFixed(0))])
  }

  const onSliderChange = (e: any) => {
    const step = duration / 100
    videoRef.current?.seek(step * e[0])
  }

  const onPressBack = () => {
    if (isFullScreen) {
      setISFullScreen(false)
    } else {
      onClose()
    }
  }

  const renderControls = () => {
    const formatedDuration = Utility.secondsToMMSS(duration)
    const currentTime = (progress[0] / 100) * duration
    const formatedCurrentTime = Utility.secondsToMMSS(Number(Number(currentTime).toFixed()))

    return (
      <View style={styles.absolutepath}>
        <TouchableOpacity style={styles.playback} onPress={() => setPause(!paused)}>
          <Image
            source={paused ? Images.play : Images.pause}
            style={styles.plyButton}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={styles.videoheader}>
          <TouchableOpacity onPress={onPressBack}>
            <Image source={Images.leftArrow} style={styles.leftArrow} resizeMode={'contain'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.vertical_menu}
              style={styles.otherIconButton}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatedCurrentTime}</Text>
          <Text style={styles.timeText}>{formatedDuration}</Text>
        </View>
        <View style={styles.progressView}>
          <Slider
            step={1}
            value={progress}
            minimumValue={0}
            animationType={'timing'}
            maximumValue={101}
            onValueChange={onSliderChange}
            thumbStyle={styles.markerStyle}
            trackStyle={styles.trackStyle}
            minimumTrackTintColor={Color.Primary}
            containerStyle={styles.sliderContainer}
          />
          <TouchableOpacity onPress={() => setISFullScreen(!isFullScreen)}>
            <Image
              source={Images.fullscreen}
              style={styles.otherIconButton}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderLogo = () => {
    return (
      <View style={[CommonStyles.row, styles.absoluteStyle]}>
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.8, y: 1}}
          locations={[0.1865, 0.8077]}
          colors={[Color.pink_shade1, Color.red_shade1]}
          style={styles.videoImageContainer}
          onStartShouldSetResponder={() => {
            onPressBack()
            return true
          }}
        >
          <Image source={Images.video} resizeMode={'contain'} style={styles.videoIcon} />
          <Text style={styles.liveText}>{t('FD321')}</Text>
        </LinearGradient>
        <View style={CommonStyles.row}>
          <Text style={styles.viewText}>{'20'}</Text>
          <Text style={styles.viewText}>{t('FD322')}</Text>
        </View>
      </View>
    )
  }

  const renderErrorView = () => {
    return (
      <View style={styles.erroContainer}>
        <Text style={styles.erroMsgText}>{t('FD324')}</Text>
        <TouchableOpacity onPress={onPressRetry} style={styles.errorBtnContainer}>
          <Text style={styles.errorBtnText}>{t('FD323')}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderLoader = () => {
    return (
      loading && <ActivityIndicator color={Color.Primary} size={'large'} style={styles.loader} />
    )
  }
  return (
    <View
      style={[styles.container, isFullScreen && CommonStyles.viewFull]}
      onStartShouldSetResponder={() => {
        setOpacity(!opacity)
        return true
      }}
    >
      {isRetry && (
        <Video
          style={styles.videoStyle}
          resizeMode={isFullScreen ? 'cover' : 'contain'}
          paused={paused}
          controls={false}
          onLoadStart={() => setLoading(true)}
          onLoad={onLoad}
          onProgress={onProgress}
          poster={posterUrl}
          repeat
          onError={() => setISError(true)}
          ref={videoRef}
          posterResizeMode={'cover'}
          source={{uri: url}}
        />
      )}
      {!opacity && !isError && renderControls()}
      {renderLoader()}
      {isLive && renderLogo()}
      {isError && renderErrorView()}
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightPx(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.black
  },
  videoStyle: {
    flex: 1,
    ...CommonStyles.fullView
  },
  playback: {
    width: verticalScale(50),
    height: verticalScale(50),
    position: 'absolute',
    backgroundColor: Color.greyRGB1,
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(100),
    zIndex: 1000
  },
  plyButton: {
    width: '40%',
    height: '40%',
    tintColor: Color.white
  },
  videoheader: {
    ...CommonStyles.row,
    position: 'absolute',
    justifyContent: 'space-between',
    top: 0,
    width: '100%',
    marginHorizontal: scale(10),
    marginTop: verticalScale(10)
  },
  leftArrow: {
    width: verticalScale(32),
    height: verticalScale(32),
    tintColor: Color.white
  },
  otherIconButton: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.white
  },
  timeContainer: {
    justifyContent: 'space-between',
    ...CommonStyles.row,
    width: '72%',
    position: 'absolute',
    bottom: 0,
    marginBottom: verticalScale(35),
    alignSelf: 'flex-start',
    marginLeft: scale(20)
  },
  progressView: {
    ...CommonStyles.row,
    position: 'absolute',
    bottom: 0,
    width: '90%',
    marginHorizontal: scale(10),
    marginBottom: verticalScale(10),
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginLeft: scale(20)
  },
  markerStyle: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    width: moderateScale(15),
    height: moderateScale(15),
    ...CommonStyles.shadow
  },

  trackStyle: {
    backgroundColor: Color.lightGrey,
    height: verticalScale(5),
    borderRadius: moderateScale(30)
  },

  videoImageContainer: {
    ...CommonStyles.row,
    padding: scale(5),

    borderRadius: moderateScale(10)
  },
  absoluteStyle: {
    top: verticalScale(10),
    left: scale(10),
    position: 'absolute',
    zIndex: 1500
  },
  videoIcon: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.white
  },
  liveText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginLeft: scale(5),
    textTransform: 'uppercase',
    fontStyle: 'italic'
  },
  viewText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginLeft: scale(5)
  },
  loader: {
    position: 'absolute',
    zIndex: -1
  },
  absolutepath: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    ...CommonStyles.centerItem
  },
  erroContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Color.black,
    ...CommonStyles.centerItem
  },
  erroMsgText: {
    color: Color.white,
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium
  },
  errorBtnContainer: {
    borderWidth: 2,
    borderColor: Color.white,
    padding: scale(5),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10)
  },
  errorBtnText: {
    color: Color.white,
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium
  },
  sliderContainer: {
    width: '80%',
    alignSelf: 'center'
  },
  timeText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.white
  }
})
