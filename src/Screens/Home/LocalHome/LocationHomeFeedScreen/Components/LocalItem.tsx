import React, {useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const LocalItem = ({item, isLikeView = true}: any) => {
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

  return (
    <View style={[styles.itemContainer, !isLikeView && styles.dislikeContainer]}>
      <Image style={styles.imageView} resizeMode={'cover'} source={{uri: item?.image}} />
      <View style={[styles.textContainer, isLikeView && styles.likedTextContainer]}>
        <Text style={styles.itemText}>{item?.title}</Text>
      </View>

      {isLikeView && renderLikeView()}
    </View>
  )
}

export default LocalItem

const styles = StyleSheet.create({
  itemContainer: {
    width: scale(150),
    height: verticalScale(180),
    borderRadius: moderateScale(15),
    marginHorizontal: scale(10),
    overflow: 'hidden'
  },
  dislikeContainer: {
    ...CommonStyles.centerItem,
    width: scale(140),
    height: verticalScale(104)
  },
  imageView: {
    width: '100%',
    height: '100%'
  },
  itemText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.white,
    textAlign: 'center'
  },
  textContainer: {
    position: 'absolute',
    width: scale(150),
    height: verticalScale(180),
    borderRadius: moderateScale(15),
    ...CommonStyles.centerItem
  },
  likedTextContainer: {
    ...CommonStyles.centerItem,
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(20)
  },
  likeContainer: {
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    marginTop: verticalScale(15),
    marginLeft: scale(10),
    position: 'absolute',
    borderRadius: moderateScale(10),
    padding: scale(5),
    ...CommonStyles.centerItem
  },
  heartImage: {
    width: verticalScale(20),
    height: verticalScale(20)
  }
})
