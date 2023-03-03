import React, {useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import AppButton from '../../../../../Components/AppButton'
import {Color, CommonStyles, Fonts, Images, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, widthPx} from '../../../../../Helpers/Responsive'

const RenderPollItem = ({item}: any) => {
  const [isLike, setISLike] = useState(false)
  const navigation: any = useNavigation()

  const onPressVote = () => {
    navigation.navigate(Screen.VoteDetailsScreen, {
      item
    })
  }

  const renderImage = () => {
    return (
      <Image
        source={{
          uri: item?.image
        }}
        style={styles.pollImage}
        resizeMode={'cover'}
      />
    )
  }
  return (
    <View style={styles.container}>
      {renderImage()}

      <View style={styles.innerView}>
        <View style={CommonStyles.row}>
          <AnimatedImage
            onPress={() => setISLike(!isLike)}
            style={[styles.bottomImages, !isLike && styles.tintColorBlack]}
            source={isLike ? Images.heart_fill : Images.heart}
          />

          <Text style={styles.likeCountText}>{item?.likeCount}</Text>
        </View>
        <Text style={styles.hintText}>{'Was ist der größte Fehler beim ersten Date?'}</Text>
        <View style={styles.timeBtnContainer}>
          <View>
            <Text style={styles.voteCommentHintText}>{'January 12 2022,0:30 PM'}</Text>
            <View style={CommonStyles.row}>
              <Text style={styles.voteText}>
                {`${item?.votes} `}
                {t('FD254')}
              </Text>
              <View style={styles.dotView} />
              <Text style={styles.voteText}>{'still8 Stunden'}</Text>
            </View>
          </View>
          <AppButton
            onPress={onPressVote}
            title={t('FD277')}
            gradientStyleContainer={styles.voteBtn}
          />
        </View>
      </View>
    </View>
  )
}

export default RenderPollItem

const styles = StyleSheet.create({
  container: {
    width: widthPx(80),
    marginTop: verticalScale(50),
    marginHorizontal: scale(10)
  },
  pollImage: {
    width: '90%',
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
    paddingTop: verticalScale(110)
  },
  timeBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  voteCommentHintText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginBottom: verticalScale(10)
  },
  voteBtn: {
    height: verticalScale(40),
    padding: scale(10),
    alignSelf: 'flex-end',
    borderRadius: moderateScale(10)
  },
  bottomImages: {
    height: verticalScale(23),
    width: verticalScale(23),
    // tintColor: Color.black,
    marginRight: scale(15)
  },
  tintColorBlack: {
    tintColor: Color.Primary
  },
  likeCountText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    marginVertical: verticalScale(10)
  },
  hintText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    flex: 1,
    marginVertical: verticalScale(10)
  },
  dotView: {
    width: verticalScale(5),
    height: verticalScale(5),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(100),
    marginRight: scale(10)
  },
  voteText: {
    marginRight: scale(10),
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  }
})
