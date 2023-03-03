import React, {useMemo} from 'react'
import {StyleProp, StyleSheet, ViewStyle} from 'react-native'
import {PanGestureHandler} from 'react-native-gesture-handler'
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'

import {heightPx, scale, W_WIDTH} from '../../Helpers/Responsive'

interface AnimatedDragViewProps {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const AnimatedDragView = (props: AnimatedDragViewProps) => {
  const {style, children} = props
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const height = useMemo(() => heightPx(70), [])

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: any) => {
      ctx.startX = x.value
      ctx.startY = y.value
    },
    onActive: (event, ctx) => {
      x.value = event.translationX + ctx.startX
      y.value = event.translationY + ctx.startY
    }
  })

  const _style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: interpolate(x.value, [0, W_WIDTH], [0, W_WIDTH])},
        {translateY: interpolate(y.value, [0, height], [0, height])}
      ]
    }
  })
  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.box, _style, style]}>{children}</Animated.View>
    </PanGestureHandler>
  )
}

export default AnimatedDragView

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: scale(30),
    bottom: heightPx(22)
  }
})
