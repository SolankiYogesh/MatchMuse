import React from 'react'
import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'
import {t} from 'i18next'

import {CommonStyles} from '../Helpers'

interface EamptyViewProps {
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  text?: string | null
}

const EamptyView = (props: EamptyViewProps) => {
  const {text = t('FD308'), style = {}, textStyle = {}} = props
  return (
    <View style={[styles.container, style]}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

export default EamptyView

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.centerItem,
    ...CommonStyles.flex
  }
})
