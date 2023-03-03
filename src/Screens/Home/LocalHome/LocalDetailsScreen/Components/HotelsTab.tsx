import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import * as Progress from 'react-native-progress'
import {useSharedValue} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import DateTimePicker from '@react-native-community/datetimepicker'
import {t} from 'i18next'
import _ from 'lodash'
import moment from 'moment'

import AppButton from '../../../../../Components/AppButton'
import StarRating from '../../../../../Components/StarRating'
import {FEEDS, products} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {
  heightPx,
  moderateScale,
  scale,
  verticalScale,
  W_WIDTH,
  widthPx
} from '../../../../../Helpers/Responsive'

const features = [
  'Free Parking',
  'Free High Speed Internet (WIFI)',
  'Bar/louge',
  'Non-smoking hotel',
  'Wheelchair parking',
  'Inside Business',
  'Temperature Check-up',
  'Food Orders'
]

const placesData = [
  {
    name: 'Lucent Study',
    address: '150 ft',
    price: Math.floor(Math.random() * 1000),
    place: 'Munsar',
    rating: Math.floor(Math.random() * 6),
    image: products[Math.floor(Math.random() * 5)].image
  },
  {
    name: 'Lucent Study',
    address: '150 ft',
    price: Math.floor(Math.random() * 1000),
    place: 'Munsar',
    rating: Math.floor(Math.random() * 6),
    image: products[Math.floor(Math.random() * 5)].image
  },
  {
    name: 'Lucent Study',
    address: '150 ft',
    price: Math.floor(Math.random() * 1000),
    place: 'Munsar',
    rating: Math.floor(Math.random() * 6),
    image: products[Math.floor(Math.random() * 5)].image
  },
  {
    name: 'Lucent Study',
    address: '150 ft',
    price: Math.floor(Math.random() * 1000),
    place: 'Munsar',
    rating: Math.floor(Math.random() * 6),
    image: products[Math.floor(Math.random() * 5)].image
  },
  {
    name: 'Lucent Study',
    address: '150 ft',
    price: Math.floor(Math.random() * 1000),
    place: 'Munsar',
    rating: Math.floor(Math.random() * 6),
    image: products[Math.floor(Math.random() * 5)].image
  },
  {
    name: 'Lucent Study',
    address: '150 ft',
    price: Math.floor(Math.random() * 1000),
    place: 'Munsar',
    rating: Math.floor(Math.random() * 6),
    image: products[Math.floor(Math.random() * 5)].image
  }
]

const HotelsTab = () => {
  const progressValue = useSharedValue<number>(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const baseOptions = {
    vertical: false,
    width: W_WIDTH,
    height: W_WIDTH * 0.6
  } as const
  const [date, setDate] = useState(Date.now())
  const [isDatePicker, setISDatePicker] = useState(false)
  const [isExpand, setISExpand] = useState(false)
  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    alignToRegion()
  }, [])

  const alignToRegion = useCallback(() => {
    mapRef.current?.animateToRegion({
      latitude: 38.97888,
      longitude: -77.5713,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05
    })
  }, [])

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

        <View style={styles.paginationCOntainer}>
          {[...Array(products.length).keys()].map((_, i) => (
            <View
              key={i?.toString()}
              style={[styles.inActiveDot, i === activeIndex && styles.activeStyle]}
            />
          ))}
        </View>
      </View>
    )
  }, [activeIndex])

  const renderMiddleSheet = useMemo(() => {
    return (
      <View style={styles.middleSheetView}>
        <Text style={styles.titleText}>{'Holiday In Express Dusseldorf'}</Text>
        <View style={styles.rowViewLoation}>
          <Text>{'City North, an IHG Hotel'}</Text>
          <View style={CommonStyles.row}>
            <Image source={Images.ratting_star} style={styles.starImage} resizeMode={'contain'} />
            <Text style={styles.ratingText}>{'4.0'}</Text>
            <Text style={styles.reviewText}>{'(10 Reviews)'}</Text>
          </View>
        </View>
        <View style={styles.calenderContainer}>
          <TouchableOpacity style={styles.calenderCont1} onPress={() => setISDatePicker(true)}>
            <Image source={Images.calender_2} style={styles.starImage} resizeMode={'contain'} />
            <Text style={styles.dateText}>
              {moment().format('MMM DD')}
              {' → '}
              {moment(date).format('MMM DD')}
            </Text>
          </TouchableOpacity>
          <View style={styles.calenderCont2}>
            <View style={CommonStyles.row}>
              <Image source={Images.sleep} style={styles.starImage} resizeMode={'contain'} />
              <Text style={styles.dateText}>{'1'}</Text>
            </View>
            <View style={CommonStyles.row}>
              <Image source={Images.group_2} style={styles.starImage} resizeMode={'contain'} />
              <Text style={styles.dateText}>{'2'}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.smilarText}>{t('FD378')}</Text>
        <TouchableOpacity>
          <Text style={[styles.smilarText, styles.otherHotelsText]}>{t('FD379')}</Text>
        </TouchableOpacity>
      </View>
    )
  }, [date])

  const renderButton = useMemo(() => {
    return <AppButton gradientStyleContainer={styles.gradientStyleContainer} title={t('FD376')} />
  }, [])

  const renderAboutView = useMemo(() => {
    return (
      <View style={styles.aboutCOntainer}>
        <Text style={styles.boldText}>{t('FD372')}</Text>
        <View style={CommonStyles.row}>
          <View style={styles.viewback}>
            <Text style={styles.featureText}>{'Classic'}</Text>
          </View>
          <View style={styles.viewback}>
            <Text style={styles.featureText}>{'Classic'}</Text>
          </View>
        </View>
        <Text style={styles.descText}>
          {
            'Content is King for Search engine optimization base on Traffic single for alternative way to achieve your goal, some time you can load some probably can manage'
          }
        </Text>
        <Text style={styles.mediaumlabel}>{'Amenities'}</Text>
        <View>
          {_.map(isExpand ? features : _.slice(features, 0, 4), (i) => {
            return <Text style={styles.ametiesText}>{i}</Text>
          })}
          {!isExpand && (
            <TouchableOpacity onPress={() => setISExpand(true)}>
              <Text style={styles.viewMoreText}>{t('FD380')}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }, [isExpand])

  const renderDevider = useMemo(() => {
    return <View style={styles.devider} />
  }, [])

  const theAreaView = useMemo(() => {
    return (
      <View style={styles.aboutCOntainer}>
        <Text style={styles.boldText}>{t('FD381')}</Text>
        <Text style={styles.mediaumlabel}>{t('FD382')}</Text>
        <Text style={styles.descText}>
          {'155 Airport Road,Gajera circle,Rotec Corder 78598-5844'}
        </Text>
      </View>
    )
  }, [])

  const renderMapView = useMemo(() => {
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: 38.97888,
            longitude: -77.5713,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05
          }}
          showsUserLocation
          showsMyLocationButton
          ref={mapRef}
          style={styles.mapView}
        >
          <Marker coordinate={{latitude: 38.97888, longitude: -77.5713}}>
            <Image
              source={{
                uri: FEEDS[0].image
              }}
              style={styles.markerImage}
              resizeMode={'cover'}
            />
          </Marker>
        </MapView>
        <TouchableOpacity onPress={alignToRegion} style={styles.currentLocationContainer}>
          <Image
            source={Images.currentLocation}
            style={styles.currentLocationImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    )
  }, [])

  const renderListItem = useCallback(({item}: any) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: item?.image
          }}
          style={styles.listImage}
          resizeMode={'cover'}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{item?.name}</Text>
          <View style={CommonStyles.row}>
            <Text style={styles.addressText}>{item?.address}</Text>
            <View style={styles.dotView} />
            <Text style={styles.addressText}>
              {item?.price}
              {' $'}
            </Text>
            <View style={styles.dotView} />
            <Text style={styles.addressText}>{item?.place}</Text>
          </View>
          <View style={CommonStyles.row}>
            <StarRating rating={item?.rating} />
            <Text style={styles.ratingText}>{item?.rating?.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    )
  }, [])

  const renderListView = useMemo(() => {
    return (
      <FlatList
        renderItem={renderListItem}
        keyExtractor={(item) => item.price.toString()}
        data={placesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listStyle}
      />
    )
  }, [])

  const renderRatingView = useMemo(() => {
    return (
      <View style={styles.productRatingContainer}>
        <View>
          <Text style={styles.currentRateText}>
            {'4.0'}
            <Text style={styles.maxRateText}>{' /5'}</Text>
          </Text>
          <Text style={styles.reviewBaseText}>{t('FD348')}</Text>
          <StarRating rating={4} />
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
  }, [])

  const renderReviewView = useMemo(() => {
    return (
      <View>
        {renderDevider}
        <View style={styles.innerSizeButtonContainer}>
          <View style={CommonStyles.row}>
            <Image source={Images.liveChat} style={styles.imageIconStyle} resizeMode={'contain'} />
            <Text style={styles.sizeInnerText}>{t('FD336')}</Text>
          </View>
          <Image source={Images.rightArrow} style={styles.imageIconStyle} resizeMode={'contain'} />
        </View>
        {renderDevider}
      </View>
    )
  }, [])

  return (
    <View style={CommonStyles.flex}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderImage}
        {renderMiddleSheet}
        {renderButton}
        {renderAboutView}
        {renderDevider}
        {theAreaView}
        {renderMapView}
        {renderListView}
        {renderRatingView}
        {renderReviewView}
      </ScrollView>
      {isDatePicker && (
        <DateTimePicker
          testID={'dateTimePicker'}
          value={new Date(date)}
          mode={'date'}
          is24Hour
          minimumDate={new Date()}
          onChange={(date) => setDate(date?.nativeEvent?.timestamp ?? Date.now())}
        />
      )}
    </View>
  )
}

export default HotelsTab

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: moderateScale(20)
  },
  imageView: {
    width: '100%',
    height: heightPx(40),
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  paginationCOntainer: {
    position: 'absolute',
    right: scale(40),
    bottom: verticalScale(25),
    backgroundColor: Color.white,
    ...CommonStyles.row,
    padding: scale(5),
    borderRadius: moderateScale(10)
  },
  list: {
    marginVertical: verticalScale(10)
  },
  inActiveDot: {
    backgroundColor: Color.lightGrey,
    width: verticalScale(5),
    height: verticalScale(5),
    borderRadius: moderateScale(100),
    marginRight: scale(5)
  },
  activeStyle: {
    backgroundColor: Color.darkGrey
  },
  middleSheetView: {
    width: '100%',
    padding: scale(15),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    top: -verticalScale(15)
  },
  titleText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.black
  },
  rowViewLoation: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  starImage: {
    height: verticalScale(15),
    width: verticalScale(15)
  },
  ratingText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginHorizontal: scale(5)
  },
  reviewText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  calenderContainer: {
    width: '100%',
    ...CommonStyles.row,
    borderWidth: 1,
    borderRadius: moderateScale(15)
  },
  calenderCont1: {
    flex: 1,
    ...CommonStyles.row,
    padding: scale(15)
  },
  calenderCont2: {
    flex: 0.5,
    ...CommonStyles.row,
    justifyContent: 'space-between',
    padding: scale(15),
    borderLeftWidth: 2,
    borderLeftColor: Color.black
  },
  dateText: {
    fontSize: moderateScale(14.5),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(10)
  },
  smilarText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  otherHotelsText: {
    textDecorationLine: 'underline'
  },
  gradientStyleContainer: {
    width: '90%',
    alignSelf: 'center',
    top: -verticalScale(25)
  },
  aboutCOntainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  boldText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(15),
    color: Color.black
  },
  viewback: {
    padding: scale(5),
    backgroundColor: Color.lightGrey,
    borderRadius: moderateScale(20),
    marginHorizontal: scale(10),
    paddingHorizontal: scale(10),
    ...CommonStyles.centerItem,
    marginVertical: verticalScale(10)
  },
  featureText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12),
    color: Color.grey_Shade3
  },
  descText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15),
    color: Color.textGrey
  },
  viewMoreText: {
    fontSize: moderateScale(13),
    textDecorationLine: 'underline',
    marginTop: verticalScale(10),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  ametiesText: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginVertical: verticalScale(5)
  },
  mediaumlabel: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginVertical: verticalScale(10)
  },
  devider: {
    width: '90%',
    height: verticalScale(0.5),
    backgroundColor: Color.darkGrey,
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  mapView: {
    width: '100%',
    height: verticalScale(250)
  },
  currentLocationImage: {
    width: '50%',
    height: '50%',
    tintColor: Color.Primary
  },
  currentLocationContainer: {
    position: 'absolute',
    zIndex: 1000,
    height: verticalScale(50),
    width: verticalScale(50),
    ...CommonStyles.centerItem,
    right: scale(10),
    top: verticalScale(10),
    backgroundColor: Color.white,
    borderRadius: moderateScale(100)
  },
  markerImage: {
    width: verticalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(50)
  },
  listImage: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderRadius: moderateScale(10)
  },
  itemContainer: {
    padding: scale(10),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(10),
    ...CommonStyles.row,
    marginHorizontal: scale(10)
  },
  nameText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.bold,
    color: Color.black
  },
  addressText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  dotView: {
    width: verticalScale(5),
    height: verticalScale(5),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(300),
    marginHorizontal: scale(5)
  },

  detailsContainer: {
    marginLeft: scale(5),
    marginVertical: verticalScale(5)
  },
  listStyle: {
    top: -verticalScale(15)
  },
  productRatingContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    borderRadius: moderateScale(20),
    backgroundColor: Color.deepGrey,
    padding: scale(10),
    marginVertical: verticalScale(10),
    marginHorizontal: scale(10)
  },
  progressContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(5)
  },
  progressText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginRight: scale(10)
  },
  currentRateText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(15),
    color: Color.black
  },
  maxRateText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14)
  },
  reviewBaseText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(13),
    color: Color.textGrey,
    marginVertical: verticalScale(10)
  },
  innerSizeButtonContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(15)
  },
  imageIconStyle: {
    width: verticalScale(25),
    height: verticalScale(25),
    tintColor: Color.black
  },
  sizeInnerText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(10)
  }
})
