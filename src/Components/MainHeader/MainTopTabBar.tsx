import React, {useMemo} from 'react'
import {Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs'
import _ from 'lodash'

import {Color, CommonStyles, Images, Screen} from '../../Helpers'
import BottomSheetLoader from '../../Helpers/BottomSheetLoader'
import {moderateScale, scale, verticalScale} from '../../Helpers/Responsive'

const MainTopTabBar = (props: MaterialTopTabBarProps) => {
  const {state} = props
  const nav: any = props.navigation
  const redShade = useMemo(() => [Color.pink_shade1, Color.red_shade1], [])
  const blueShade = useMemo(() => [Color.top_blue, Color.bottom_blue], [])
  const greyShade = useMemo(() => [Color.lightGrey, Color.lightGrey], [])

  const onPressMenu = () => {
    state?.routes[state?.index]?.name === Screen.DrawerNavigation
      ? nav.navigate(Screen.Setting)
      : state?.routes[state?.index]?.name === Screen.NotificationScreen
      ? nav.navigate(Screen.NotificationFilterScreen)
      : state?.routes[state?.index]?.name === Screen.ReelsScreen ||
        state?.routes[state?.index]?.name === Screen.MatchingFeedsScreen
      ? nav.navigate(Screen.DateFilterScreen)
      : nav.navigate(Screen.Search)
  }

  const getImageState = () => {
    const isMatching = _.includes(state?.routeNames, Screen.MatchingFeedsScreen)
    return state?.routes[state?.index]?.name === Screen.DrawerNavigation
      ? Images.setting
      : !isMatching
      ? Images.search
      : Images.three_line_menu
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={Color.offWhite} />
      <View style={[CommonStyles.row, styles.containerView]}>
        <TouchableOpacity
          onPress={() => {
            BottomSheetLoader.isShowTopSheet(true)
          }}
          style={[styles.backImageContainer, styles.logoImageContainer]}
        >
          <Image style={styles.backImage} source={Images.fyerdates_logo} resizeMode={'contain'} />
        </TouchableOpacity>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={onPressMenu} style={styles.menuContainer}>
            <Image
              style={[styles.smallImage, styles.searchIcon]}
              source={getImageState()}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate(Screen.Chat)} style={styles.menuContainer}>
            <Image
              style={[styles.smallImage, styles.searchIcon]}
              source={Images.message_chat}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        {state.routes.map((route: any, index) => {
          const isFocused = state.index === index

          const onPress = () => {
            const event = nav.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              nav.navigate({name: route.name, merge: true})
            }
          }

          const onLongPress = () => {
            nav.emit({
              type: 'tabLongPress',
              target: route.key
            })
          }

          const getImage = (route: string) => {
            switch (route) {
              case Screen.MatchingFeedsScreen:
                return Images.matching_top_tab_heart
              case Screen.ReelsScreen:
                return Images.match_reel
              case Screen.NotificationScreen:
                return Images.match_notification
              case Screen.DrawerNavigation:
                return Images.match_profile
              case Screen.FeedPostsScreen:
                return Images.feed_home
              case Screen.FeedsReelsScreen:
                return Images.match_reel
              case Screen.FeedServiceScreen:
                return Images.feed_group
              case Screen.FeedFavoriteScreen:
                return Images.feed_fav
              case Screen.EntertainmentFeedsScreen:
                return Images.feed_home
              case Screen.EntertainmentVideoScreen:
                return Images.video
              case Screen.EntertainmentMusicScreen:
                return Images.mic
              case Screen.StoreHomeProductScreen:
                return Images.feed_home
              case Screen.StoreBagScreen:
                return Images.bag
              case Screen.StoreDiscountScreen:
                return Images.discount
              case Screen.StoreFavoriteScreen:
                return Images.heart_fill
              case Screen.LocationHomeFeedScreen:
                return Images.feed_home
              case Screen.LocationFilterScreen:
                return Images.local
              case Screen.LocationEventScreen:
                return Images.discount
              case Screen.LocationFavoriteScreen:
                return Images.heart_fill

              default:
                return Images.fyerdates_logo
            }
          }

          const isGreenShadeRoute = () => route.name === Screen.FeedFavoriteScreen

          return (
            <TouchableOpacity
              onPress={onPress}
              onLongPress={onLongPress}
              key={route?.key}
              style={styles.touchView}
            >
              <LinearGradient
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={isFocused ? (isGreenShadeRoute() ? blueShade : redShade) : greyShade}
                angle={90}
                useAngle
                angleCenter={{x: 0, y: 0.5}}
                style={styles.imageBack}
              >
                <Image
                  style={[styles.image, isFocused && styles.imageStyle]}
                  source={getImage(route.name)}
                  resizeMode={'contain'}
                />
              </LinearGradient>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default MainTopTabBar

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: Color.offWhite
  },
  containerView: {
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  image: {
    width: verticalScale(18),
    height: verticalScale(18),
    tintColor: Color.darkGrey
  },

  imageBack: {
    flex: 1,
    paddingHorizontal: scale(15),
    height: verticalScale(30),
    ...CommonStyles.centerItem
  },

  imageStyle: {
    tintColor: Color.white
  },
  touchView: {
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    height: verticalScale(30),
    marginHorizontal: scale(5)
  },

  backImage: {
    width: '100%',
    height: '100%'
  },
  searchIcon: {
    tintColor: Color.black
  },
  backImageContainer: {
    position: 'absolute',
    width: verticalScale(40),
    height: verticalScale(40)
  },
  logoImageContainer: {
    left: scale(15)
  },
  menuContainer: {
    width: verticalScale(30),
    height: verticalScale(30),
    ...CommonStyles.centerItem
  },
  rightContainer: {
    position: 'absolute',
    ...CommonStyles.row,
    right: scale(15)
  },
  smallImage: {
    width: '70%',
    height: '70%'
  }
})
