import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const StoryHeader = (props: any) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.innerHeaderView}>
        <Image
          source={{
            uri: props?.userStories?.profile
          }}
          style={styles.imageStyle}
          resizeMode={'cover'}
        />

        <Text style={styles.usernameText}>{props?.userStories?.username}</Text>
        <Image
          resizeMode={'contain'}
          style={styles.startimg}
          source={Images.creator_talents_star}
        />
        <Text style={styles.timeText}>{'Yesterday'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (props.onClose) props.onClose()
        }}
      >
        <Image source={Images.close} style={styles.closeImage} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  )
}

export default StoryHeader

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    marginTop: verticalScale(30)
  },
  innerHeaderView: {
    ...CommonStyles.row
  },
  imageStyle: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderWidth: 2,
    borderColor: Color.Primary,
    borderRadius: moderateScale(10)
  },
  usernameText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.bold,
    color: Color.white,
    marginHorizontal: scale(10)
  },
  startimg: {
    width: verticalScale(20),
    height: verticalScale(20)
  },
  timeText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginHorizontal: scale(10)
  },
  closeImage: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.white
  }
})
