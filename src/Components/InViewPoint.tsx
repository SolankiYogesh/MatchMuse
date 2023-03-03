import React, {Component} from 'react'
import {Dimensions, View} from 'react-native'

export interface Iprops {
  disabled: boolean
  delay?: number
  onChange?: (isVisible: boolean) => void
  children?: React.ReactNode
}

const InViewPort = class extends Component<Iprops> {
  constructor(props: Iprops) {
    super(props)
    this.state = {rectTop: 0, rectBottom: 0}
  }

  componentDidMount() {
    if (!this.props.disabled) {
      this.startWatching()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (nextProps.disabled) {
      this.stopWatching()
    } else {
      this.lastValue = null
      this.startWatching()
    }
  }

  UNSAFE_componentWillUpdate() {
    this.stopWatching()
  }

  lastValue: any
  interval: any
  myview: any

  startWatching() {
    if (this.interval) {
      return
    }
    this.interval = setInterval(() => {
      if (!this.myview) {
        return
      }
      this.myview.measure((x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
        this.setState({
          rectTop: pageY,
          rectBottom: pageY + height,
          rectWidth: pageX + width
        })
      })
      this.isInViewPort()
    }, this.props.delay ?? 100)
  }

  stopWatching() {
    this.interval = clearInterval(this.interval)
  }

  isInViewPort() {
    const window = Dimensions.get('window')
    const isVisible =
      this.state.rectBottom !== 0 &&
      this.state.rectTop >= 0 &&
      this.state.rectBottom <= window.height &&
      this.state.rectWidth > 0 &&
      this.state.rectWidth <= window.width
    if (this.lastValue !== isVisible) {
      this.lastValue = isVisible
      if (this.props.onChange) this.props.onChange(isVisible)
    }
  }

  render() {
    return (
      <View
        ref={(component) => {
          this.myview = component
        }}
        {...this.props}
      >
        {this.props.children}
      </View>
    )
  }
}

export default InViewPort
