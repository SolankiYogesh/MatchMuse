import React, {useMemo, useState} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import {t} from 'i18next'

import AppButton from '../../../../../Components/AppButton'
import {CommonStyles, Images, Permission, Utility} from '../../../../../Helpers'
import {styles} from '../CelebrityProfileBadgeStyle'

const StikePoseContainer = ({onPressFinish = () => {}}) => {
  const [image, setImage] = useState<any>('')

  const onPressContactUs = () => {
    Utility.showToast('Coming soon...')
  }

  const onPressPicker = async () => {
    const isCamera = await Permission.getCameraPermission()

    const isStorage = await Permission.getStoragePermission()

    if (isCamera && isStorage) {
      ImageCropPicker.openCamera({
        cropping: true,
        includeBase64: true,
        mediaType: 'photo',
        minFiles: 1,
        maxFiles: 1,
        multiple: false
      })
        .then((media) => {
          if (media) {
            setImage(media?.path)
          }
        })
        .catch(() => {})
    }
  }

  const renderImageView = useMemo(() => {
    return (
      <View style={styles.rowView}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }}
          style={styles.innerImageStyle}
          resizeMode={'cover'}
        />
        <TouchableOpacity
          style={[styles.clickBoxView, !!image && styles.borderNull]}
          onPress={onPressPicker}
        >
          {image ? (
            <Image
              source={{
                uri: image
              }}
              style={styles.docImage}
              resizeMode={'cover'}
            />
          ) : (
            <View style={styles.shadowVIew}>
              <Image source={Images.plus} style={styles.plusImage} resizeMode={'contain'} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    )
  }, [])

  const rendertextContainer = useMemo(() => {
    return (
      <>
        <Text style={styles.verifyText}>{t('FD468')}</Text>

        <Text style={styles.descText}>{t('FD462')}</Text>
        <AppButton
          onPress={() => {
            if (!image) {
              Utility.showToast(t('FD470'))
            } else {
              Utility.showToast(t('FD469'))
              onPressFinish()
            }
          }}
          gradientStyleContainer={styles.gradientStyleContainer}
          title={t('FD467')}
        />

        <Text style={[styles.descText, styles.bottomText]}>
          {t('FD463')}{' '}
          <Text onPress={onPressContactUs} style={styles.contactText}>
            {t('FD464')}
          </Text>
        </Text>
      </>
    )
  }, [])

  return (
    <View style={CommonStyles.flex}>
      {renderImageView}
      {rendertextContainer}
    </View>
  )
}

export default StikePoseContainer
