import React, {useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppButtonWithIcon from '../../../../Components/AppButtonWithIcon'
import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Images, Utility} from '../../../../Helpers'
import {styles} from './ChangePasswordSettingStyle'

const ChangePasswordSettingScreen = () => {
  const [current, setCurrent] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const navigation = useNavigation()

  const onPressSubmit = () => {
    if (!_.trim(current)) {
      Utility.showToast(t('FD471'))
      return
    }
    if (!_.trim(newPass)) {
      Utility.showToast(t('FD472'))
      return
    }
    if (!_.trim(confirmPass)) {
      Utility.showToast(t('FD19'))
      return
    }
    if (newPass !== confirmPass) {
      Utility.showToast(t('FD22'))
      return
    }
    Utility.showToast('Password changed')
    navigation.goBack()
  }

  const renderTextFiels = () => {
    return (
      <View style={styles.boxView}>
        <View style={styles.rowContainer}>
          <Text style={styles.hintText}>{t('FD181')}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Images.down_arrow} resizeMode={'contain'} style={styles.imageBtn} />
          </TouchableOpacity>
        </View>

        <View style={styles.expendView}>
          <View style={styles.inputCOntainer}>
            <Image
              source={Images.password_lock}
              style={styles.inLoveImage}
              resizeMode={'contain'}
            />
            <TextInput
              onChangeText={setCurrent}
              value={current}
              secureTextEntry
              style={styles.input}
              placeholder={String(t('FD193'))}
            />
          </View>
          <View style={styles.devider} />
          <View style={styles.inputCOntainer}>
            <Image
              source={Images.password_lock}
              style={styles.inLoveImage}
              resizeMode={'contain'}
            />
            <TextInput
              onChangeText={setNewPass}
              value={newPass}
              style={styles.input}
              placeholder={String(t('FD194'))}
            />
          </View>

          <View style={styles.inputCOntainer}>
            <Image
              source={Images.password_lock}
              style={styles.inLoveImage}
              resizeMode={'contain'}
            />
            <TextInput
              onChangeText={setConfirmPass}
              value={confirmPass}
              style={styles.input}
              placeholder={String(t('FD195'))}
            />
          </View>
          <AppButtonWithIcon
            imageStyle={styles.smallImageContainer}
            style={styles.btnToggle}
            image={Images.right_arrow}
            onPress={onPressSubmit}
            containerStyle={styles.toogleCOntainer}
          />
        </View>
      </View>
    )
  }

  return (
    <AppContainer>
      <SettingHeader isLogo title={t('FD13')} />

      {renderTextFiels()}
    </AppContainer>
  )
}

export default ChangePasswordSettingScreen
