import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import StikePoseContainer from './Components/StikePoseContainer'
import VerifySelfContainer from './Components/VerifySelfContainer'

const CelebrityProfileBadgeScreen = () => {
  const [isVerify, setISVerify] = useState(true)
  const navigation: any = useNavigation()

  const onPressFinish = () => {
    navigation.popToTop()
  }

  const onBackPress = () => {
    if (!isVerify) {
      setISVerify(true)
    } else {
      navigation.goBack()
    }
  }

  return (
    <AppContainer>
      <SettingHeader onBackFunction={onBackPress} title={t('FD466')} />
      {isVerify ? (
        <VerifySelfContainer
          onPressFinish={onPressFinish}
          onPressVerify={() => setISVerify(false)}
        />
      ) : (
        <StikePoseContainer onPressFinish={onPressFinish} />
      )}
    </AppContainer>
  )
}

export default CelebrityProfileBadgeScreen
