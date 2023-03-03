import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {TapGestureHandler} from 'react-native-gesture-handler'
import Video from 'react-native-video'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedHeart from '../../../../../Components/Animations/AnimatedHeart'
import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import AppButton from '../../../../../Components/AppButton'
import InViewPort from '../../../../../Components/InViewPoint'
import SharePostModal from '../../../../../Components/Modals/SharePostModal'
import {REELS} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import PostInfoModal from './PostInfoModal'
import WhyThisPostModal from './WhyThisPostModal'

const InstaPostView = ({item, isProfile = false}: any) => {
  const [isHeart, setISHeart] = useState(false)
  const [paused, setPaused] = useState(true)
  const [muted, setMuted] = useState(false)
  const [liked, setLiked] = useState(false)
  const [isbookmark, setISBookmark] = useState(false)
  const [postInfo, setPostInfo] = useState(false)
  const navigation: any = useNavigation()
  const [sharePost, setSharePost] = useState(false)
  const [whyIsThisPost, setWhyISThisPost] = useState(false)

  const onPressComment = () => {
    navigation.navigate(Screen.PostCommentScreen, {
      item
    })
  }

  const onPressLikesUser = () => {
    navigation.navigate(Screen.PostLikesUsersScreen, {
      item
    })
  }

  const onPressVote = () => {
    navigation.navigate(Screen.VoteDetailsScreen, {
      item
    })
  }

  const renderHeaderView = () => {
    return (
      <InViewPort disabled={false} onChange={(isVisisble: boolean) => setPaused(!isVisisble)}>
        <View style={styles.headerContainer}>
          <View style={styles.headerMainImageContainer}>
            <Image
              borderRadius={moderateScale(5)}
              resizeMode={'cover'}
              source={{uri: item?.image}}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{item?.name}</Text>
            <Image
              resizeMode={'contain'}
              source={Images.creator_talents_star}
              style={styles.headerStarIcon}
            />
          </View>
          <TouchableOpacity onPress={() => setPostInfo(true)}>
            <Image resizeMode={'contain'} source={Images.more} style={styles.headerSmallIcon} />
          </TouchableOpacity>
        </View>
      </InViewPort>
    )
  }

  const renderSoundImage = () => {
    return (
      <TouchableOpacity onPress={() => setMuted(!muted)}>
        <Image
          borderBottomLeftRadius={moderateScale(20)}
          borderBottomRightRadius={moderateScale(20)}
          resizeMode={'cover'}
          source={muted ? Images.muted : Images.sound}
          style={styles.bigSoundProifleImage}
        />
      </TouchableOpacity>
    )
  }

  const renderVideo = () => {
    return (
      <>
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
          muted={muted}
        />
        {renderSoundImage()}
      </>
    )
  }

  const renderImage = () => {
    return (
      <Image
        borderRadius={moderateScale(20)}
        resizeMode={'cover'}
        source={{uri: item?.image}}
        style={styles.bigProifleImage}
      />
    )
  }

  const renderBottom = () => {
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.bottombtnCOntainer}>
          <View style={styles.innerBtnContainer}>
            <AnimatedImage
              onPress={() => setLiked(!liked)}
              style={[styles.bottomImages, !liked && styles.tintColorBlack]}
              source={liked ? Images.heart_fill : Images.heart}
            />

            <TouchableOpacity onPress={onPressComment}>
              <Image
                source={Images.comment}
                resizeMode={'contain'}
                style={[styles.bottomImages, styles.tintColorBlack]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSharePost(true)}>
              <Image
                source={Images.send_message}
                resizeMode={'contain'}
                style={[styles.bottomImages, styles.tintColorBlack]}
              />
            </TouchableOpacity>
          </View>
          <AnimatedImage
            onPress={() => setISBookmark(!isbookmark)}
            source={isbookmark ? Images.fill_bookmark : Images.bookmark}
            style={[styles.bottomImages, !isbookmark && styles.tintColorBlack]}
          />
        </View>
        <TouchableOpacity style={CommonStyles.row} onPress={onPressLikesUser}>
          <Image
            source={{
              uri: REELS[1].image
            }}
            style={styles.likeduserProfile}
            resizeMode={'cover'}
          />
          <Image
            source={{
              uri: REELS[1].image
            }}
            style={[styles.likeduserProfile, styles.secomndProfileImageLikeuser]}
            resizeMode={'cover'}
          />
          <Text style={styles.usernamelisttext}>
            {t('FD118')}
            <Text style={styles.likedUserText}>{' Ruakel '}</Text>
            {'and'}
            <Text style={styles.likedUserText}>{' 10 Others people'}</Text>
          </Text>
        </TouchableOpacity>
        {!isProfile && (
          <Text style={styles.descriptionText}>
            {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
          </Text>
        )}
        {!isProfile && (
          <TouchableOpacity onPress={onPressComment}>
            <Text style={styles.commentHintText}>
              {3} {t('FD253')}
            </Text>
          </TouchableOpacity>
        )}
        <Text style={styles.timeText}>{'January 12 2022,0:30 PM'}</Text>
      </View>
    )
  }

  const renderVoteBottom = () => {
    return (
      <View style={styles.bottomContainer}>
        <View style={CommonStyles.row}>
          <TouchableOpacity>
            <Image
              source={isHeart ? Images.heart_fill : Images.heart}
              resizeMode={'contain'}
              style={[styles.bottomImages, styles.primaryImage]}
            />
          </TouchableOpacity>
          <Text style={styles.likeCountText}>{80}</Text>
        </View>

        <Text style={styles.voteDescText}>
          {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        </Text>
        <View style={styles.timeBtnContainer}>
          <View>
            <Text style={styles.voteCommentHintText}>{'January 12 2022,0:30 PM'}</Text>
            <Text style={styles.voteCounttext}>
              {'40 '}
              {t('FD254')}
              {' still12 Stunden'}
            </Text>
          </View>
          <AppButton
            onPress={onPressVote}
            title={t('FD277')}
            gradientStyleContainer={styles.voteBtn}
          />
        </View>
      </View>
    )
  }

  const renderMedia = () => {
    return (
      <View style={[]}>
        {item?.type === 'video' ? renderVideo() : renderImage()}
        {isHeart && <AnimatedHeart onEnd={() => setISHeart(false)} />}
      </View>
    )
  }

  return (
    <TapGestureHandler
      numberOfTaps={2}
      onActivated={() => {
        setISHeart(true)
        setLiked(true)
      }}
    >
      <View>
        <View style={styles.itemContainer}>
          {renderHeaderView()}
          {renderMedia()}
          {item.isBookmark ? renderBottom() : renderVoteBottom()}
        </View>
        {postInfo && (
          <PostInfoModal
            onWhyThisPost={() => setWhyISThisPost(true)}
            onPressShare={() => setSharePost(true)}
            onClose={() => setPostInfo(false)}
          />
        )}
        {sharePost && <SharePostModal onClose={() => setSharePost(false)} />}
        {whyIsThisPost && <WhyThisPostModal onClose={() => setWhyISThisPost(false)} />}
      </View>
    </TapGestureHandler>
  )
}

export default InstaPostView

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
  likeduserProfile: {
    height: verticalScale(30),
    width: verticalScale(30),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    marginVertical: verticalScale(10)
  },
  secomndProfileImageLikeuser: {
    position: 'absolute',
    left: scale(20)
  },
  headerStarIcon: {
    height: verticalScale(15),
    width: verticalScale(15)
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: scale(10)
  },

  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginRight: scale(10)
  },

  bigProifleImage: {
    height: verticalScale(300),
    width: '100%'
  },
  bottomContainer: {
    paddingVertical: scale(20),
    width: '90%',
    alignSelf: 'center'
  },
  bottomImages: {
    height: verticalScale(23),
    width: verticalScale(23),
    // tintColor: Color.black,
    marginRight: scale(15)
  },
  primaryImage: {
    tintColor: Color.Primary,
    marginVertical: verticalScale(10)
  },
  tintColorBlack: {
    tintColor: Color.black
  },
  bottombtnCOntainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    width: '100%'
  },
  innerBtnContainer: {
    ...CommonStyles.row
  },
  usernamelisttext: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(30)
  },
  descriptionText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  commentHintText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  timeText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    textAlign: 'right'
  },
  voteCounttext: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginTop: verticalScale(20)
  },
  voteCommentHintText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  voteDescText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  voteBtn: {
    height: verticalScale(40),
    padding: scale(10),
    alignSelf: 'flex-end',
    borderRadius: moderateScale(10)
  },
  timeBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  likeCountText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  videoStyle: {
    width: '100%',
    height: verticalScale(300),
    borderRadius: moderateScale(20)
  },
  bigSoundProifleImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    position: 'absolute',
    tintColor: Color.white,
    zIndex: 1000,
    right: scale(20),
    bottom: verticalScale(20)
  },
  likedUserText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.bold,
    color: Color.black
  }
})
