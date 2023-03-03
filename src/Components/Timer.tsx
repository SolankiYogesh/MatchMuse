/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-bitwise */
import React, {useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'
import BackgroundTimer from 'react-native-background-timer'

import {Color, Utility} from '../Helpers'
import {moderateScale} from '../Helpers/Responsive'

export interface ICountdownRef {
  start: () => void
  pause: () => void
  resume: () => void
  stop: () => void
}

export interface CountDownProps {
  initialSeconds?: number
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  fontFamily?: string
  autoStart?: boolean
  formatTime?: 'ss' | 'hh:mm:ss'
  onTimes?: (seconds: number) => void
  onPause?: (seconds: number) => void
  onEnd?: (seconds: number) => void
}
const defaultProps = {
  style: {},
  textStyle: {},
  onTimes: (_seconds: number) => {},
  onPause: (_seconds: number) => {},
  onEnd: (_seconds: number) => {}
}

const Timer = React.forwardRef<any, CountDownProps>((props, ref) => {
  const {
    initialSeconds = 0,
    style,
    textStyle,
    fontFamily,
    autoStart = false,
    formatTime,
    onEnd,
    onTimes,
    onPause
  } = props

  const interval = useRef(0)
  const hours = useRef(0)
  const minute = useRef(0)
  const seconds = useRef(0)
  const currentSeconds = useRef(0)

  const [key, setKey] = useState(Math.random())

  useImperativeHandle(ref, () => {
    return {start, pause, resume, stop}
  })

  const timer = useCallback(() => {
    interval.current = BackgroundTimer.setInterval(() => {
      currentSeconds.current = currentSeconds.current + 1
      if (seconds.current < 60) {
        seconds.current = seconds.current + 1
      } else {
        seconds.current = 0
        minute.current = minute.current + 1
      }
      if (minute.current === 60) {
        minute.current = 0
        hours.current = hours.current + 1
      }
      if (onTimes) {
        onTimes(currentSeconds.current)
      }
      setKey(Math.random())
    }, 1000)
  }, [])

  const initTime = useCallback((iSeconds: number) => {
    if (iSeconds >= 3600) {
      hours.current = ~~(iSeconds / 3600)
      const times = iSeconds % 3600
      initTime(times)
    } else {
      if (iSeconds >= 60) {
        minute.current = ~~(iSeconds / 60)
        const times = iSeconds % 60
        initTime(times)
      } else {
        seconds.current = iSeconds
      }
    }
  }, [])

  const init = useCallback(() => {
    currentSeconds.current = 0
    hours.current = 0
    minute.current = 0
    seconds.current = 0

    if (initialSeconds > 0) {
      initTime(initialSeconds)
    }

    setKey(Math.random())
  }, [initialSeconds])

  const start = useCallback(() => {
    init()

    if (!interval.current) {
      timer()
    }
  }, [])

  const pause = useCallback(() => {
    clear()
    if (onPause) {
      onPause(currentSeconds.current)
    }
  }, [])

  const resume = () => {
    if (!interval.current) {
      timer()
    }
  }

  const stop = () => {
    if (onEnd) {
      onEnd(currentSeconds.current)
    }

    init()
    setKey(Math.random())
    clear()
  }

  const clear = () => {
    if (interval.current) {
      BackgroundTimer.clearInterval(interval.current)
      interval.current = 0
    }
  }

  useEffect(() => {
    init()
  }, [initialSeconds])

  useEffect(() => {
    return () => {
      pause()
    }
  }, [])

  useEffect(() => {
    if (autoStart) {
      start()
    }
  }, [autoStart])

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily
      }
    } else {
      return {}
    }
  }

  const renderTimer = () => {
    if (formatTime === 'hh:mm:ss') {
      if (hours.current > 0) {
        return (
          <Text style={[styles.text, textStyle, font()]}>{`${hours.current}:${
            minute.current.toString().length === 1 ? '0' : ''
          }${minute.current}:${seconds.current.toString().length === 1 ? '0' : ''}${
            seconds.current
          }`}</Text>
        )
      } else {
        if (minute.current > 0) {
          return (
            <Text style={[styles.text, textStyle, font()]}>{`${minute.current}:${
              seconds.current.toString().length === 1 ? '0' : ''
            }${seconds.current}`}</Text>
          )
        } else {
          return <Text style={[styles.text, textStyle, font()]}>{`${seconds.current}`}</Text>
        }
      }
    } else if (formatTime === 'ss') {
      return <Text style={[styles.text, textStyle, font()]}>{`${currentSeconds.current}`}</Text>
    } else {
      return (
        <Text style={[styles.text, textStyle, font()]}>
          {Utility.secondsToMMSS(currentSeconds.current)}
        </Text>
      )
    }
  }

  return (
    <View style={style} key={key}>
      {renderTimer()}
    </View>
  )
})

Timer.defaultProps = defaultProps

export default Timer
const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(20),
    color: Color.black
  }
})
