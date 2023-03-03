import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {t} from 'i18next'
import Switch from 'toggle-switch-react-native'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, verticalScale} from '../../../../Helpers/Responsive'

const NotificationSettingScreen = () => {
  const [isMathNoti, setISMatchNoti] = useState(false)
  const [isAGN, setISAGN] = useState(false)

  return (
    <AppContainer>
      <SettingHeader isLogo title={t('FD158')} />
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD166')}</Text>
          <Switch
            isOn={isMathNoti}
            onToggle={setISMatchNoti}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{t('FD167')}</Text>
          <Switch isOn={isAGN} onToggle={setISAGN} onColor={Color.Primary} offColor={Color.black} />
        </View>
      </View>
    </AppContainer>
  )
}

export default NotificationSettingScreen

const styles = StyleSheet.create({
  itemContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
    width: '85%',
    alignSelf: 'center'
  },
  itemText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(18),
    color: Color.black
  },
  container: {
    marginTop: verticalScale(20)
  }
})
