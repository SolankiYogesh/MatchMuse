import React from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {Color, CommonStyles} from '../Helpers'

interface AppContainerProps {
  barStyle?: StatusBarStyle
  backgroundColor?: string
  isTopSafeArea?: boolean
  isBottomSafeArea?: boolean
  bottomColor?: string
  children?: React.ReactNode
  bodyStyle?: StyleProp<ViewStyle>
  translucent?: boolean
  statusbarColor?: string
  isGradient?: boolean
  isEdgeContainer?: boolean
}

const AppContainer = (props: AppContainerProps) => {
  const {
    barStyle,
    backgroundColor,
    bodyStyle,
    isTopSafeArea,
    isBottomSafeArea,
    bottomColor,
    children,
    statusbarColor,
    isGradient,
    translucent,
    isEdgeContainer = false
  } = props
  const TopComponent = isTopSafeArea ? SafeAreaView : View
  const BottomComponent = isBottomSafeArea ? SafeAreaView : View
  const insets = useSafeAreaInsets()

  const safeStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right
  }

  const isEdge = Platform.OS === 'android' || isEdgeContainer

  return (
    <View style={styles.container}>
      <TopComponent style={{backgroundColor, ...CommonStyles.shadow}} />
      <StatusBar
        barStyle={barStyle}
        translucent={translucent}
        animated
        backgroundColor={statusbarColor}
      />
      <View style={[styles.mainContainer, bodyStyle, !isGradient && isEdge && safeStyle]}>
        {isGradient ? (
          <LinearGradient
            start={{x: 0.3, y: 0}}
            end={{x: 0.8, y: 1}}
            locations={[0.1865, 0.8077]}
            colors={[Color.pink_shade1, Color.red_shade1]}
            style={[CommonStyles.flex, safeStyle]}
          >
            {children}
          </LinearGradient>
        ) : (
          children
        )}
      </View>
      <BottomComponent style={{backgroundColor: bottomColor}} />
    </View>
  )
}

export default AppContainer

AppContainer.defaultProps = {
  barStyle: 'dark-content',
  backgroundColor: Color.transparent,
  isTopSafeArea: false,
  isBottomSafeArea: false,
  translucent: true,
  isGradient: false,
  statusbarColor: Color.transparent,
  bottomColor: Color.transparent
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    flex: 1
  }
})
