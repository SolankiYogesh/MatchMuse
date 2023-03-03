import React, {useMemo} from 'react'
import {Image, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'

import AppButton from '../../../../../Components/AppButton'
import {Color, CommonStyles, Images, Utility} from '../../../../../Helpers'
import {styles} from '../CelebrityProfileBadgeStyle'

const VerifySelfContainer = ({onPressVerify, onPressFinish}) => {
  const blueShade = useMemo(() => [Color.top_blue, Color.bottom_blue], [])

  const onPressContactUs = () => {
    Utility.showToast('Coming soon...')
  }

  const renderImageView = useMemo(() => {
    return (
      <View style={styles.imageProfileView}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }}
          style={styles.imageStyle}
          resizeMode={'cover'}
        />
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.8, y: 1}}
          locations={[0.1865, 0.8077]}
          colors={blueShade}
          angle={90}
          useAngle
          angleCenter={{x: 0, y: 0.5}}
          style={styles.imageBack}
        >
          <Image
            resizeMode={'contain'}
            style={styles.startImageStyle}
            source={Images.star_normal}
          />
        </LinearGradient>
      </View>
    )
  }, [])

  const rendertextContainer = useMemo(() => {
    return (
      <>
        <Text style={styles.verifyText}>{t('FD460')}</Text>
        <Text style={styles.descText}>{t('FD461')}</Text>
        <Text style={styles.descText}>{t('FD462')}</Text>
        <AppButton
          onPress={onPressVerify}
          gradientStyleContainer={styles.gradientStyleContainer}
          title={t('FD460')}
        />
        <Text onPress={onPressFinish} style={styles.btnText}>
          {t('FD465')}
        </Text>
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

export default VerifySelfContainer
