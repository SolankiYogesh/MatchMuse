import React, {useState} from 'react'
import {Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../Components/Animations/AnimatedImage'
import AppButton from '../../../../Components/AppButton'
import AppScrollView from '../../../../Components/AppScrollView'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {styles} from './GiveWayDetailsStyle'

const GiveWayDetailsSrceen = () => {
  const route: any = useRoute().params
  const mainItem = route?.item
  const [liked, setLiked] = useState(false)
  const navigation = useNavigation()

  const renderImageView = () => {
    return (
      <View>
        <Image
          source={{
            uri: mainItem?.image
          }}
          resizeMode={'cover'}
          borderBottomLeftRadius={moderateScale(25)}
          borderBottomRightRadius={moderateScale(25)}
          style={styles.mainImageView}
        />

        <TouchableOpacity style={styles.imageBack} onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        <AnimatedImage
          onPress={() => setLiked(!liked)}
          containerStyle={styles.animatedImage}
          style={[styles.bottomImages, !liked && styles.tintColorBlack]}
          source={liked ? Images.heart_fill : Images.heart}
        />
      </View>
    )
  }

  const renderLikeView = () => {
    return (
      <View style={styles.likeView}>
        <View style={CommonStyles.row}>
          <AnimatedImage
            disabled
            style={[styles.bottomImages, !liked && styles.tintColorBlack]}
            source={Images.heart}
          />
          <Text style={styles.likeCount}>{80}</Text>
        </View>
        <Text style={styles.voteText}>{'31.03.2022'}</Text>
      </View>
    )
  }

  const renderTextContainer = () => {
    return (
      <View>
        <Text style={styles.topText}>{'Gift of Mobile'}</Text>
      </View>
    )
  }

  const renderPollView = () => {
    return (
      <View>
        <Text style={styles.labelText}>{t('FD291')}</Text>
        <Text style={styles.bodyText}>{'Footwear'}</Text>
        <Text style={styles.labelText}>{t('FD292')}</Text>
        <Text style={styles.bodyText}>
          {
            'gift or a present is an item given to someone without the expectation of payment or anything in return. An item is not a gift if that item is already owned by the one to whom it is given. Although gift-giving might involve an expectation of reciprocity, a gift is meant to be free. In many countries, the act of mutually exchanging money, goods, etc.'
          }
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={CommonStyles.flex}>
      <StatusBar backgroundColor={Color.white} />
      <AppScrollView>
        {renderImageView()}
        <View style={styles.innerContainer}>
          {renderLikeView()}
          {renderTextContainer()}
          {renderPollView()}
          <AppButton gradientStyleContainer={styles.gradientStyleContainer} title={t('FD293')} />
        </View>
      </AppScrollView>
    </SafeAreaView>
  )
}

export default GiveWayDetailsSrceen
