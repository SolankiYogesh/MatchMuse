import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

export interface EntertainmentFeedHeaderProps {
  title?: string | string[] | undefined | null
  onPressMenu?: () => void
  isStar?: boolean
}

const EntertainmentFeedHeader = (props: EntertainmentFeedHeaderProps) => {
  const {onPressMenu, title = '', isStar = false} = props
  return (
    <View style={styles.headerContainer}>
      <View style={[CommonStyles.row, CommonStyles.flex]}>
        <Text style={styles.labelStyle}>{title}</Text>
        {isStar && (
          <Image
            style={styles.starImageStyle}
            source={Images.creator_talents_star}
            resizeMode={'contain'}
          />
        )}
      </View>
      {onPressMenu && (
        <TouchableOpacity onPress={onPressMenu}>
          <Image source={Images.box_menu} style={styles.imageBox} resizeMode={'contain'} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default EntertainmentFeedHeader

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  headerContainer: {
    ...CommonStyles.row,
    marginHorizontal: scale(10),
    marginTop: verticalScale(10)
  },
  imageBox: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.black
  },
  starImageStyle: {
    width: verticalScale(20),
    height: verticalScale(20),
    marginLeft: scale(10)
  }
})
