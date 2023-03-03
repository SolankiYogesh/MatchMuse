import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {TapGestureHandler} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Video from 'react-native-video'
import {useIsFocused} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedHeart from '../../../../../Components/Animations/AnimatedHeart'
import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import SharePostModal from '../../../../../Components/Modals/SharePostModal'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import PostInfoModal from '../../FeedPostsScreen/Components/PostInfoModal'
import WhyThisPostModal from '../../FeedPostsScreen/Components/WhyThisPostModal'
import ReelCommentModal from './ReelCommentModal'

const FeedReelCardItem = ({item, isMute, activeID, onPressMute}: any) => {
  const [paused, setPaused] = useState(false)
  const [isHeart, setISHeart] = useState(false)
  const [isLike, setISLike] = useState(false)
  const [isFollow, setIsFollow] = useState(false)
  const [isBookmark, setISBookmark] = useState(false)
  const [isShare, setISShare] = useState(false)
  const [whyPost, setWhyPost] = useState(false)
  const [isSubscribe, setISSubcribe] = useState(false)
  const [postInfo, setPostInfo] = useState(false)
  const [isCommentModal, setISCommentModal] = useState(false)

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

          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Image
              resizeMode={'contain'}
              source={Images.creator_talents_star}
              style={styles.headerStarIcon}
            />
          </View>
          {isFollow ? (
            <TouchableOpacity style={styles.btnView} onPress={() => setIsFollow(!isFollow)}>
              <Image
                source={Images.user_1}
                resizeMode={'contain'}
                style={[
                  styles.headerStarIcon,
                  styles.whiteTint,
                  isFollow ? styles.primaryTint : styles.whiteTint
                ]}
              />
              <Text style={[styles.btnText, styles.btnText2]}>{t('FD269')}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsFollow(!isFollow)} activeOpacity={1}>
              <LinearGradient
                style={styles.btnView}
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={[Color.pink_shade1, Color.red_shade1]}
              >
                <Image
                  source={Images.user_1}
                  resizeMode={'contain'}
                  style={[
                    styles.headerStarIcon,
                    styles.whiteTint,
                    isFollow ? styles.primaryTint : styles.whiteTint
                  ]}
                />
                <Text style={styles.btnText}>{t('FD268')}</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
          {isSubscribe ? (
            <TouchableOpacity style={styles.btnView} onPress={() => setISSubcribe(!isSubscribe)}>
              <Image
                source={Images.user_start_icon_blue_128}
                resizeMode={'contain'}
                style={[
                  styles.headerStarIcon,
                  styles.whiteTint,
                  isSubscribe ? styles.subScribeTint : styles.whiteTint
                ]}
              />
              <Text style={[styles.btnText, styles.subScribeTintText]}>{t('FD279')}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setISSubcribe(!isSubscribe)} activeOpacity={1}>
              <LinearGradient
                style={styles.btnView}
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={[Color.top_blue, Color.bottom_blue]}
              >
                <Image
                  source={Images.user_start_icon_blue_128}
                  resizeMode={'contain'}
                  style={[
                    styles.headerStarIcon,
                    styles.whiteTint,
                    isSubscribe ? styles.subScribeTint : styles.whiteTint
                  ]}
                />
                <Text style={styles.btnText}>{t('FD280')}</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={() => setPostInfo(true)}>
          <Image resizeMode={'contain'} source={Images.more} style={styles.headerSmallIcon} />
        </TouchableOpacity>
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
        <View style={styles.musicContainer}>
          <Text style={styles.shortName}>{'Daily Dreaming'}</Text>
          <View style={styles.musicView}>
            <Image source={Images.music} resizeMode={'contain'} style={styles.musicImage} />
            <Text style={styles.musicName}>{'Someday - One Republic'}</Text>
          </View>
        </View>
        <View style={styles.bottombtnCOntainer}>
          <View style={styles.innerBtnContainer}>
            <View style={styles.actionContainer}>
              <AnimatedImage
                onPress={() => {
                  if (!isLike) {
                    setISHeart(!isHeart)
                  }
                  setISLike(!isLike)
                }}
                style={[styles.bottomImages, !isLike && styles.tintColorBlack]}
                source={isLike ? Images.heart_fill : Images.heart}
              />

              <Text style={styles.countText}>{50}</Text>
            </View>
            <View style={styles.actionContainer}>
              <TouchableOpacity onPress={() => setISCommentModal(true)}>
                <Image
                  source={Images.comment}
                  resizeMode={'contain'}
                  style={[styles.bottomImages, styles.tintColorBlack]}
                />
              </TouchableOpacity>
              <Text style={styles.countText}>{50}</Text>
            </View>
            <View style={styles.actionContainer}>
              <AnimatedImage
                onPress={() => setISBookmark(!isBookmark)}
                source={isBookmark ? Images.fill_bookmark : Images.bookmark}
                style={[styles.bottomImages, !isBookmark && styles.tintColorBlack]}
              />

              <Text style={styles.countText}>{50}</Text>
            </View>
            <TouchableOpacity onPress={() => setISShare(true)}>
              <Image
                source={Images.send_message}
                resizeMode={'contain'}
                style={[styles.bottomImages, styles.tintColorBlack]}
              />
            </TouchableOpacity>
          </View>
        </View>
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
    <TapGestureHandler
      numberOfTaps={2}
      onActivated={() => {
        setISHeart(true)
        setISLike(true)
      }}
    >
      <View style={styles.itemContainer}>
        {renderVideo()}
        {renderHeaderView()}
        {renderImage()}
        {renderBottom()}
        {isHeart && <AnimatedHeart onEnd={() => setISHeart(false)} />}
        {postInfo && (
          <PostInfoModal
            onWhyThisPost={() => setWhyPost(true)}
            onPressShare={() => setISShare(true)}
            onClose={() => setPostInfo(false)}
          />
        )}
        {isShare && <SharePostModal onClose={() => setISShare(false)} />}
        {whyPost && <WhyThisPostModal onClose={() => setWhyPost(false)} />}
        {isCommentModal && (
          <ReelCommentModal
            isBookmarked={isBookmark}
            isLiked={isLike}
            mainItem={item}
            onClose={() => setISCommentModal(false)}
          />
        )}
      </View>
    </TapGestureHandler>
  )
}

export default FeedReelCardItem

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
  tintColorBlack: {
    tintColor: Color.white
  },
  headerSmallIcon: {
    height: verticalScale(25),
    width: verticalScale(25),
    marginRight: scale(8),
    tintColor: Color.white
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
    height: verticalScale(35),
    width: verticalScale(35),
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
    tintColor: Color.Primary,
    marginRight: scale(5)
  },
  whiteTint: {
    tintColor: Color.white,
    marginRight: scale(5)
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  nameText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginRight: scale(5)
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
    height: verticalScale(20),
    width: verticalScale(20)
  },
  videoStyle: {
    width: '100%',
    height: heightPx(83),
    borderRadius: moderateScale(20)
  },
  btnView: {
    ...CommonStyles.shadow,
    width: scale(85),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderRadius: moderateScale(10),
    padding: scale(5),
    paddingHorizontal: scale(5),
    height: verticalScale(30),
    // height: verticalScale(40),
    marginVertical: verticalScale(5),
    flexDirection: 'row',
    marginHorizontal: scale(5)
  },
  btnText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  btnText2: {
    color: Color.Primary
  },
  subScribeTintText: {
    color: Color.top_blue
  },
  subScribeTint: {
    tintColor: Color.top_blue
  },
  bottombtnCOntainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    width: '100%'
  },
  innerBtnContainer: {
    flexDirection: 'row'
  },
  countText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginTop: verticalScale(10)
  },
  actionContainer: {
    marginHorizontal: scale(10)
  },
  musicImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    tintColor: Color.white,
    marginRight: scale(10)
  },
  musicView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  musicName: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginTop: verticalScale(5)
  },
  shortName: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    flex: 1
  },
  musicContainer: {
    // flex: 1,
  }
})
