import {Platform} from 'react-native'
import {PERMISSIONS, request} from 'react-native-permissions'

const getCameraPermission = () => {
  return new Promise((resolve) => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.CAMERA,
        ios: PERMISSIONS.IOS.CAMERA
      })
    )
      .then((response) => {
        if (response === 'granted') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(() => resolve(false))
  })
}

const getMicPermission = () => {
  return new Promise((resolve) => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        ios: PERMISSIONS.IOS.MICROPHONE
      })
    )
      .then((response) => {
        if (response === 'granted') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(() => resolve(false))
  })
}

function writeStoragePermission() {
  const {Release = 13} = Platform.constants

  return parseInt(Release) >= 13
    ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
}

const getStoragePermission = () => {
  return new Promise((resolve) => {
    if (Platform.OS === 'ios') {
      resolve(true)
      return
    }
    request(writeStoragePermission())
      .then((response) => {
        if (response === 'granted') {
          resolve(true)
        } else if (response === 'limited') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch((e) => {
        return resolve(false)
      })
  })
}

const getLocationPermission = () => {
  return new Promise((resolve) => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      })
    )
      .then((response) => {
        if (response === 'granted') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(() => resolve(false))
  })
}

const Permission = {
  getCameraPermission,
  getStoragePermission,
  getMicPermission,
  getLocationPermission
}

export default Permission
