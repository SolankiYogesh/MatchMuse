import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, widthPx} from '../../../../../Helpers/Responsive'

const RenderGivewayItem = ({item}: any) => {
  const [isLike, setISLike] = useState(false)
  const navigation: any = useNavigation()

  const onPressItem = () => {
    navigation.navigate(Screen.GiveWayDetailsSrceen, {
      item
    })
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
        <AnimatedImage
          containerStyle={styles.absoluteImage}
          onPress={() => setISLike(!isLike)}
          source={isLike ? Images.animatedHeart : Images.heart}
          style={styles.bottomImages}
        />
      </>
    )
  }
  return (
    <TouchableOpacity onPress={onPressItem} style={styles.container}>
      {renderImage()}

      <View style={styles.innerView}>
        <Text style={styles.hintText}>{'Gift of Mobile'}</Text>
        <View style={styles.timeBtnContainer}>
          <View style={CommonStyles.row}>
            <Text style={styles.voteText}>{t('FD291')}</Text>
            <Text style={styles.voteText}>{'Footwear'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RenderGivewayItem

const styles = StyleSheet.create({
  container: {
    width: widthPx(70),
    marginTop: verticalScale(50),
    marginHorizontal: scale(10)
  },
  pollImage: {
    width: '80%',
    height: verticalScale(150),
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
    paddingTop: verticalScale(125)
  },
  timeBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: scale(15)
  },

  hintText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    flex: 1,
    marginTop: verticalScale(10),
    marginLeft: scale(15)
  },

  voteText: {
    marginRight: scale(10),
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  },
  bottomImages: {
    height: verticalScale(23),
    width: verticalScale(23)
  },
  absoluteImage: {
    position: 'absolute',
    zIndex: 1000,
    right: '15%',
    top: '-10%'
  }
})
