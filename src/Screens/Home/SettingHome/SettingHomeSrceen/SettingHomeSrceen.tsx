import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppButtonWithIcon from '../../../../Components/AppButtonWithIcon'
import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Color, CommonStyles, Images, Screen} from '../../../../Helpers'
import {styles} from './SettingHomeStyle'

const listData = [
  {
    title: t('FD158'),
    image: Images.notification,
    Screen: Screen.NotificationSettingScreen
  },
  {
    title: t('FD159'),
    image: Images.payments,
    Screen: Screen.PaymentSettingScreen
  },
  {
    title: t('FD160'),
    image: Images.user_1,
    Screen: Screen.ProfileSettingScreen
  },
  {
    title: t('FD161'),
    image: Images.user_start_icon_blue_128,
    Screen: Screen.CreatorProfileSettingScreen
  },
  {
    title: t('FD162'),
    image: Images.privacy,
    Screen: Screen.PrivacySettingScreen
  },
  {
    title: t('FD13'),
    image: Images.password,
    Screen: Screen.ChangePasswordSettingScreen
  },
  {
    title: t('FD163'),
    image: Images.privacy,
    Screen: Screen.SecuritySettingScreen
  }
]

const SettingScreen = () => {
  const navigation: any = useNavigation()
  const onPressItem = (item: any) => {
    navigation.navigate(item?.Screen)
  }

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity onPress={() => onPressItem(item)} style={styles.btnContainer}>
        <View style={CommonStyles.row}>
          <Image resizeMode={'contain'} source={item?.image} style={styles.imageFirstView} />
          <Text style={styles.titleText}>{item?.title}</Text>
        </View>
        <Image source={Images.right_arrow} resizeMode={'contain'} style={styles.imageLastView} />
      </TouchableOpacity>
    )
  }

  const renderBottomView = () => {
    return (
      <View style={styles.bottomView}>
        <AppButtonWithIcon
          containerStyle={styles.containerStyle}
          imageStyle={styles.imageStyle}
          image={Images.logOut}
          title={t('FD164')}
        />
        <Text style={styles.versionText}>{'Version 1.0'}</Text>
      </View>
    )
  }
  return (
    <AppContainer backgroundColor={Color.white} translucent>
      <SettingHeader isLogo title={t('FD157')} />
      <View style={styles.devider}>
        {_.map(listData, (i) => {
          return renderItem(i)
        })}
      </View>
      {renderBottomView()}
    </AppContainer>
  )
}

export default SettingScreen
