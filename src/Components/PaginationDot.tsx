import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

import {Color, CommonStyles} from '../Helpers'
import {moderateScale, scale, verticalScale} from '../Helpers/Responsive'

interface PaginationDotProps {
  style?: StyleProp<ViewStyle>
  index?: number
  length?: number
}
const PaginationDot = (props: PaginationDotProps) => {
  const {index = 0, style = {}, length = 5} = props

  return (
    <View style={[styles.paginationCOntainer, style]}>
      {[...Array(length).keys()].map((_, i) => (
        <View key={i?.toString()} style={[styles.inActiveDot, i === index && styles.activeStyle]} />
      ))}
    </View>
  )
}

export default PaginationDot

const styles = StyleSheet.create({
  paginationCOntainer: {
    position: 'absolute',
    right: scale(40),
    bottom: verticalScale(15),
    backgroundColor: Color.white,
    ...CommonStyles.row,
    padding: scale(5),
    borderRadius: moderateScale(10)
  },
  inActiveDot: {
    backgroundColor: Color.lightGrey,
    width: verticalScale(5),
    height: verticalScale(5),
    borderRadius: moderateScale(100),
    marginRight: scale(5)
  },
  activeStyle: {
    backgroundColor: Color.darkGrey
  }
})
