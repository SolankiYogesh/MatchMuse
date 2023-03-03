import React, {useMemo} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const ChatHeader = ({item}: any) => {
  const isOnline = useMemo(() => Math.random() < 0.5, [])
  const navigation: any = useNavigation()

  const onPressVideoCall = () => {
    navigation.navigate(Screen.VideoCallScreen, {
      item
    })
  }
  const onPressAudioCall = () => {
    navigation.navigate(Screen.VideoCallScreen, {
      item,
      isAudioOnly: true
    })
  }

  return (
    <View style={styles.headerView}>
      <View style={CommonStyles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        <View style={CommonStyles.row}>
          <AppProfileImage url={item?.image} />
          <View style={styles.nameCOntainer}>
            <Text style={styles.nameText}>{item?.name}</Text>
            <View style={CommonStyles.row}>
              <View style={[styles.circleView, isOnline && styles.onlineCircelView]} />
              <Text style={styles.offlineText}>{isOnline ? t('FD413') : t('FD412')}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={CommonStyles.row}>
        <TouchableOpacity onPress={onPressVideoCall}>
          <Image style={styles.videoIcons} resizeMode={'contain'} source={Images.video} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressAudioCall}>
          <Image style={styles.videoIcons} resizeMode={'contain'} source={Images.phone} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.textGrey,
    marginRight: scale(10)
  },
  videoIcons: {
    marginHorizontal: scale(10),
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.textGrey
  },

  headerView: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginHorizontal: scale(15),
    backgroundColor: Color.offWhite,
    paddingVertical: verticalScale(10)
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginVertical: verticalScale(5)
  },
  nameCOntainer: {
    marginLeft: scale(10)
  },
  circleView: {
    width: verticalScale(15),
    height: verticalScale(15),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(300),
    marginRight: scale(5)
  },
  offlineText: {
    fontSize: moderateScale(13.5),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  onlineCircelView: {
    backgroundColor: Color.green_shade
  }
})
