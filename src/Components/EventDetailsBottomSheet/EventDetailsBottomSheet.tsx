import React, {useMemo, useRef} from 'react'
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ReactNativeModal from 'react-native-modal'
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated'
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet'
import {t} from 'i18next'
import _ from 'lodash'

import {FEEDS} from '../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../Helpers'
import {moderateScale, scale, verticalScale, W_HEIGHT} from '../../Helpers/Responsive'
import AppButtonWithIcon from '../AppButtonWithIcon'
import AppContainer from '../AppContainer'
import AppProfileImage from '../AppProfileImage'

interface EventDetailsBottomSheetProps {
  item?: any
  onClose?: () => void
}

const EventDetailsBottomSheet = (props: EventDetailsBottomSheetProps) => {
  const {onClose, item} = props
  const bottomsheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => [W_HEIGHT], [])
  const profileUser = useMemo(() => FEEDS[Math.floor(Math.random() * 10)].image, [])
  const username = useMemo(() => Utility.randomeUserName(), [])

  const renderHandle = useMemo(() => {
    return <View style={styles.handleView} />
  }, [])

  const renderTextContainer = useMemo(() => {
    return (
      <Animated.View exiting={FadeOut} entering={FadeIn} style={styles.textContainer}>
        <Text style={styles.category}>{item?.category}</Text>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.deskText}>{'120'}</Text>
      </Animated.View>
    )
  }, [item])

  const renderImageView = useMemo(() => {
    return (
      <Image
        source={{
          uri: item?.image
        }}
        borderBottomLeftRadius={moderateScale(20)}
        borderBottomRightRadius={moderateScale(20)}
        style={styles.imageView}
        resizeMode={'cover'}
      />
    )
  }, [item?.image])

  const renderTimeLineView = useMemo(() => {
    return (
      <Animated.View exiting={FadeOut} entering={FadeIn}>
        <View style={styles.timeLineContainer}>
          <View style={CommonStyles.row}>
            <AppProfileImage
              borderRadius={80}
              size={40}
              style={styles.iconStyle}
              url={profileUser}
            />
            <Text style={styles.deskText}>{username}</Text>
          </View>
          <View style={styles.timeLineView}>
            <View style={styles.lineView} />
            <View style={styles.innerBoxView}>
              <Text style={styles.dateText}>{item?.date}</Text>
              <View>
                <Text style={styles.monthText}>{'March 2022'}</Text>
                <Text style={styles.dayText}>
                  {'Wednesday'}
                  <Text style={styles.monthText}>{' 11:00AM'}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={CommonStyles.row}>
          <View style={styles.profileIconContainer}>
            {_.map(item?.profiles, (i, index: number) => {
              return (
                <AppProfileImage
                  borderWidth={1}
                  borderRadius={moderateScale(30)}
                  url={i}
                  size={40}
                  style={index === 1 && styles.rightImage}
                  borderColor={Color.white}
                />
              )
            })}
          </View>
          <Text style={styles.hintText}>
            {t('FD370')}
            <Text style={styles.category}>
              {' '}
              {username}
              {','}
            </Text>
            <Text style={styles.category}>{username} </Text>
            {t('FD371')}
          </Text>
        </View>
      </Animated.View>
    )
  }, [item, username])

  const renderAboutView = useMemo(() => {
    return (
      <Animated.View exiting={FadeOut} entering={FadeIn}>
        <Text style={styles.aboutlableText}>{t('FD372')}</Text>
        <Text style={styles.aboutText}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
      </Animated.View>
    )
  }, [])

  return (
    <ReactNativeModal
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      isVisible
      style={CommonStyles.modalStyle}
    >
      <AppContainer>
        <BottomSheet
          onClose={onClose}
          enablePanDownToClose
          ref={bottomsheetRef}
          snapPoints={snapPoints}
          handleComponent={null}
          style={styles.bottomSheet}
        >
          {renderHandle}
          {renderImageView}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.1}}
            colors={[Color.transparent, Color.black]}
            style={styles.innerView}
          >
            <BottomSheetScrollView showsVerticalScrollIndicator={false}>
              {renderTextContainer}
              {renderTimeLineView}
              {renderAboutView}
            </BottomSheetScrollView>
            <AppButtonWithIcon
              image={Images.event}
              title={t('FD373')}
              onPress={onClose}
              imageStyle={styles.imageStyle}
              titleStyle={styles.titleStyle}
              containerStyle={styles.gradientStyleContainer}
            />
          </LinearGradient>
        </BottomSheet>
      </AppContainer>
    </ReactNativeModal>
  )
}

export default EventDetailsBottomSheet

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    height: '50%',
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    overflow: 'hidden'
  },
  bottomSheet: {
    marginTop: StatusBar.currentHeight,
    overflow: 'hidden',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20)
  },
  handleView: {
    width: '25%',
    height: verticalScale(7),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    position: 'absolute',
    zIndex: 1000,
    alignSelf: 'center',
    borderRadius: moderateScale(50),
    marginTop: verticalScale(10)
  },
  textContainer: {},
  category: {
    fontFamily: Fonts.medium,
    color: Color.white,
    fontSize: moderateScale(11),
    marginBottom: verticalScale(5)
  },
  title: {
    fontFamily: Fonts.bold,
    color: Color.white,
    fontSize: moderateScale(16)
  },
  deskText: {
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    fontSize: moderateScale(15)
  },
  timeLineContainer: {
    ...CommonStyles.row,

    marginVertical: verticalScale(10)
  },
  innerView: {
    paddingHorizontal: scale(10),
    flex: 1,
    top: -verticalScale(25)
  },
  iconStyle: {
    marginRight: scale(10)
  },
  timeLineView: {
    ...CommonStyles.row
  },
  innerBoxView: {
    padding: scale(10),
    backgroundColor: Color.grey_Shade3,
    borderRadius: moderateScale(10),
    ...CommonStyles.row
  },
  lineView: {
    flex: 0.7,
    height: verticalScale(4),
    backgroundColor: Color.grey_Shade3,
    marginLeft: scale(10)
  },
  dateText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Color.white,
    marginRight: scale(5)
  },
  monthText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey
  },
  dayText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.white
  },
  rightImage: {
    right: scale(10)
  },
  profileIconContainer: {
    width: scale(80),
    ...CommonStyles.row
  },
  hintText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.medium,
    color: Color.greyShade,
    marginLeft: scale(10),
    flex: 1
  },
  aboutlableText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.white,
    marginVertical: verticalScale(15)
  },
  aboutText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginBottom: verticalScale(30)
  },
  gradientStyleContainer: {
    height: verticalScale(55),
    marginBottom: verticalScale(10),
    ...CommonStyles.row
  },
  imageStyle: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  titleStyle: {
    fontSize: moderateScale(15),
    marginLeft: scale(15)
  }
})
