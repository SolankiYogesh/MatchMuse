import React from 'react'
import {Image, StyleProp, StyleSheet, TextStyle, useWindowDimensions, ViewStyle} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {TabBar, TabBarIndicatorProps, TabBarItemProps, TabView} from 'react-native-tab-view'
import {
  NavigationState,
  Route,
  Scene,
  SceneRendererProps
} from 'react-native-tab-view/lib/typescript/src/types'
import {t} from 'i18next'

import {Color, CommonStyles, Images} from '../../../Helpers'
import {moderateScale, scale, verticalScale, W_HEIGHT} from '../../../Helpers/Responsive'
import RenderFollowingList from '../../../Screens/Home/EntertainmentHome/EntertainmentFeedsScreen/Components/RenderFollowingList'
import ProfileFeedTab from './ProfileFeedTab'
import ProfileHomeTab from './ProfileHomeTab'
import ProfileServicesTab from './ProfileServicesTab'

const ProfileTabView = () => {
  const [index, setIndex] = React.useState(0)
  const layout = useWindowDimensions()
  const [routes] = React.useState([
    {key: 'home', title: 'home'},
    {key: 'feed', title: 'feed'},
    {key: 'entertainment', title: 'entertainment'},
    {key: 'services', title: 'services'}
  ])

  const renderScene = ({route}: any) => {
    switch (route?.key) {
      case 'home':
        return <ProfileHomeTab />
      case 'feed':
        return <ProfileFeedTab />
      case 'entertainment':
        return <RenderFollowingList title={String(t('FD317')).toUpperCase()} />
      case 'services':
        return <ProfileServicesTab />
      default:
        return <ProfileHomeTab />
        break
    }
  }

  const renderCustomTabView = (
    props: JSX.IntrinsicAttributes &
      SceneRendererProps & {
        navigationState: NavigationState<Route>
        scrollEnabled?: boolean | undefined
        bounces?: boolean | undefined
        activeColor?: string | undefined
        inactiveColor?: string | undefined
        pressColor?: string | undefined
        pressOpacity?: number | undefined
        getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined
        getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined
        getAccessibilityLabel?: ((scene: Scene<Route>) => string | undefined) | undefined
        getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined
        renderLabel?:
          | ((scene: Scene<Route> & {focused: boolean; color: string}) => React.ReactNode)
          | undefined
        renderIcon?:
          | ((scene: Scene<Route> & {focused: boolean; color: string}) => React.ReactNode)
          | undefined
        renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined
        renderIndicator?: ((props: TabBarIndicatorProps<Route>) => React.ReactNode) | undefined
        renderTabBarItem?:
          | ((
              props: TabBarItemProps<Route> & {key: string}
            ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>)
          | undefined
        onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined
        onTabLongPress?: ((scene: Scene<Route>) => void) | undefined
        tabStyle?: StyleProp<ViewStyle>
        indicatorStyle?: StyleProp<ViewStyle>
        indicatorContainerStyle?: StyleProp<ViewStyle>
        labelStyle?: StyleProp<TextStyle>
        contentContainerStyle?: StyleProp<ViewStyle>
        style?: StyleProp<ViewStyle>
        gap?: number | undefined
        testID?: string | undefined
      }
  ) => {
    return (
      <TabBar
        {...props}
        pressColor={'transparent'}
        pressOpacity={1}
        tabStyle={{
          backgroundColor: Color.offWhite
        }}
        renderLabel={() => null}
        renderIcon={(route) => {
          if (route.route.key === 'home') {
            return (
              <LinearGradient
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={
                  route.focused ? [Color.pink_shade1, Color.red_shade1] : [Color.white, Color.white]
                }
                style={styles.tabIconBack}
              >
                <Image
                  source={Images.feed_home}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
          if (route.route.key === 'feed') {
            return (
              <LinearGradient
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={
                  route.focused ? [Color.pink_shade1, Color.red_shade1] : [Color.white, Color.white]
                }
                style={styles.tabIconBack}
              >
                <Image
                  source={Images.feeds}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
          if (route.route.key === 'entertainment') {
            return (
              <LinearGradient
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={
                  route.focused ? [Color.pink_shade1, Color.red_shade1] : [Color.white, Color.white]
                }
                style={styles.tabIconBack}
              >
                <Image
                  source={Images.entertainment}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
          if (route.route.key === 'services') {
            return (
              <LinearGradient
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={
                  route.focused ? [Color.pink_shade1, Color.red_shade1] : [Color.white, Color.white]
                }
                style={styles.tabIconBack}
              >
                <Image
                  source={Images.groupImage}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
        }}
        contentContainerStyle={{
          backgroundColor: Color.white
        }}
      />
    )
  }

  return (
    <TabView
      renderScene={renderScene}
      lazy
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      sceneContainerStyle={{
        height: W_HEIGHT
      }}
      initialLayout={{width: layout.width}}
      renderTabBar={renderCustomTabView}
    />
  )
}

export default ProfileTabView

const styles = StyleSheet.create({
  tabIconBack: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    padding: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(20)
  },
  tabImage: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.Primary
  },
  tintColorWhite: {
    tintColor: Color.white
  }
})
