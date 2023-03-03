import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ImageCropPicker, {Image as ImageProps} from 'react-native-image-crop-picker'
import ReactNativeModal from 'react-native-modal'

import {Color, Fonts, Images, Permission} from '../Helpers'
import {moderateScale, scale, verticalScale} from '../Helpers/Responsive'

interface MediaPickerProps {
  onClose?: () => void
  isVisible?: boolean
  onPickImage?: (image: ImageProps) => void
  isVideo?: boolean
}

const MediaPicker = (props: MediaPickerProps) => {
  const {onClose = () => {}, isVisible = false, onPickImage = () => {}, isVideo = false} = props

  const onPressCamera = async () => {
    const isCamera = await Permission.getCameraPermission()

    const isStorage = await Permission.getStoragePermission()

    if (isCamera && isStorage) {
      ImageCropPicker.openCamera({
        cropping: true,
        includeBase64: true,
        mediaType: isVideo ? 'video' : 'photo',
        minFiles: 1,
        maxFiles: 1,
        multiple: false
      })
        .then((media) => {
          if (media) {
            if (onPickImage) onPickImage(media)
          }
        })
        .catch(() => {})
    }
  }
  const onPressGallery = async () => {
    const isStorage = await Permission.getStoragePermission()

    if (isStorage) {
      ImageCropPicker.openPicker({
        cropping: true,
        includeBase64: true,
        mediaType: isVideo ? 'video' : 'photo',
        minFiles: 1,
        maxFiles: 1,
        multiple: false
      })
        .then((media) => {
          if (media) {
            if (onPickImage) onPickImage(media)
          }
        })
        .catch((error) => {})
    }
  }

  return (
    <ReactNativeModal
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      isVisible={isVisible}
      style={styles.modalStyle}
    >
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>{'Choose'}</Text>
        <View style={styles.innerContianer}>
          <TouchableOpacity style={styles.itemContainer} onPress={onPressCamera}>
            <Image source={Images.camera} resizeMode={'contain'} style={styles.icon} />
            <Text style={styles.icontetx}>{'Camera'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={onPressGallery}>
            <Image resizeMode={'contain'} source={Images.gallery} style={styles.icon} />
            <Text style={styles.icontetx}>{'Gallery'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnContainer} onPress={onClose}>
          <Text style={styles.btnText}>{'CANCEL'}</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  )
}

export default MediaPicker

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    padding: scale(20),
    backgroundColor: Color.white,
    width: '90%'
  },
  innerContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: verticalScale(15)
  },
  headerText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10)
  },
  icon: {
    height: verticalScale(60),
    width: verticalScale(60),
    tintColor: Color.textGrey,
    marginBottom: verticalScale(15)
  },
  icontetx: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  btnText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.Primary
  },
  btnContainer: {
    alignSelf: 'flex-end'
  }
})
