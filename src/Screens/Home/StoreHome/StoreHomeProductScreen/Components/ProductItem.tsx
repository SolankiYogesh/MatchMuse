import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import StarRating from '../../../../../Components/StarRating'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {
  heightPx,
  moderateScale,
  scale,
  verticalScale,
  widthPx
} from '../../../../../Helpers/Responsive'

const ProductItem = ({
  item,
  onRemoveItem = () => {},
  isBigView = false,
  isDiscount = false,
  isLiked = false
}: any) => {
  const [isLike, setISLike] = useState(isLiked)
  const navigation: any = useNavigation()

  const onPressProduct = () => {
    navigation.navigate(Screen.ProductDetailsScreen, {
      item
    })
  }

  useEffect(() => {
    setISLike(isLiked)
  }, [isLiked])
  const renderLikeView = () => {
    return (
      <View style={styles.likeContainer}>
        <AnimatedImage
          style={styles.heartImage}
          source={isLike ? Images.heart_fill : Images.heart}
          onPress={() => {
            if (isLike) onRemoveItem(item)
            setISLike(!isLike)
          }}
        />
      </View>
    )
  }

  const renderDicountView = () => {
    return (
      <LinearGradient
        colors={['rgba(66,65,65,1)', 'rgba(0,0,0,1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.discount}
      >
        <Text style={styles.discountText}>
          {Math.floor(Math.random() * 100)}
          {'% '}
          {t('FD338')}
        </Text>
      </LinearGradient>
    )
  }

  return (
    <TouchableOpacity
      onPress={onPressProduct}
      style={[styles.itemContainer, isBigView && styles.bigView]}
    >
      <Image
        source={{
          uri: item?.image
        }}
        style={[styles.imageView, isBigView && styles.bigImageStyle]}
        resizeMode={'cover'}
      />
      {renderLikeView()}
      {isDiscount && renderDicountView()}
      <View style={styles.bottomContainer}>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.titleText}>
          {item?.title}
        </Text>
        <View style={styles.ratingContainer}>
          <StarRating rating={Math.floor(item?.rating)} />
          <Text style={[styles.titleText, styles.marginleft]}>{item?.rating?.toFixed(1)}</Text>
        </View>
        <Text style={styles.reviewText}>
          {item?.reviews} {` ${t('FD336')}`}
        </Text>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.typeText}>{item?.type}</Text>
          <Text style={styles.titleText}>
            {item?.price}
            {' €'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    ...CommonStyles.shadow,
    width: widthPx(45),
    height: verticalScale(200),
    marginHorizontal: scale(10)
  },
  bigView: {
    marginVertical: verticalScale(10),
    width: widthPx(95),
    alignSelf: 'center',
    height: heightPx(35)
  },
  imageView: {
    width: '100%',
    height: '50%'
  },
  bigImageStyle: {
    height: '60%'
  },
  bottomContainer: {
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    padding: scale(10),
    bottom: verticalScale(10)
  },
  titleText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  marginleft: {
    marginLeft: scale(10)
  },
  ratingContainer: {
    ...CommonStyles.row,
    marginVertical: verticalScale(5)
  },
  reviewText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginVertical: verticalScale(5)
  },
  bottomTextContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  typeText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  },
  likeContainer: {
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    marginTop: verticalScale(5),
    marginLeft: scale(5),
    position: 'absolute',
    borderRadius: moderateScale(10),
    padding: scale(5),
    ...CommonStyles.centerItem
  },
  heartImage: {
    width: verticalScale(15),
    height: verticalScale(15)
  },
  discountText: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.semi_bold,
    color: Color.white
  },
  discount: {
    position: 'absolute',
    right: scale(10),
    top: verticalScale(10),
    padding: scale(5),
    borderRadius: moderateScale(10)
  }
})
