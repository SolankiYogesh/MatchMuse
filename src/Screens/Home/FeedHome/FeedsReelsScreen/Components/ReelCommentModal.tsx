import React, {useState} from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'
import ReactNativeModal from 'react-native-modal'
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated'
import Video from 'react-native-video'
import _ from 'lodash'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import AppScrollView from '../../../../../Components/AppScrollView'
import {NOTIFICATIONSACTIVITIES} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import CommentInput from '../../PostCommentScreen/Components/CommentInput'
import CommentItem from '../../PostCommentScreen/Components/CommentItem'

interface ReelCommentModalProps {
  mainItem?: any
  isBookmarked?: boolean
  isLiked?: boolean
  onClose?: () => void
}

const ReelCommentModal = (props: ReelCommentModalProps) => {
  const {mainItem = null, isBookmarked = false, isLiked = false} = props
  const [isReply, setISReply] = useState(false)
  const [replyComment, setReplyComment] = useState<any>(null)
  const [comments, setComments] = useState(NOTIFICATIONSACTIVITIES)
  const height = useSharedValue(heightPx(40))
  const height40 = heightPx(40)
  const animatedHeight = useSharedValue(heightPx(40))

  const onPressComment = (commentText: string) => {
    const cloneData = Utility.deepClone(comments)

    if (isReply) {
      const findIndex = _.findIndex(cloneData, (i: any) => i?.id === replyComment?.id)
      const subCommentItme = {
        image: 'https://kaprat.com/dev/demo/profile/04.jpg',
        name: 'SomeOne',
        text: commentText,
        isFriendRequest: true,
        id: cloneData[findIndex].subComments?.length + 1 || 0
      }
      const subComments = [...(cloneData[findIndex]?.subComments || []), subCommentItme]

      cloneData[findIndex].subComments = subComments
    } else {
      cloneData.push({
        image: 'https://kaprat.com/dev/demo/profile/04.jpg',
        name: 'SomeOne',
        text: commentText,
        isFriendRequest: true,
        id: cloneData?.length + 1
      })
    }
    setISReply(false)
    setReplyComment(null)

    setComments(cloneData)
  }

  const renderHeader = () => {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={[CommonStyles.row, styles.innerView]}>
            <View style={CommonStyles.row}>
              <TouchableOpacity
                onPress={() => {
                  if (props.onClose) props.onClose()
                }}
              >
                <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>{'Kommentare'}</Text>
            </View>
            <TouchableOpacity>
              <Image source={Images.send_message} style={styles.dotMenu} resizeMode={'contain'} />
            </TouchableOpacity>
          </View>
          <View style={styles.postViewContainer}>
            <View style={styles.headerMainImageContainer}>
              <Image
                borderRadius={moderateScale(5)}
                resizeMode={'cover'}
                source={{uri: mainItem?.image}}
                style={styles.profileImage}
              />
            </View>
            <View style={[CommonStyles.flex, styles.textContainer]}>
              <Text style={styles.nameText}>
                {'lose.asline@comm'}
                <Text style={styles.descText}>
                  {' Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                </Text>
              </Text>
              <Text style={styles.timeText}>{'January 2022'}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderItem = ({item}: any) => {
    return (
      <CommentItem
        onPressReply={(item: any) => {
          setReplyComment(item)
          setISReply(true)
        }}
        item={item}
      />
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
                disabled
                style={[styles.bottomImages, !isLiked && styles.tintColorBlack]}
                source={isLiked ? Images.heart_fill : Images.heart}
              />

              <Text style={styles.countText}>{50}</Text>
            </View>
            <View style={styles.actionContainer}>
              <View>
                <Image
                  source={Images.comment}
                  resizeMode={'contain'}
                  style={[styles.bottomImages, styles.tintColorBlack]}
                />
              </View>
              <Text style={styles.countText}>{50}</Text>
            </View>
            <View style={styles.actionContainer}>
              <AnimatedImage
                disabled
                source={isBookmarked ? Images.fill_bookmark : Images.bookmark}
                style={[styles.bottomImages, !isBookmarked && styles.tintColorBlack]}
              />

              <Text style={styles.countText}>{50}</Text>
            </View>
            <View>
              <Image
                source={Images.send_message}
                resizeMode={'contain'}
                style={[styles.bottomImages, styles.tintColorBlack]}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderVideo = () => {
    return (
      <>
        <Video
          source={{
            uri: mainItem?.video
          }}
          style={styles.videoStyle}
          posterResizeMode={'cover'}
          resizeMode={'cover'}
          playInBackground={false}
          repeat
          poster={mainItem.image}
        />
        {renderBottom()}
      </>
    )
  }

  const onEnd = (event: any) => {
    if (event.y > height40) {
      animatedHeight.value = heightPx(100)
      setTimeout(() => {
        onEndAnimation()
      }, 500)
    }
  }

  const onEndAnimation = () => {
    if (props.onClose) props.onClose()
  }

  const gesture = Gesture.Pan()
    .onEnd(onEnd)

    .onUpdate((event) => {
      height.value = event.y
    })

  const animatedHeightStyle = useAnimatedStyle(() => {
    return {
      height: height.value
    }
  })

  const animatedEndStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animatedHeight.value, {
        duration: 500
      })
    }
  })

  const renderReelView = () => {
    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[animatedHeightStyle, animatedEndStyle, styles.viewContainer]}>
          {renderVideo()}
        </Animated.View>
      </GestureDetector>
    )
  }

  return (
    <ReactNativeModal
      isVisible
      coverScreen
      style={styles.coverScreen}
      onBackButtonPress={() => {
        if (props.onClose) props.onClose()
      }}
      onBackdropPress={() => {
        if (props.onClose) props.onClose()
      }}
    >
      <View style={CommonStyles.flex}>
        {renderReelView()}
        <AppScrollView showsVerticalScrollIndicator={false} pointerEvents={'none'}>
          {renderHeader()}
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.image + index}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </AppScrollView>
      </View>
      <CommentInput
        onCloseReply={() => {
          setReplyComment(null)
          setISReply(false)
        }}
        replyerName={' Anup Soni'}
        isReplyView={isReply}
        onPressComment={onPressComment}
      />
    </ReactNativeModal>
  )
}

export default ReelCommentModal

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginLeft: scale(15)
  },
  viewContainer: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    overflow: 'hidden'
  },
  headerContainer: {
    width: '100%',
    // ...CommonStyles.row,
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    padding: scale(15),
    paddingVertical: verticalScale(20),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    justifyContent: 'space-between'
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  dotMenu: {
    width: verticalScale(25),
    height: verticalScale(25)
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
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
  timeText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginTop: verticalScale(10)
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginRight: scale(10),
    flex: 1
  },
  descText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  postViewContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: verticalScale(15)
  },
  textContainer: {
    marginLeft: scale(10)
  },
  innerView: {
    justifyContent: 'space-between'
  },

  videoStyle: {
    flex: 1
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
  },
  bottomImages: {
    height: verticalScale(20),
    width: verticalScale(20)
  },
  tintColorBlack: {
    tintColor: Color.white
  },
  coverScreen: {
    margin: 0,
    padding: 0,
    backgroundColor: Color.offWhite
  }
})
