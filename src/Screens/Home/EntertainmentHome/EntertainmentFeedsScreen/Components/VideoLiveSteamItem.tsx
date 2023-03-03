import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {WINDOW_WIDTH} from '@gorhom/bottom-sheet'
import {t} from 'i18next'

import VideoSheetLoader from '../../../../../Components/VideoSheetLoader'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, widthPx} from '../../../../../Helpers/Responsive'

const VideoLiveSteamItem = ({item, isBigView = false, isColumn = false}: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        isColumn && styles.columnContainer,
        isBigView && styles.VerticalitemContainer
      ]}
      onPress={() => VideoSheetLoader.PlayVideo(item)}
    >
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={styles.videoImageContainer}
      >
        <Image source={Images.video} resizeMode={'contain'} style={styles.videoIcon} />
        {!isBigView && <Text style={styles.liveText}>{t('FD321')}</Text>}
      </LinearGradient>
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={[styles.videoImageContainer, styles.eyeImageContainer]}
      >
        {!isBigView && (
          <Image source={Images.eye} resizeMode={'contain'} style={styles.videoIcon} />
        )}
        <Text style={styles.liveText}>{isBigView ? item?.duration : item?.views}</Text>
      </LinearGradient>
      <Image
        style={[
          styles.imageView,
          isColumn && styles.columnContainerImageView,
          isBigView && styles.verticalimageView
        ]}
        resizeMode={'cover'}
        source={{
          uri: item?.image
        }}
      />
      <View style={styles.viewCOntainer}>
        <View style={styles.headerMainImageContainer}>
          <Image
            borderRadius={moderateScale(5)}
            resizeMode={'cover'}
            source={{uri: item?.profileImage}}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.rowView}>
          <View style={CommonStyles.row}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.usernameText}>
              {isBigView ? item?.deskText : item?.username}
            </Text>
            {!isBigView && (
              <Image source={Images.greenCheck} style={styles.smallCheck} resizeMode={'contain'} />
            )}
          </View>
          <View style={isBigView ? [CommonStyles.row, styles.bottomBorder] : {}}>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={[styles.deskText, isBigView && styles.smallText]}
            >
              {isBigView ? item?.username : item?.deskText}
            </Text>

            {isBigView && (
              <Image source={Images.greenCheck} style={styles.smallCheck} resizeMode={'contain'} />
            )}
            {isBigView && <View style={styles.dotView} />}
            {isBigView && (
              <Text style={styles.smallText}>
                {`${item?.views} `}
                {t('FD322')}
              </Text>
            )}
            {isBigView && <View style={styles.dotView} />}
            {isBigView && <Text style={styles.smallText}>{item?.time}</Text>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default VideoLiveSteamItem

const styles = StyleSheet.create({
  itemContainer: {
    width: widthPx(70),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    marginHorizontal: scale(10),
    borderRadius: moderateScale(10),
    overflow: 'hidden'
  },
  columnContainer: {
    width: WINDOW_WIDTH / 2.25,
    marginVertical: verticalScale(10)
  },
  VerticalitemContainer: {
    marginVertical: verticalScale(10),
    width: widthPx(90)
  },
  columnContainerImageView: {
    height: verticalScale(100)
  },
  imageView: {
    width: '100%',
    height: verticalScale(150)
  },
  verticalimageView: {
    height: verticalScale(180)
  },
  videoIcon: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.white
  },
  videoImageContainer: {
    ...CommonStyles.row,
    padding: scale(5),
    position: 'absolute',
    zIndex: 1500,
    borderBottomRightRadius: moderateScale(10)
  },
  liveText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginLeft: scale(5)
  },
  eyeImageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: moderateScale(10)
  },
  headerMainImageContainer: {
    height: verticalScale(40),
    width: verticalScale(40),
    borderWidth: scale(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(10),
    overflow: 'hidden'
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  viewCOntainer: {
    position: 'absolute',
    zIndex: 1000,
    bottom: verticalScale(5),
    marginHorizontal: scale(5),
    ...CommonStyles.row
  },
  smallCheck: {
    height: verticalScale(9),
    width: verticalScale(9),
    marginLeft: scale(5)
  },
  rowView: {
    marginLeft: scale(10)
  },
  usernameText: {
    color: Color.white,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(12)
  },
  deskText: {
    color: Color.white,
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(10),
    textDecorationLine: 'underline'
  },
  smallText: {
    color: Color.white,
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(9),
    textDecorationLine: 'none'
  },
  dotView: {
    width: verticalScale(5),
    height: verticalScale(5),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(100),
    marginHorizontal: scale(5)
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Color.white
  }
})
