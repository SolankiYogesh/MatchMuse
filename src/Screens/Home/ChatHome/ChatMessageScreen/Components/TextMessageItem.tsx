import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {Color, Fonts} from '../../../../../Helpers'
import {moderateScale} from '../../../../../Helpers/Responsive'

const TextMessageItem = ({item}: any) => {
  const isYou = item?.isYou

  return (
    <View>
      <Text style={[styles.messageText, !isYou && styles.rightText]}>{item?.text}</Text>
    </View>
  )
}

export default TextMessageItem

const styles = StyleSheet.create({
  messageText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  rightText: {
    color: Color.white
  }
})
