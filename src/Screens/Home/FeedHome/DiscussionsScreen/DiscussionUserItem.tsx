import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../Components/Animations/AnimatedImage'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

const DiscussionUserItem = ({item}: any) => {
  const [liked, setLiked] = useState(false)
  const navigation: any = useNavigation()

  const onPressDiscussion = () => {
    navigation.navigate(Screen.DiscussionDetailsScreen, {
      item
    })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPressDiscussion}>
      <View style={styles.headerMainImageContainer}>
        <Image
          borderRadius={moderateScale(5)}
          resizeMode={'cover'}
          source={{uri: item?.image}}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.usernameText}>{item?.username}</Text>
        <Text style={styles.replyText}>
          {`${item?.replies} `}
          {t('FD266')}
        </Text>
      </View>
      <View>
        <AnimatedImage
          style={[styles.bottomImages, !liked && styles.tintColorBlack]}
          onPress={() => setLiked(!liked)}
          source={liked ? Images.heart_fill : Images.heart}
        />
        <Text style={[styles.replyText, styles.dateText]}>{item?.date}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DiscussionUserItem

const styles = StyleSheet.create({
  headerMainImageContainer: {
    height: verticalScale(60),
    width: verticalScale(60),
    borderWidth: scale(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  nameContainer: {
    marginLeft: scale(10),
    flex: 1
  },

  nameText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginRight: scale(10)
  },
  usernameText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.darkGrey
  },
  replyText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginTop: verticalScale(15)
  },
  container: {
    ...CommonStyles.row,
    backgroundColor: Color.white,
    width: '90%',
    alignSelf: 'center',
    marginVertical: verticalScale(10),
    padding: scale(10),
    borderRadius: moderateScale(15)
  },
  bottomImages: {
    height: verticalScale(23),
    width: verticalScale(23),
    alignSelf: 'center'
  },
  tintColorBlack: {
    tintColor: Color.Primary
  },
  dateText: {
    color: Color.darkGrey
  }
})
