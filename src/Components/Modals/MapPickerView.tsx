import React, {useRef, useState} from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import GeoLocation from 'react-native-geolocation-service'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import LinearGradient from 'react-native-linear-gradient'
import MapView, {Marker} from 'react-native-maps'
import Modal from 'react-native-modal'
import {t} from 'i18next'

import {APPConfig, Color, CommonStyles, Fonts, Images} from '../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppButton from '../AppButton'
import AppContainer from '../AppContainer'

interface MapPickerViewProps {
  onClose?: () => void
  onPickLocation?: (location: string) => void
}

const MapPickerView = (props: MapPickerViewProps) => {
  const {onClose, onPickLocation} = props
  const [cordinates, setCordinates] = useState<any>(null)
  const mapViewRef = useRef<any>()
  const [currentLocation, setCurrentLocation] = useState<any>(null)
  const [isMapLoading, setISMapLoading] = useState(true)

  const getCurrentCordinates = () => {
    GeoLocation.getCurrentPosition((resp) => {
      setCurrentLocation({
        lat: resp?.coords?.latitude,
        lng: resp?.coords?.longitude
      })

      mapViewRef.current.animateToRegion(
        {
          latitude: resp?.coords?.latitude,
          longitude: resp?.coords?.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05
        },
        1000
      )
    })
  }

  const onPressContinue = () => {
    if (onPickLocation) {
      onPickLocation(cordinates?.text || '')
    }
    if (onClose) onClose()
  }

  const getCordinates = (place_id: string) => {
    return new Promise((resolve) => {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${APPConfig.MapsAPI}`
      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => {
          resolve(resp?.result?.geometry?.location)
        })
        .catch(() => {
          resolve(null)
        })
    })
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
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.modalStyle}
        scrollEnabled={false}
      >
        <AppContainer isGradient>
          <View style={styles.container}>
            <View style={styles.searchView}>
              <Image
                source={Images.location_line}
                style={styles.locationPin}
                resizeMode={'contain'}
              />
              <GooglePlacesAutocomplete
                placeholder={'Search'}
                disableScroll
                GooglePlacesDetailsQuery={{
                  type: 'address',
                  language: 'en'
                }}
                onPress={(data) => {
                  getCordinates(data.place_id).then((resp: any) => {
                    setCordinates({
                      text: data?.description,
                      ...resp
                    })

                    if (mapViewRef.current) {
                      mapViewRef.current.animateToRegion(
                        {
                          latitude: resp.lat,
                          longitude: resp.lng,
                          latitudeDelta: 0.04,
                          longitudeDelta: 0.05
                        },
                        1000
                      )
                    }
                  })
                }}
                keyboardShouldPersistTaps={'always'}
                query={{
                  key: APPConfig.MapsAPI,
                  language: 'en'
                }}
              />
            </View>
            <View style={[styles.innerView, isMapLoading && styles.loadingViewStyle]}>
              <MapView
                initialRegion={{
                  latitude: currentLocation?.lat || 0,
                  longitude: currentLocation?.lng || 0,
                  latitudeDelta: 0.04,
                  longitudeDelta: 0.05
                }}
                onMapReady={() => {
                  getCurrentCordinates()
                  setISMapLoading(false)
                }}
                ref={mapViewRef}
                style={styles.mapView}
              >
                <Marker
                  coordinate={{
                    latitude: currentLocation?.lat || 0,
                    longitude: currentLocation?.lng || 0
                  }}
                />
              </MapView>
              {isMapLoading && (
                <View style={styles.loadingView}>
                  <ActivityIndicator size={'large'} color={Color.Primary} />
                </View>
              )}
              <TouchableOpacity
                style={styles.imagelocationPin}
                onPress={() => {
                  mapViewRef.current.animateToRegion(
                    {
                      latitude: currentLocation?.lat,
                      longitude: currentLocation?.lng,
                      latitudeDelta: 0.04,
                      longitudeDelta: 0.05
                    },
                    1000
                  )
                }}
              >
                <Image
                  source={Images.mapSendPin}
                  resizeMode={'contain'}
                  style={styles.imageLocation}
                />
              </TouchableOpacity>
              {cordinates && (
                <View style={styles.bottomSheet}>
                  <LinearGradient
                    colors={[Color.blue_start, Color.thar_shade]}
                    style={styles.gredientStyle}
                    angle={100}
                    useAngle
                    angleCenter={{x: 0.5, y: 1}}
                    end={{
                      x: 1,
                      y: 1
                    }}
                  >
                    <View style={styles.botomDevider} />
                    <Text style={styles.directionText}>{t('FD115')}</Text>
                    <Text style={styles.addressText}>{cordinates?.text}</Text>
                    <AppButton
                      onPress={onPressContinue}
                      btnStyleContainer={styles.btnContainer}
                      title={t('FD50')}
                    />
                  </LinearGradient>
                </View>
              )}
            </View>
          </View>
        </AppContainer>
      </ScrollView>
    </Modal>
  )
}

export default MapPickerView

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  innerView: {
    backgroundColor: Color.PrimaryDark,
    borderRadius: moderateScale(20),
    width: '90%',
    height: heightPx(90),
    overflow: 'hidden'
  },
  mapView: {
    flex: 1
  },
  locationPin: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.blue_start,
    marginTop: verticalScale(30),
    marginHorizontal: scale(15)
  },
  searchView: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    width: '80%',
    alignSelf: 'center',
    marginTop: verticalScale(10),
    top: verticalScale(70)
  },
  imagelocationPin: {
    width: verticalScale(65),
    height: verticalScale(65),
    position: 'absolute',
    backgroundColor: Color.Primary,
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    right: scale(10),
    top: '30%'
  },
  imageLocation: {
    width: '40%',
    height: '40%',
    tintColor: Color.white,
    transform: [
      {
        rotate: '270deg'
      }
    ]
  },
  loadingViewStyle: {
    backgroundColor: Color.backDropColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingView: {
    position: 'absolute',
    zIndex: 1000,
    flex: 1,
    alignSelf: 'center'
  },
  bottomSheet: {
    position: 'absolute',
    backgroundColor: Color.transparent,
    zIndex: 1000,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    overflow: 'hidden'
  },
  gredientStyle: {
    ...CommonStyles.flex,
    padding: scale(15)
  },
  botomDevider: {
    alignSelf: 'center',
    width: scale(100),
    height: verticalScale(4),
    backgroundColor: Color.white,
    borderRadius: moderateScale(20),
    marginVertical: verticalScale(10)
  },
  directionText: {
    textAlign: 'center',
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginVertical: verticalScale(5)
  },
  addressText: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginVertical: verticalScale(15)
  },
  btnContainer: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  }
})
