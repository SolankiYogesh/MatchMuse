import React, {useState} from 'react'
import {Text, View} from 'react-native'
import {t} from 'i18next'
import Switch from 'toggle-switch-react-native'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Color} from '../../../../Helpers'
import {styles} from './SecuritySettingStyle'

const SecuritySettingScreen = () => {
  const [isPublicProfile, setISPublicProfile] = useState(false)
  const [isFriendsList, setISFriendsList] = useState(false)
  const [isEmailAddress, setISEmailAddress] = useState(false)
  const [isRelationshipInterests, setISRelationshipInterests] = useState(false)

  const renderSwitchView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.rowTextContainer}>
            <Text style={styles.itemText}>
              {t('FD196')}
              <Text style={styles.reuiredText}>{` (${t('FD203')})`}</Text>
            </Text>
            <Text style={styles.middleText}>{t('FD202')}</Text>
            <Text style={styles.bottomText}>{t('FD201')}</Text>
          </View>

          <Switch
            isOn={isPublicProfile}
            onToggle={setISPublicProfile}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.rowTextContainer}>
            <Text style={styles.itemText}>{t('FD197')}</Text>
            <Text style={styles.middleText}>{'oliwia kransny, Astrid hansen and 2 others'}</Text>
            <Text style={styles.bottomText}>{t('FD201')}</Text>
          </View>
          <Switch
            isOn={isFriendsList}
            onToggle={setISFriendsList}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.rowTextContainer}>
            <Text style={styles.itemText}>{t('FD198')}</Text>
            <Text style={styles.middleText}>{'admin1234@gmail.com'}</Text>
            <Text style={styles.bottomText}>{t('FD201')}</Text>
          </View>

          <Switch
            isOn={isEmailAddress}
            onToggle={setISEmailAddress}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.rowTextContainer}>
            <Text style={styles.itemText}>{t('FD199')}</Text>
            <Text style={styles.middleText}>{t('FD200')}</Text>
            <Text style={styles.bottomText}>{t('FD201')}</Text>
          </View>

          <Switch
            isOn={isRelationshipInterests}
            onToggle={setISRelationshipInterests}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>
      </View>
    )
  }

  return (
    <AppContainer>
      <SettingHeader isLogo title={t('FD163')} />
      {renderSwitchView()}
    </AppContainer>
  )
}

export default SecuritySettingScreen
