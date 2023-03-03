import React, {useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'
import Switch from 'toggle-switch-react-native'

import AppButtonWithIcon from '../../../../Components/AppButtonWithIcon'
import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Color, Images} from '../../../../Helpers'
import {styles} from './ProfileSettingStyle'

const ProfileSettingScreen = () => {
  const [isEnable, setISEnable] = useState(true)
  const [isHF, setISHF] = useState(false)
  const [isPC, setISPC] = useState(false)
  const [isHL, setISHL] = useState(false)
  const [isLPCU, setISLPCU] = useState(false)
  const [isGFM, setISGFM] = useState(false)
  const [isCM, setISCM] = useState(false)

  const renderTopBoxView = () => {
    return (
      <View style={styles.boxView}>
        <View style={styles.rowContainer}>
          <Text style={styles.hintText}>{t('FD48')}</Text>
          <TouchableOpacity onPress={() => setISEnable(!isEnable)}>
            <Image
              source={isEnable ? Images.up_arrow : Images.down_arrow}
              resizeMode={'contain'}
              style={styles.imageBtn}
            />
          </TouchableOpacity>
        </View>
        {isEnable && (
          <View style={styles.expendView}>
            <View style={styles.inputCOntainer}>
              <Image source={Images.in_love} style={styles.inLoveImage} resizeMode={'contain'} />
              <TextInput style={styles.input} placeholder={String(t('FD179'))} />
            </View>
            <AppButtonWithIcon
              imageStyle={styles.smallImageContainer}
              style={styles.btnToggle}
              image={Images.right_arrow}
              onPress={() => {}}
              containerStyle={styles.toogleCOntainer}
            />
          </View>
        )}
      </View>
    )
  }

  const renderSwitchView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD173')}</Text>
          <Switch isOn={isHF} onToggle={setISHF} onColor={Color.Primary} offColor={Color.black} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD174')}</Text>
          <Switch isOn={isPC} onToggle={setISPC} onColor={Color.Primary} offColor={Color.black} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD175')}</Text>
          <Switch isOn={isHL} onToggle={setISHL} onColor={Color.Primary} offColor={Color.black} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD176')}</Text>
          <Switch
            isOn={isLPCU}
            onToggle={setISLPCU}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD177')}</Text>
          <Switch isOn={isGFM} onToggle={setISGFM} onColor={Color.Primary} offColor={Color.black} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD178')}</Text>
          <Switch isOn={isCM} onToggle={setISCM} onColor={Color.Primary} offColor={Color.black} />
        </View>
      </View>
    )
  }

  return (
    <AppContainer>
      <SettingHeader isLogo title={t('FD160')} />
      {renderTopBoxView()}
      {renderSwitchView()}
    </AppContainer>
  )
}

export default ProfileSettingScreen
