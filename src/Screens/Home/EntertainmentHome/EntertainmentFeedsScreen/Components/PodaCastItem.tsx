import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, W_WIDTH} from '../../../../../Helpers/Responsive'

const PodaCastItem = ({item, isColumn = false, audioData = []}: any) => {
  const [isLike, setISLike] = useState(false)
  const navigation: any = useNavigation()

  const onPressItem = () => {
    navigation.navigate(Screen.AudioPlayerScreen, {
      data: audioData,
      item
    })
  }

  const renderLikeView = () => {
    return (
      <View style={[styles.likeContainer, isColumn && styles.columnHeart]}>
        <AnimatedImage
          style={styles.heartImage}
          source={isLike ? Images.heart_fill : Images.heart}
          onPress={() => setISLike(!isLike)}
        />
      </View>
    )
  }
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[styles.itemContainer, isColumn && styles.columnContainer]}
    >
      <Image
        source={{
          uri: item?.image
        }}
        resizeMode={'cover'}
        style={[styles.imageView, isColumn && styles.columnView]}
      />
      {renderLikeView()}
      <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.titleText}>
        {item?.title}
      </Text>
      <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.descText}>
        {item?.deskText}
      </Text>
    </TouchableOpacity>
  )
}

export default PodaCastItem

const styles = StyleSheet.create({
  itemContainer: {
    overflow: 'hidden',
    marginHorizontal: scale(5)
  },
  columnView: {
    marginVertical: verticalScale(10),
    width: '100%',
    height: W_WIDTH / 3.3
  },
  imageView: {
    width: verticalScale(150),
    height: verticalScale(150),
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    alignSelf: 'center'
  },
  heartImage: {
    width: verticalScale(15),
    height: verticalScale(15)
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
  columnHeart: {
    marginTop: verticalScale(15),
    marginLeft: scale(5)
  },
  titleText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginVertical: verticalScale(5)
  },
  descText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.darkGrey
  },
  columnContainer: {
    marginHorizontal: scale(4),
    marginVertical: verticalScale(10),
    width: W_WIDTH / 3.2
  }
})
