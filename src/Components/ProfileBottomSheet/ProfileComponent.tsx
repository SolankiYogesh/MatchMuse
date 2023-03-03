import React, {useMemo, useRef, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import {BottomSheetScrollView} from '@gorhom/bottom-sheet'
import {t} from 'i18next'

import {FEEDS} from '../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images} from '../../Helpers'
import {moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppProfileImage from '../AppProfileImage'
import ProfileTabView from './Components/ProfileTabView'
import {ProfileBottomSheetProps} from './ProfileBottomSheet'

const ProfileComponent = (props: ProfileBottomSheetProps) => {
  const blueShade = useMemo(() => [Color.top_blue, Color.bottom_blue], [])
  const blackShade = useMemo(() => [Color.black, Color.black], [])
  const ScrollY = useSharedValue(0)
  const [offset, setOffSet] = useState(0)
  const scrollRef = useRef<any>(null)

  const AnimatedBottomScrollView: any = Animated.createAnimatedComponent(BottomSheetScrollView)

  const scrollHandler = useAnimatedScrollHandler((event) => {
    if (event.contentOffset.y > offset / 2) {
      ScrollY.value = event.contentOffset.y
    }
  })
  const stylez = useAnimatedStyle(() => {
    const opacity = interpolate(ScrollY.value, [offset / 2, offset], [0, 1])
    const zIndex = interpolate(ScrollY.value, [offset / 2, offset], [0, 1000])

    return {
      transform: [
        {
          translateY: ScrollY.value
        }
      ],
      opacity,
      zIndex
    }
  })

  const textAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(ScrollY.value, [offset / 2, offset], [1, 0])

    return {
      opacity
    }
  })

  const renderMenuHeader = () => {
    return (
      <Animated.View
        style={[CommonStyles.row, styles.absoluteHeader, stylez, styles.menuContainer]}
      >
        <View style={styles.profileImageView}>
          <Image
            borderRadius={moderateScale(5)}
            resizeMode={'cover'}
            source={{uri: FEEDS[1]?.image}}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.usernameContainer}>
          <Text style={[styles.usernameText, styles.absoluteheaderText]}>{'Username'}</Text>
          <Image
            style={styles.starImageStyle}
            source={Images.creator_talents_star}
            resizeMode={'contain'}
          />
        </View>
        <TouchableOpacity>
          <Image style={styles.image} source={Images.three_line_menu} resizeMode={'contain'} />
        </TouchableOpacity>
      </Animated.View>
    )
  }

  const renderProfileView = () => {
    return (
      <View style={[CommonStyles.row, styles.profileContainer]}>
        <AppProfileImage
          url={FEEDS[1].image}
          size={100}
          borderColor={Color.Primary}
          borderRadius={25}
          borderWidth={3.5}
        />

        <View style={styles.secondBoxView}>
          <View style={styles.rowView}>
            <Image style={styles.followerImage} source={Images.groupImage} resizeMode={'contain'} />
            <View style={styles.followerContainer}>
              <Text style={[styles.uploadSmallText, styles.uplocaCount]}>{0}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0.3, y: 0}}
              end={{x: 0.8, y: 1}}
              locations={[0.1865, 0.8077]}
              colors={blackShade}
              style={styles.gradientButton}
            >
              <Text style={styles.btntext}>{t('FD119')}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.verticalView} />
        <View style={styles.secondBoxView}>
          <View style={styles.rowView}>
            <Image
              style={styles.followerImage}
              source={Images.user_start_icon_blue_128}
              resizeMode={'contain'}
            />
            <View style={styles.followerContainer}>
              <Text style={[styles.uploadSmallText, styles.uplocaCount]}>{0}</Text>
            </View>
          </View>
          <LinearGradient
            start={{x: 0.3, y: 0}}
            end={{x: 0.8, y: 1}}
            locations={[0.1865, 0.8077]}
            colors={blueShade}
            style={styles.gradientButton}
          >
            <Text style={styles.btntext}>{t('FD280')}</Text>
          </LinearGradient>
        </View>
      </View>
    )
  }

  const renderHeaderProfileView = () => {
    return (
      <View style={[CommonStyles.row, styles.menuContainer]}>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>{'Username'}</Text>
          <Image
            style={styles.starImageStyle}
            source={Images.creator_talents_star}
            resizeMode={'contain'}
          />
        </View>
        <TouchableOpacity>
          <Image style={styles.image} source={Images.three_line_menu} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderDetailsContainer = () => {
    return (
      <View style={styles.nameContainer}>
        <Text style={styles.fullnameText}>{'Pits Burge-Lukenala'}</Text>
      </View>
    )
  }

  const renderTabView = () => {
    return <ProfileTabView />
  }

  return (
    <AnimatedBottomScrollView
      onScroll={scrollHandler}
      ref={scrollRef}
      onScrollEndDrag={(e: any) => {
        if (e.nativeEvent.contentOffset.y > offset / 2) {
          scrollRef.current?.scrollTo({
            x: 0,
            y: offset,
            animated: true
          })
        } else {
          scrollRef.current?.scrollTo({
            x: 0,
            y: 0,
            animated: true
          })
        }
      }}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.headerContainer}>
        {renderHeaderProfileView()}
        {renderProfileView()}
        {renderDetailsContainer()}
        {renderMenuHeader()}
      </View>

      <View
        onLayout={(event) => {
          setOffSet(event.nativeEvent.layout.y)
        }}
      >
        <Animated.Text style={[styles.desktext, textAnimatedStyle]}>
          {'GrayMarket - Abuse - Comodity\n Wire ❤ Abentuuer, lhr auch?'}
        </Animated.Text>
        {renderTabView()}
      </View>
    </AnimatedBottomScrollView>
  )
}

export default ProfileComponent

const styles = StyleSheet.create({
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: verticalScale(10)
  },
  usernameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10),
    marginLeft: scale(50)
  },
  starImageStyle: {
    width: verticalScale(20),
    height: verticalScale(20),
    marginLeft: scale(10)
  },
  image: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.black,
    alignSelf: 'flex-end'
  },
  menuContainer: {
    width: '100%',
    paddingRight: scale(10)
  },
  profileImageView: {
    height: verticalScale(40),
    width: verticalScale(40),
    borderWidth: scale(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  secondBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    padding: scale(10)
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(5)
  },
  followerImage: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  verticalView: {
    height: verticalScale(80),
    backgroundColor: Color.black,
    width: scale(1),
    bottom: verticalScale(5)
  },
  uploadSmallText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(10),
    color: Color.black,
    textAlign: 'center',
    marginLeft: scale(5),
    width: '100%'
  },
  followerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(5)
  },
  uplocaCount: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold
  },
  gradientButton: {
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(5),
    paddingVertical: verticalScale(7)
  },
  btntext: {
    fontSize: moderateScale(10),
    color: Color.white
  },
  profileContainer: {
    width: '100%',
    paddingHorizontal: scale(10),
    justifyContent: 'center'
  },
  nameContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
    marginVertical: verticalScale(15)
  },
  fullnameText: {
    fontSize: moderateScale(16.5),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginBottom: verticalScale(10)
  },
  desktext: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black,
    // paddingTop: verticalScale(10),
    backgroundColor: Color.white,
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    paddingHorizontal: scale(20),
    paddingBottom: scale(10),
    overflow: 'hidden'
  },
  headerContainer: {
    backgroundColor: Color.white
  },
  absoluteHeader: {
    position: 'absolute',
    zIndex: 1000,
    paddingLeft: scale(10)
  },
  absoluteheaderText: {
    marginLeft: 0
  }
})
