import React, {useCallback, useMemo, useState} from 'react'
import {Image, ImageSourcePropType, ScrollView, Text, View} from 'react-native'
import * as Progress from 'react-native-progress'
import {useSharedValue} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import {useNavigation, useRoute} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import AppButton from '../../../../../Components/AppButton'
import AppContainer from '../../../../../Components/AppContainer'
import PaginationDot from '../../../../../Components/PaginationDot'
import SettingHeader from '../../../../../Components/SettingHeader'
import StarRating from '../../../../../Components/StarRating'
import {products} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images, Screen} from '../../../../../Helpers'
import {heightPx, scale, W_WIDTH, widthPx} from '../../../../../Helpers/Responsive'
import ColorSizePickerRadiobutton from './Components/ColorSizePickerRadiobutton'
import QuantityChanger from './Components/QuantityChanger'
import {styles} from './ProductDetailsStyle'

const colorData = ['#E677FF', '#03DAC5', '#0066D1', '#9E17FF', '#61FF88', '#032DFF']
const sizeData = ['S', 'M', 'L', 'XL', 'X', 'LX']

const ProductDetailsScreen = () => {
  const route: any = useRoute().params
  const {item} = route
  const [isLike, setISLike] = useState(false)
  const [quantity, setQuntity] = useState(1)
  const progressValue = useSharedValue<number>(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const navigation: any = useNavigation()

  const onPressBack = () => {
    navigation.navigate(Screen.CheckoutScreen)
  }

  const baseOptions = {
    vertical: false,
    width: W_WIDTH,
    height: W_WIDTH * 0.6
  } as const

  const renderItem = useCallback(({item}: any) => {
    return (
      <Image
        source={{
          uri: item?.image
        }}
        style={[CommonStyles.viewFull, styles.imageStyle]}
        resizeMode={'cover'}
      />
    )
  }, [])

  const renderImage = useMemo(() => {
    return (
      <View style={styles.imageView}>
        <Carousel
          style={styles.list}
          {...baseOptions}
          mode={'parallax'}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50
          }}
          onSnapToItem={setActiveIndex}
          onProgressChange={(_, absoluteProgress) => (progressValue.value = absoluteProgress)}
          width={widthPx(100)}
          height={heightPx(40)}
          data={products}
          renderItem={renderItem}
        />
        <View style={styles.likeContainer}>
          <AnimatedImage
            style={styles.heartImage}
            source={isLike ? Images.heart_fill : Images.heart}
            onPress={() => setISLike(!isLike)}
          />
        </View>
        <PaginationDot index={activeIndex} length={products?.length} />
      </View>
    )
  }, [isLike, item?.image, activeIndex])

  const renderTitleContainer = useMemo(() => {
    return (
      <View style={styles.bottomContainer}>
        <Text style={styles.typeText}>{item?.type}</Text>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.priceText}>
          {item?.title}
        </Text>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.reviewText}>
            {item?.reviews} {` ${t('FD336')}`}
          </Text>
          <View style={styles.ratingContainer}>
            <Image source={Images.ratting_star} resizeMode={'contain'} style={styles.starImage} />
            <Text style={[styles.titleText, styles.marginleft]}>{item?.rating?.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    )
  }, [item])

  const renderDevider = useMemo(() => <View style={styles.devider} />, [])

  const renderPirceView = useMemo(() => {
    return (
      <View style={styles.priceContainer}>
        <View style={styles.priceInnnerContainer}>
          <Text style={styles.unitPriceText}>{t('FD341')}</Text>
          <Text style={styles.unitPriceText}>{t('FD342')}</Text>
        </View>
        <View style={styles.priceInnnerContainer}>
          <View style={CommonStyles.row}>
            <Text style={styles.priceText}>
              {'€ '}
              {Number(item?.price) * quantity}
            </Text>
            <Text style={styles.stikePriceText}>{'€ 15,9000'}</Text>
          </View>
          <View>
            <QuantityChanger onChange={setQuntity} />
          </View>
        </View>
      </View>
    )
  }, [item, quantity])

  const renderColorPicker = useMemo(() => {
    return (
      <View style={styles.pickerContainer}>
        <Text style={styles.unitPriceText}>{t('FD343')}</Text>
        <ColorSizePickerRadiobutton data={colorData} />
      </View>
    )
  }, [])

  const renderSizePicker = useMemo(() => {
    return (
      <View style={styles.pickerContainer}>
        <Text style={styles.unitPriceText}>{t('FD344')}</Text>
        <ColorSizePickerRadiobutton data={sizeData} isSize />
      </View>
    )
  }, [])

  const renderBuysNowButton = useCallback((image: ImageSourcePropType, title: string) => {
    return (
      <View>
        {renderDevider}
        <View style={styles.innerSizeButtonContainer}>
          <View style={CommonStyles.row}>
            <Image source={image} style={styles.imageIconStyle} resizeMode={'contain'} />
            <Text style={styles.sizeInnerText}>{title}</Text>
          </View>
          <Image source={Images.rightArrow} style={styles.imageIconStyle} resizeMode={'contain'} />
        </View>
        {renderDevider}
      </View>
    )
  }, [])

  const renderBuyNowButton = useMemo(
    () => (
      <AppButton
        btnTextStyle={styles.btnTextStyle}
        title={t('FD345')}
        gradientStyleContainer={styles.gradientStyleContainer}
        onPress={onPressBack}
      />
    ),
    []
  )

  const renderProductInfo = useMemo(() => {
    return (
      <View>
        <Text style={styles.productInfoText}>{t('FD346')}</Text>
        <Text style={styles.descText}>
          {
            'Content is King for Search engine optimization base on Traffic single for alternative way to achieve your goal, some time you can load some probably can manage'
          }
        </Text>
      </View>
    )
  }, [])

  const renderRatingView = useMemo(() => {
    return (
      <View style={styles.productRatingContainer}>
        <View>
          <Text style={styles.currentRateText}>
            {item?.rating?.toFixed(1)}
            <Text style={styles.maxRateText}>{' /5'}</Text>
          </Text>
          <Text style={styles.reviewBaseText}>{t('FD348')}</Text>
          <StarRating rating={Math.floor(item?.rating)} />
        </View>
        <View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{t('FD349')}</Text>
            <Progress.Bar
              progress={0.3}
              height={5}
              borderWidth={0}
              color={Color.Primary}
              unfilledColor={Color.lightGrey}
              width={scale(65)}
            />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{t('FD350')}</Text>
            <Progress.Bar
              progress={0.3}
              height={5}
              borderWidth={0}
              color={Color.Primary}
              unfilledColor={Color.lightGrey}
              width={scale(65)}
            />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{t('FD352')}</Text>
            <Progress.Bar
              progress={0.3}
              height={5}
              borderWidth={0}
              color={Color.Primary}
              unfilledColor={Color.lightGrey}
              width={scale(65)}
            />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{t('FD352')}</Text>
            <Progress.Bar
              progress={0.3}
              height={5}
              borderWidth={0}
              color={Color.Primary}
              unfilledColor={Color.lightGrey}
              width={scale(65)}
            />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{t('FD353')}</Text>
            <Progress.Bar
              progress={0.3}
              color={Color.Primary}
              height={5}
              borderWidth={0}
              unfilledColor={Color.lightGrey}
              width={scale(65)}
            />
          </View>
        </View>
      </View>
    )
  }, [item])

  return (
    <AppContainer>
      <SettingHeader isTransparent isShadow={false} title={t('FD340')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderImage}
        <View style={styles.container}>
          {renderTitleContainer}
          {renderDevider}
          {renderPirceView}
          {renderDevider}
          {renderColorPicker}
          {renderSizePicker}
          {renderDevider}
          {renderBuysNowButton(Images.cross_arrow, t('FD347'))}
          {renderBuyNowButton}
          {renderProductInfo}
          {renderRatingView}
          {renderBuysNowButton(Images.liveChat, t('FD336'))}
        </View>
      </ScrollView>
    </AppContainer>
  )
}

export default ProductDetailsScreen
