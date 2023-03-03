import React, {useState} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {t} from 'i18next'
import _ from 'lodash'
import Switch from 'toggle-switch-react-native'

import AppContainer from '../../../../Components/AppContainer'
import LanguagePicker from '../../../../Components/Modals/LanguagePicker'
import SettingHeader from '../../../../Components/SettingHeader'
import {Color, Images} from '../../../../Helpers'
import {scale} from '../../../../Helpers/Responsive'
import {styles} from './DateFilterStyle'

const radioButtonsData = [t('FD148'), t('FD149'), t('FD147')]
const DateFilterScreen = () => {
  const [distance, setDistance] = useState([0])
  const [betWeen1, setBetWeen1] = useState([0, 100])
  const [language, setLaunuage] = useState('')

  const [isMySearchRadius, setISMySearchRadiud] = useState(false)
  const [isYoungerOlder, setISYoungerOlder] = useState(false)
  const [isLangPicker, setISlangPicker] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const onPressRadio = (index: number) => {
    setActiveIndex(index)
  }

  const onPressLanguage = () => {
    setISlangPicker(true)
  }

  const renderDistanceView = () => {
    return (
      <View style={styles.distanceContainer}>
        <Text style={styles.distanceText}>
          {t('FD206')}
          {` ${distance[0]} km`} {t('FD207')}
        </Text>
        <MultiSlider
          markerStyle={styles.markerStyle}
          values={distance}
          step={1}
          min={0}
          max={101}
          onValuesChange={setDistance}
          trackStyle={styles.trackStyle}
          selectedStyle={styles.selectedStyle}
          sliderLength={scale(280)}
          containerStyle={styles.sliderStyle}
        />
        <View style={styles.distanceRowView}>
          <Text style={styles.distanceHintText}>{t('FD208')}</Text>
          <Switch
            isOn={isMySearchRadius}
            onToggle={setISMySearchRadiud}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>
      </View>
    )
  }

  const renderRadioView = () => {
    return (
      <View style={styles.radioViewContainer}>
        {_.map(radioButtonsData, (i, index) => {
          const selected = activeIndex === index
          return (
            <TouchableOpacity onPress={() => onPressRadio(index)} style={styles.mainContainer}>
              <LinearGradient
                style={styles.linearContainer}
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={
                  selected
                    ? [Color.pink_shade1, Color.red_shade1]
                    : [Color.transparent, Color.transparent]
                }
              >
                <Text style={[styles.btntext, !selected && styles.notSelectedbtntext]}>{i}</Text>
              </LinearGradient>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const renderAgeView = () => {
    return (
      <View style={styles.distanceContainer}>
        <Text style={styles.distanceText}>
          {t('FD210')}
          {` ${betWeen1[0]} ${t('FD211')}`} {betWeen1[1]}
        </Text>
        <MultiSlider
          markerStyle={styles.largemarkerStyle}
          values={betWeen1}
          step={1}
          min={0}
          max={100}
          onValuesChange={setBetWeen1}
          trackStyle={styles.trackStyle}
          selectedStyle={styles.selectedStyle}
          sliderLength={scale(280)}
          containerStyle={styles.sliderStyle}
        />
        <View style={styles.distanceRowView}>
          <Text style={styles.distanceHintText}>{t('FD212')}</Text>
          <Switch
            isOn={isYoungerOlder}
            onToggle={setISYoungerOlder}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>
      </View>
    )
  }

  const renderLanguageView = () => {
    return (
      <TouchableOpacity
        onPress={onPressLanguage}
        style={[styles.distanceContainer, styles.rowContainer]}
      >
        <Text style={styles.distanceText}>{language || t('FD214')}</Text>
        <Image source={Images.down_arrow} style={styles.downImage} resizeMode={'contain'} />
      </TouchableOpacity>
    )
  }

  const renderAndvancedView = () => {
    return (
      <TouchableOpacity disabled style={[styles.distanceContainer, styles.rowContainer]}>
        <Text style={styles.distanceText}>{t('FD216')}</Text>
        <Image source={Images.down_arrow} style={styles.downImage} resizeMode={'contain'} />
      </TouchableOpacity>
    )
  }

  return (
    <AppContainer>
      <SettingHeader isCloseIcon title={t('FD205')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.mainText}>{t('FD217')}</Text>
        {renderDistanceView()}
        <Text style={styles.mainText}>{t('FD145')}</Text>
        {renderRadioView()}
        <Text style={styles.mainText}>{t('FD209')}</Text>
        {renderAgeView()}
        <Text style={styles.mainText}>{t('FD213')}</Text>
        {renderLanguageView()}
        <Text style={styles.mainText}>{t('FD215')}</Text>
        {renderAndvancedView()}
      </ScrollView>
      {isLangPicker && (
        <LanguagePicker onPickLanguage={setLaunuage} onClose={() => setISlangPicker(false)} />
      )}
    </AppContainer>
  )
}

export default DateFilterScreen
