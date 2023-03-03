import React from 'react'
import {ScrollViewProps, StyleProp, ViewStyle} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

interface AppScrollViewProps extends ScrollViewProps {
  children?: React.ReactNode
  innerRef?: any
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  stickyHeaderIndices?: number[]
}

const AppScrollView = (props: AppScrollViewProps) => {
  const {children, stickyHeaderIndices, innerRef, style, contentContainerStyle = {}} = props
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      ref={(ref: any) => innerRef(ref)}
      contentContainerStyle={contentContainerStyle}
      style={style}
      extraHeight={20}
      stickyHeaderIndices={stickyHeaderIndices}
    >
      {children}
    </KeyboardAwareScrollView>
  )
}

export default AppScrollView

AppScrollView.defaultProps = {
  innerRef: () => {}
}
