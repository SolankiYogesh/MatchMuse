import React from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Images} from '../../../../Helpers'
import {styles} from './NotificationFilterStyle'

const NotificationFilterScreen = () => {
  const renderTopContainer = () => {
    return <Text style={styles.topText}>{t('FD218')}</Text>
  }

  const renderMessageNotification = () => {
    return (
      <>
        <TouchableOpacity style={[styles.distanceContainer, styles.rowContainer]}>
          <Text style={styles.distanceText}>{t('FD220')}</Text>
          <Image source={Images.rightArrow} style={styles.downImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <Text style={styles.hintText}>{t('FD221')}</Text>
      </>
    )
  }

  const renderMatchNotification = () => {
    return (
      <>
        <TouchableOpacity style={[styles.distanceContainer, styles.rowContainer]}>
          <Text style={styles.distanceText}>{t('FD223')}</Text>
          <Image source={Images.rightArrow} style={styles.downImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.distanceContainer, styles.rowContainer]}>
          <Text style={styles.distanceText}>{t('FD224')}</Text>
          <Image source={Images.rightArrow} style={styles.downImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.distanceContainer, styles.rowContainer]}>
          <Text style={styles.distanceText}>{t('FD225')}</Text>
          <Image source={Images.rightArrow} style={styles.downImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <Text style={styles.hintText}>{t('FD226')}</Text>
      </>
    )
  }

  const renderOtherView = () => {
    return (
      <>
        <TouchableOpacity style={[styles.distanceContainer, styles.rowContainer]}>
          <Text style={styles.distanceText}>{t('FD228')}</Text>
          <Image source={Images.rightArrow} style={styles.downImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.distanceContainer, styles.rowContainer]}>
          <Text style={styles.distanceText}>{t('FD229')}</Text>
          <Image source={Images.rightArrow} style={styles.downImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.distanceContainer, styles.rowContainer]}>
          <Text style={styles.distanceText}>{t('FD230')}</Text>
          <Image source={Images.rightArrow} style={styles.downImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <Text style={styles.hintText}>{t('FD231')}</Text>
      </>
    )
  }

  return (
    <AppContainer>
      <SettingHeader title={t('FD204')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          {renderTopContainer()}
          <Text style={styles.mainText}>{t('FD219')}</Text>
          {renderMessageNotification()}
          <Text style={styles.mainText}>{t('FD222')}</Text>
          {renderMatchNotification()}
          <Text style={styles.mainText}>{t('FD227')}</Text>
          {renderOtherView()}
        </View>
      </ScrollView>
    </AppContainer>
  )
}

export default NotificationFilterScreen
