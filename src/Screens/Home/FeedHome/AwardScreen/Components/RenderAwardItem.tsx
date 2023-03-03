import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, widthPx} from '../../../../../Helpers/Responsive'

const RenderAwardItem = ({item}: any) => {
  const [isLike, setISLike] = useState(false)
  const navigation: any = useNavigation()

  const onPressItem = () => {
    navigation.navigate(Screen.AwardTopperScreen)
  }

  const renderImage = () => {
    return (
      <>
        <Image
          source={{
            uri: item?.image
          }}
          style={styles.pollImage}
          resizeMode={'cover'}
        />
        <View style={styles.absoluteImage}>
          <AnimatedImage
            onPress={() => setISLike(!isLike)}
            source={isLike ? Images.animatedHeart : Images.heart}
            style={styles.bottomImages}
          />
          <Text style={styles.likeCountText}>{item?.likeCount}</Text>
        </View>
      </>
    )
  }
  return (
    <TouchableOpacity onPress={onPressItem} style={styles.container}>
      {renderImage()}

      <View style={styles.innerView}>
        <Text style={styles.hintText}>{'The Noble Prize'}</Text>
        <Text style={styles.smallHintText}>{'What is the greatest NBA team in history ?'}</Text>

        <View style={styles.profileView}>
          <Image
            source={{
              uri: item?.image
            }}
            style={styles.profileImage}
            resizeMode={'cover'}
          />
          <View>
            <Text style={styles.nameText}>{'Laxial Punch'}</Text>
            <Text style={styles.timeText}>{'Member since 11 june 2022'}</Text>
          </View>
          <Text style={styles.leftTimeText}>{'8 hour left'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RenderAwardItem

const styles = StyleSheet.create({
  container: {
    width: widthPx(90),
    marginTop: verticalScale(50),
    marginHorizontal: scale(10),
    alignSelf: 'center'
  },
  pollImage: {
    width: '80%',
    height: verticalScale(125),
    borderRadius: moderateScale(15),
    ...CommonStyles.shadow,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1000,
    top: -verticalScale(30)
  },
  innerView: {
    backgroundColor: Color.white,
    padding: scale(15),
    borderRadius: moderateScale(15),
    paddingTop: verticalScale(100)
  },

  likeCountText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.white,
    marginVertical: verticalScale(10)
  },
  hintText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    flex: 1,
    marginTop: verticalScale(10),
    marginLeft: scale(15)
  },
  smallHintText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(15),
    marginTop: verticalScale(10)
  },

  bottomImages: {
    height: verticalScale(23),
    width: verticalScale(23),
    marginRight: scale(10)
  },
  absoluteImage: {
    position: 'absolute',
    zIndex: 1000,
    left: '15%',
    top: '-10%',
    ...CommonStyles.row
  },

  profileView: {
    ...CommonStyles.row
  },
  profileImage: {
    width: verticalScale(45),
    height: verticalScale(45),
    borderWidth: scale(2),
    borderColor: Color.Primary,
    borderRadius: moderateScale(100),
    marginRight: scale(10),
    marginLeft: scale(5),
    marginVertical: verticalScale(10)
  },
  nameText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  timeText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.darkGrey
  },
  leftTimeText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    marginLeft: scale(20),
    marginTop: verticalScale(20)
  }
})
