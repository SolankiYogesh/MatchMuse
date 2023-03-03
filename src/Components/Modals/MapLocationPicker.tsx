import React, {useState} from 'react'
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler'
import Modal from 'react-native-modal'
import {t} from 'i18next'

import {Color, Fonts, Images, Permission} from '../../Helpers'
import {moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppButton from '../AppButton'
import AppContainer from '../AppContainer'
import MapPickerView from './MapPickerView'

interface MapLocationPickerProps {
  onClose?: () => void
  onPickLocation?: (location: any) => void
}

const MapLocationPicker = (props: MapLocationPickerProps) => {
  const {onClose, onPickLocation} = props
  const [isMap, setISMap] = useState(false)

  const onChooseSelect = (text: string) => {
    if (onPickLocation) onPickLocation(text)
    if (onClose) onClose()
  }

  return (
    <Modal
      coverScreen
      style={styles.modalStyle}
      isVisible
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackButtonPress={onClose}
    >
      <AppContainer isGradient>
        <View style={styles.container}>
          <View style={styles.innerView}>
            <AppButton
              gradientStyleContainer={styles.gradientStyleContainer}
              disable
              title={t('FD71')}
            />
            <Image source={Images.location_pin} resizeMode={'contain'} style={styles.locationImg} />
            <Text style={styles.activeLocationText}>{t('FD72')}</Text>
            <Text style={styles.activeYourText}>{t('FD73')}</Text>
            <AppButton
              gradientStyleContainer={styles.gradientStyleContainer}
              title={t('FD74')}
              onPress={() => {
                Permission.getLocationPermission().then(() => {
                  if (Platform.OS === 'android') {
                    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                      fastInterval: 1000,
                      interval: 1000
                    })
                      .then(() => {
                        setISMap(true)
                      })
                      .catch((e) => {
                        setISMap(true)
                      })
                  } else {
                    setISMap(true)
                  }
                })
              }}
            />
            <TouchableOpacity
              onPress={() => {
                onChooseSelect('later')
              }}
            >
              <Text style={styles.rememberLater}>{t('FD75')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AppContainer>
      {isMap && <MapPickerView onClose={() => setISMap(false)} onPickLocation={onChooseSelect} />}
    </Modal>
  )
}

export default MapLocationPicker

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0
  },
  gradientStyleContainer: {
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerView: {
    backgroundColor: Color.white,
    padding: scale(20),
    borderRadius: moderateScale(20),
    width: '90%'
  },
  locationImg: {
    width: verticalScale(150),
    height: verticalScale(150),
    alignSelf: 'center'
  },
  activeLocationText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.black,
    textAlign: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20)
  },
  activeYourText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginBottom: verticalScale(40),
    marginHorizontal: scale(10)
  },
  rememberLater: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(30)
  }
})
