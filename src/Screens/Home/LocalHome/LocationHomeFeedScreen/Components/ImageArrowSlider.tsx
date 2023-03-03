import React, {useCallback, useState} from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import {cities} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const ImageArrowSlider = () => {
  const [image, setImage] = useState(cities[Math.floor(Math.random() * 10)])
  const [isLike, setISLike] = useState(false)
  const renderLikeView = () => {
    return (
      <View style={styles.likeContainer}>
        <AnimatedImage
          style={styles.heartImage}
          source={isLike ? Images.heart_fill : Images.heart}
          onPress={() => setISLike(!isLike)}
        />
      </View>
    )
  }
  const renderImage = useCallback(
    () => (
      <Image
        source={{
          uri: image.image
        }}
        resizeMode={'cover'}
        style={styles.imageView}
      />
    ),
    [image]
  )

  const onPressPick = () => {
    setImage(cities[Math.floor(Math.random() * 10)])
  }

  return (
    <View style={styles.container}>
      {renderImage()}
      {renderLikeView()}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPressPick}>
          <Image source={Images.leftArrow} style={styles.arrowImage} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPick}>
          <Image source={Images.rightArrow} style={styles.rightImage} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ImageArrowSlider

const styles = StyleSheet.create({
  container: {
    width: scale(150),
    height: verticalScale(140),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    ...CommonStyles.centerItem
  },
  imageView: {
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    width: '100%',
    ...CommonStyles.row,
    justifyContent: 'space-between',
    position: 'absolute'
  },
  arrowImage: {
    height: verticalScale(28),
    width: verticalScale(28),
    tintColor: Color.white
  },
  likeContainer: {
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    right: verticalScale(5),
    top: scale(5),
    position: 'absolute',
    borderRadius: moderateScale(10),
    padding: scale(5),
    ...CommonStyles.centerItem,
    zIndex: 1000
  },
  heartImage: {
    width: verticalScale(15),
    height: verticalScale(15)
  },
  rightImage: {
    height: verticalScale(2),
    width: verticalScale(2),
    tintColor: Color.white
  }
})
