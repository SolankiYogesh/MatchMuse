import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import StarRating from '../../../../../Components/StarRating'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, widthPx} from '../../../../../Helpers/Responsive'

const FootItem = ({item, onRemoveItem = () => {}, isAllLiked = false}: any) => {
  const [isLike, setISLike] = useState(false)

  useEffect(() => {
    if (isAllLiked) {
      setISLike(true)
    }
  }, [isAllLiked])

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

  return (
    <TouchableOpacity onPress={() => {}} style={styles.itemContainer}>
      <Image
        source={{
          uri: item?.image
        }}
        style={styles.imageView}
        resizeMode={'cover'}
      />
      {renderLikeView()}
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

export default FootItem

const styles = StyleSheet.create({
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
    width: verticalScale(20),
    height: verticalScale(20)
  },
  itemContainer: {
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    ...CommonStyles.shadow,
    width: widthPx(45),
    height: verticalScale(200),
    marginHorizontal: scale(10)
  },
  imageView: {
    width: '100%',
    height: '50%'
  },
  bottomContainer: {
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    padding: scale(10),
    top: -verticalScale(8)
  },
  titleText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.black
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
  marginleft: {
    marginLeft: scale(10)
  },
  bottomTextContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  typeText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  }
})
