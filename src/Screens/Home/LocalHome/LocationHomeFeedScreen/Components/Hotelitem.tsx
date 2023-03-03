import React, {useCallback, useMemo} from 'react'
import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import StarRating from '../../../../../Components/StarRating'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import ImageArrowSlider from './ImageArrowSlider'

const Hotelitem = ({item}: any) => {
  const navigation: any = useNavigation()

  const onPressItem = () => {
    navigation.navigate(Screen.LocalDetailsScreen)
  }

  const renderImageWithText = useCallback((image: ImageSourcePropType, title: string) => {
    return (
      <View style={CommonStyles.row}>
        <Image style={styles.iconImage} resizeMode={'contain'} source={image} />
        <Text style={styles.featureText}>{title}</Text>
      </View>
    )
  }, [])

  const renderDealView = useMemo(() => {
    return (
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={styles.dealContainer}
      >
        <Text style={styles.dealText}>{t('FD368')}</Text>
      </LinearGradient>
    )
  }, [])

  const renderPriceContainer = useMemo(() => {
    return (
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {item?.price}
          {' €'}
        </Text>
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.8, y: 1}}
          locations={[0.1865, 0.8077]}
          colors={[Color.pink_shade1, Color.red_shade1]}
          style={styles.priceGradientContainer}
        >
          <Text style={styles.innerText}>{'ZUM ANGEBOT'}</Text>
        </LinearGradient>
      </View>
    )
  }, [item])

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPressItem}>
      <ImageArrowSlider />
      <View style={styles.detailsContainer}>
        {item?.isDeal && renderDealView}
        {renderPriceContainer}
        <Text style={styles.titleText}>{item?.title}</Text>
        {renderImageWithText(Images.wifi, 'Free WIFI')}
        {renderImageWithText(Images.wifi, 'Gamer Zone')}
        {renderImageWithText(Images.pool, 'Pool')}
        {renderImageWithText(Images.safety, 'Safety')}
        {renderImageWithText(Images.offer, 'Offer')}
        <View style={styles.starRatingContainer}>
          <StarRating rating={item?.rating} />
          <Text style={styles.ratingText}>{item?.rating?.toFixed(1)}</Text>
        </View>
        <Text style={styles.viewsText}>
          {`${item?.views} `}
          {t('FD322')}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Hotelitem

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    marginVertical: verticalScale(10),
    ...CommonStyles.row,
    overflow: 'hidden'
  },
  iconImage: {
    width: verticalScale(14),
    height: verticalScale(14)
  },
  detailsContainer: {
    backgroundColor: Color.white,
    flex: 1,
    padding: scale(5)
  },
  featureText: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    marginLeft: scale(5)
  },
  titleText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  viewsText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginTop: verticalScale(5)
  },
  starRatingContainer: {
    ...CommonStyles.row,
    marginTop: verticalScale(10)
  },
  ratingText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginLeft: scale(5)
  },
  dealContainer: {
    padding: scale(5),
    ...CommonStyles.centerItem,
    position: 'absolute',
    zIndex: 1000,
    paddingHorizontal: scale(20),
    right: 0,
    borderBottomLeftRadius: moderateScale(15)
  },
  dealText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.white
  },
  priceContainer: {
    right: scale(10),
    bottom: verticalScale(10),
    position: 'absolute',
    zIndex: 1000
  },
  priceText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.Primary,
    textAlign: 'center'
  },
  priceGradientContainer: {
    padding: scale(5),
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(100)
  },
  innerText: {
    fontSize: moderateScale(9),
    fontFamily: Fonts.medium,
    color: Color.white
  }
})
