import React, {useMemo, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'

import {FEEDS} from '../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'
import AppProfileImage from '../../AppProfileImage'
import ReactionButton from './ReactionButton'

interface ReactionContainerProps {
  onPressLiveChat?: () => void
  isLive?: boolean
}

const ReactionContainer = (props: ReactionContainerProps) => {
  const {onPressLiveChat, isLive = false} = props
  const [isDesc, setISDesc] = useState(false)
  const [isLiked, setISLiked] = useState(false)
  const [isFollow, setIsFollow] = useState(false)
  const [isSubscribe, setISSubcribe] = useState(false)
  const [isDisLiked, setISDisLiked] = useState(false)
  const [reaction, setReaction] = useState({
    like: 0,
    dislike: 0
  })
  const username = useMemo(() => Utility.randomeUserName(), [])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setISDesc(!isDesc)}>
        <View style={styles.descContainer}>
          <Text style={styles.deskText}>{'SOME THINK NEVER DONE'}</Text>
          <Image source={Images.down_arrow} style={styles.downArrow} resizeMode={'contain'} />
        </View>
        {isDesc && <Text style={styles.exandDeskText}>{'Schedule Timing'}</Text>}
      </TouchableOpacity>
      <View style={styles.descContainer}>
        <View style={CommonStyles.row}>
          <Text style={styles.viewText}>
            {'20'}
            {` ${t('FD322')}`}
          </Text>
          <Text style={styles.viewText}>{'Mar 12,2022'}</Text>
        </View>
        <View style={CommonStyles.row}>
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
              <Text style={[styles.btnText, styles.subScribeTintText]}>{t('FD328')}</Text>
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
      </View>
      <View style={styles.descContainer}>
        <ReactionButton
          isLiked={isLiked}
          onPress={() => {
            setISLiked(!isLiked)
            setReaction({
              like: isLiked ? reaction.like - 1 : reaction.like + 1,
              dislike: reaction.dislike
            })
          }}
          title={reaction.like}
          image={Images.like}
        />
        <ReactionButton
          title={reaction.dislike}
          image={Images.dislike}
          isLiked={isDisLiked}
          onPress={() => {
            setISDisLiked(!isDisLiked)
            setReaction({
              like: reaction.like,
              dislike: isDisLiked ? reaction.dislike - 1 : reaction.dislike + 1
            })
          }}
        />
        <ReactionButton
          title={isLive ? t('FD325') : t('FD253')}
          image={Images.liveChat}
          onPress={onPressLiveChat}
        />
        <ReactionButton image={Images.share_line} />
        <ReactionButton image={Images.notification_line} />
      </View>
      <View style={CommonStyles.row}>
        <AppProfileImage url={FEEDS[1].image} />
        <View style={styles.nameContainer}>
          <View style={CommonStyles.row}>
            <Text style={styles.usernameText}>{username}</Text>
            <Image source={Images.greenCheck} style={styles.smallCheck} resizeMode={'contain'} />
          </View>
          <View style={CommonStyles.row}>
            <Text style={styles.nameText}>{username}</Text>
            <View style={styles.dotView} />
            <Text style={styles.nameText}>
              {'20'}
              {` ${t('FD322')}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ReactionContainer

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15)
  },
  deskText: {
    fontSize: moderateScale(22),
    fontFamily: Fonts.bold,
    color: Color.black
  },
  downArrow: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.black
  },
  descContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  exandDeskText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.darkGrey,
    marginVertical: verticalScale(10)
  },

  viewText: {
    fontSize: moderateScale(12),
    color: Color.darkGrey,
    fontFamily: Fonts.medium,
    marginRight: scale(10)
  },
  dotView: {
    width: verticalScale(5),
    height: verticalScale(5),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(100),
    marginHorizontal: scale(5)
  },
  smallCheck: {
    height: verticalScale(18),
    width: verticalScale(18)
  },
  usernameText: {
    color: Color.black,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(15),
    marginRight: scale(10),
    marginVertical: verticalScale(3)
  },
  nameText: {
    color: Color.darkGrey,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12)
  },
  nameContainer: {
    marginLeft: scale(10)
  },

  //
  btnView: {
    ...CommonStyles.shadow,
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
  subScribeTintText: {
    color: Color.top_blue
  },
  subScribeTint: {
    tintColor: Color.top_blue
  }
})
