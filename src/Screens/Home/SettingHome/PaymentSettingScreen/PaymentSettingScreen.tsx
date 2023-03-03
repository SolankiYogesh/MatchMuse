import React, {useState} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Color, Images, Screen} from '../../../../Helpers'
import PaymentSwiperModal from './Components/PaymentSwiperModal'
import {styles} from './PaymentSettingStyle'

const PaymentSettingScreen = () => {
  const [isPaymentModal, setISPaymentModal] = useState(false)
  const navigation: any = useNavigation()
  const renderTopView = () => {
    return (
      <View style={styles.topContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.appNametext}>{t('FD1')}</Text>
          <Text style={styles.subText}>
            {'Fyerdates Pro 12.99/month Renews on Apr 21, 2021 subscriber since Mar 21, 2020'}
          </Text>
        </View>
        <LinearGradient
          style={styles.gradientContainer}
          colors={[Color.yellow_shade1, Color.yellow_shade2, Color.yellow_shade3]}
        >
          <Image
            resizeMode={'contain'}
            source={Images.fyerdates_logo}
            style={styles.itemGradLogo}
          />
        </LinearGradient>
      </View>
    )
  }

  const renderSeperator = () => {
    return <View style={styles.seperator} />
  }

  const renderPlanView = () => {
    return (
      <View style={styles.topContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.appNametext}>{t('FD168')}</Text>
          <Text style={[styles.subText, styles.lasrgeText]}>{t('FD172')}</Text>
          <TouchableOpacity onPress={() => setISPaymentModal(true)}>
            <Text style={[styles.subText, styles.primaryText]}>{t('FD169')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderBottomText = () => {
    return (
      <Text style={styles.bottomText}>
        {t('FD170')}
        <Text
          onPress={() => navigation.navigate(Screen.PrivacySettingScreen)}
          style={styles.primaryText}
        >
          {t('FD171')}
        </Text>
      </Text>
    )
  }

  return (
    <AppContainer>
      <SettingHeader isLogo title={t('FD159')} />
      {renderTopView()}
      {renderSeperator()}
      {renderPlanView()}
      {renderSeperator()}
      {renderBottomText()}
      {isPaymentModal && (
        <PaymentSwiperModal isVisible={isPaymentModal} onClose={() => setISPaymentModal(false)} />
      )}
    </AppContainer>
  )
}

export default PaymentSettingScreen
