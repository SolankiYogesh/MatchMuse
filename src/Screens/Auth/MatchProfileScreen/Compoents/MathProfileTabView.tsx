import React from 'react'
import {Image, StyleProp, TextStyle, useWindowDimensions, View, ViewStyle} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {TabBar, TabBarIndicatorProps, TabBarItemProps, TabView} from 'react-native-tab-view'
import {
  NavigationState,
  Route,
  Scene,
  SceneRendererProps
} from 'react-native-tab-view/lib/typescript/src/types'

import {Color, CommonStyles, Images} from '../../../../Helpers'
import {styles} from '../MatchProfileScreenStyle'
import CamView from './CamView'
import GridView from './GridView'
import InfoView from './InfoView'
import QueView from './QueView'

export interface MathProfileTabViewProps {
  isAccount?: boolean
  isImageSelected?: boolean
}

const MathProfileTabView = ({
  isAccount = false,
  isImageSelected = false
}: MathProfileTabViewProps) => {
  const [index, setIndex] = React.useState(0)
  const layout = useWindowDimensions()
  const [routes] = React.useState([
    {key: 'grid', title: 'grid'},
    {key: 'cam', title: 'cam'},
    {key: 'info', title: 'info'},
    {key: 'que', title: 'que'}
  ])

  const renderScene = ({route}: any) => {
    switch (route?.key) {
      case 'grid':
        return <GridView isAccount={isAccount} />
      case 'cam':
        return <CamView isAccount={isAccount} />
      case 'info':
        return <InfoView isAccount={isAccount} />
      case 'que':
        return <QueView isAccount={isAccount} isImageSelected={isImageSelected} />
      default:
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
        tabStyle={styles.tabStyle}
        style={CommonStyles.noShadow}
        renderLabel={() => null}
        renderIndicator={() => null}
        renderIcon={(route) => {
          if (route.route.key === 'grid') {
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
                  source={Images.grid}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
          if (route.route.key === 'cam') {
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
                  source={Images.cam}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
          if (route.route.key === 'info') {
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
                  source={Images.info}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
          if (route.route.key === 'que') {
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
                  source={Images.que}
                  style={[styles.tabImage, route.focused && styles.tintColorWhite]}
                />
              </LinearGradient>
            )
          }
        }}
      />
    )
  }

  return (
    <View style={styles.tabViewContainer}>
      <TabView
        renderScene={renderScene}
        lazy
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        style={styles.tabViewContainer}
        initialLayout={{width: layout.width}}
        renderTabBar={renderCustomTabView}
      />
    </View>
  )
}

export default MathProfileTabView
