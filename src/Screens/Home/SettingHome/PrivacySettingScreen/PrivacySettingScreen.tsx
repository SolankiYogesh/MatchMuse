import React from 'react'
import {Text} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {styles} from './PrivacySettingStyle'

const PrivacySettingScreen = () => {
  return (
    <AppContainer>
      <SettingHeader isLogo title={t('FD190')} />
      <Text style={styles.mainBigText}>{t('FD190')}</Text>
      <Text style={styles.mainSmallText}>
        {
          'Riju built the app as a Free app. This SERVICE is provided by Riju at no cost and is intended for use as is.This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible unless otherwise defined in this Privacy Policy.'
        }
      </Text>
      <Text style={styles.mainBigText}>{t('FD191')}</Text>
      <Text style={styles.mainSmallText}>
        {
          'Riju built the app as a Free app. This SERVICE is provided by Riju at no cost and is intended for use as is.This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible unless otherwise defined in this Privacy Policy.'
        }
      </Text>
    </AppContainer>
  )
}

export default PrivacySettingScreen
