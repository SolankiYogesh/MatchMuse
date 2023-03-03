import React, {forwardRef, useImperativeHandle, useMemo, useRef, useState} from 'react'
import {
  Animated,
  Image,
  Keyboard,
  PanResponder,
  PanResponderInstance,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ReactNativeModal from 'react-native-modal'
import {useDispatch, useSelector} from 'react-redux'
import {CommonActions} from '@react-navigation/native'
import {t} from 'i18next'

import {Color, CommonStyles, Emitter, Fonts, Images, Screen} from '../../Helpers'
import {heightPx, moderateScale, scale, verticalScale, W_WIDTH} from '../../Helpers/Responsive'
import {navigationRef} from '../../Router/RootNavigation'
import {logOut} from '../../Store/Reducers/UserSlice'
import AppButtonWithIcon from '../AppButtonWithIcon'
import BlueCardModal from '../Modals/BlueCardModal'
import CardModal from './Components/CardModal'

const TopSheetModal = forwardRef((_, ref: any) => {
  const [isVisible, setISVisislbe] = useState(false)
  const animatedHeight = useRef(new Animated.Value(0))
  const pan = useRef(new Animated.ValueXY())
  const panResponder = useRef<PanResponderInstance>()
  const height = heightPx(70)
  const dispatch = useDispatch()
  const [isCardModal, setISCardModal] = useState(false)
  const [isBlueCard, setISBlueCard] = useState(false)
  // const [user, setUser] = useState<any>(null)
  const user = useSelector((state: any) => state?.user?.user)

  useImperativeHandle(ref, () => ({
    showLoader
  }))

  const onLogOut = () => {
    setISVisislbe(false)
    dispatch(logOut())
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Screen.Auth}]
      })
    )
  }

  const onNavigate = (id: number) => {
    setISVisislbe(false)
    Emitter.emit('navID', id)
  }

  // eslint-disable-next-line no-unused-vars
  const showLoader = (isLoading: boolean) => {
    if (isLoading) {
      Keyboard.dismiss()
    }
    setISVisislbe(isLoading)
  }

  const createPanResponder = () => {
    panResponder.current = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy < 0) {
          Animated.event([null, {dy: pan.current.y}], {
            useNativeDriver: false
          })(e, gestureState)
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const gestureDistance = gestureState.dy
        if (gestureDistance < -400) {
          setModalVisible(false)
        } else {
          Animated.spring(pan.current, {toValue: {x: 0, y: 0}, useNativeDriver: false}).start()
        }
      }
    })
  }

  useMemo(() => {
    createPanResponder()
  }, [])

  const setModalVisible = (visible: boolean) => {
    if (visible) {
      setISVisislbe(visible)
      Animated.timing(animatedHeight.current, {
        toValue: height,
        duration: 300,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(animatedHeight.current, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
      }).start(() => {
        pan.current = new Animated.ValueXY()
        setISVisislbe(visible)
        animatedHeight.current = new Animated.Value(0)
      })
    }
  }

  const renderHeadeView = () => {
    return (
      <View style={styles.headerTitleView}>
        <View style={styles.headerRowView}>
          <Image resizeMode={'contain'} source={Images.fyerdates_logo} style={styles.logoImage} />
          <Text style={styles.headerTitle}>{t('FD1')}</Text>
        </View>
        <View style={styles.headerRowView}>
          <Text style={styles.headerPointText}>{0}</Text>
          <Image
            source={Images.coin_gbn_single}
            resizeMode={'contain'}
            style={styles.gtnSmallLogoImage}
          />
        </View>
      </View>
    )
  }

  const renderButtonsView = () => {
    return (
      <View style={styles.btnCotainer}>
        <AppButtonWithIcon
          containerStyle={styles.btnStyle}
          title={t('FD126')}
          image={Images.emailGrad}
          onPress={() => onNavigate(1)}
        />
        <AppButtonWithIcon
          containerStyle={styles.btnStyle}
          title={t('FD127')}
          image={Images.notificationGrad}
          onPress={() => onNavigate(2)}
        />
        <AppButtonWithIcon
          containerStyle={styles.btnStyle}
          title={t('FD128')}
          image={Images.noteGrad}
          onPress={() => onNavigate(3)}
        />
        <AppButtonWithIcon
          containerStyle={styles.btnStyle}
          title={t('FD129')}
          image={Images.settingGrad}
          onPress={() => onNavigate(4)}
        />
      </View>
    )
  }

  const renderProfileCard = () => {
    return (
      <View style={styles.mainProfileContainer}>
        <View style={styles.innerProfileContainer}>
          <View style={styles.subInnerView}>
            <Image
              source={Images.fyerdates_logo}
              resizeMode={'contain'}
              style={styles.innerImageSub}
            />
            <Text style={styles.innerSubText}>{'00'}</Text>
          </View>
          <View style={styles.subInnerView}>
            <Image source={Images.groupImage} resizeMode={'contain'} style={styles.innerImageSub} />
            <Text style={styles.innerSubText}>{'00'}</Text>
          </View>
          <View style={styles.subInnerView}>
            <Image source={Images.manStar} resizeMode={'contain'} style={styles.innerImageSub} />
            <Text style={styles.innerSubText}>{'00'}</Text>
          </View>
        </View>
        <View>
          <View style={styles.profileImageBack}>
            <Image
              source={{
                uri: user?.smallImage
              }}
              resizeMode={'cover'}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileBottomView}>
            <Text style={styles.profileBottomText}>{user?.username}</Text>
            <Image style={styles.profileBottomImage} source={Images.star_normal} />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnView}>
            <Image source={Images.shop_fill} resizeMode={'contain'} style={styles.btnImageView} />
            <Text style={styles.countText}>{t('FD131')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView}>
            <Image source={Images.heart_fill} resizeMode={'contain'} style={styles.btnImageView} />
            <Text style={styles.countText}>{t('FD132')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView}>
            <Image
              source={Images.ticket}
              resizeMode={'contain'}
              style={[styles.btnImageView, styles.blackTine]}
            />
            <Text style={styles.countText}>{t('FD133')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderCards = () => {
    return (
      <View style={styles.cardsContainer}>
        <View style={styles.cardsShadowItemContainer}>
          <Image source={Images.card1} style={styles.cardsImage} resizeMode={'cover'} />
        </View>
        <TouchableOpacity
          onPress={() => setISCardModal(true)}
          style={styles.cardsShadowItemContainer}
        >
          <Image
            borderRadius={moderateScale(10)}
            source={Images.card2}
            style={styles.cardsImage}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderBootmButtons = () => {
    return (
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => onNavigate(6)} style={styles.bottomContainerItemContainer}>
          <LinearGradient
            style={styles.bottomButtongradient}
            start={{x: 0.3, y: 0}}
            end={{x: 0.8, y: 1}}
            locations={[0.1865, 0.8077]}
            colors={[Color.start_gold, Color.end_gold]}
          >
            <Image
              source={Images.fyerdates_logo}
              style={styles.bootmBtnLogoImage}
              resizeMode={'cover'}
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomContainerItemContainer} onPress={onLogOut}>
          <LinearGradient
            start={{x: 0.3, y: 0}}
            end={{x: 0.8, y: 1}}
            locations={[0.1865, 0.8077]}
            colors={[Color.pink_shade1, Color.red_shade1]}
            style={styles.bottomButtongradient}
          >
            <Image source={Images.logOut} style={styles.bootmBtnLogoImage} resizeMode={'cover'} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }

  const renderLastImageLogo = () => {
    return (
      <>
        <View style={[styles.headerRowView, styles.lastViewStyl]}>
          <Image resizeMode={'contain'} source={Images.gbn_logo_blue} style={styles.logoImage} />
          <Text style={[styles.headerTitle, styles.lasttext]}>{t('FD130')}</Text>
        </View>
        <View style={styles.devider} />
      </>
    )
  }

  const panStyle = {
    transform: pan.current.getTranslateTransform()
  }

  return (
    <ReactNativeModal
      animationOut={'slideOutUp'}
      animationIn={'slideInDown'}
      animationOutTiming={500}
      animationInTiming={500}
      isVisible={isVisible}
      style={styles.modalStyle}
      coverScreen
      onBackButtonPress={() => setISVisislbe(false)}
      onBackdropPress={() => setISVisislbe(false)}
    >
      <Animated.View
        {...panResponder?.current?.panHandlers}
        style={[styles.modalContainer, panStyle]}
      >
        {renderHeadeView()}
        {renderButtonsView()}
        {renderProfileCard()}
        {renderCards()}
        {renderBootmButtons()}
        {renderLastImageLogo()}
        {isCardModal && (
          <CardModal
            onPressCard1={() => {
              setISCardModal(false)
              setISBlueCard(true)
            }}
            onClose={() => setISCardModal(false)}
          />
        )}
        {isBlueCard && <BlueCardModal onClose={() => setISBlueCard(false)} />}
      </Animated.View>
    </ReactNativeModal>
  )
})
export default TopSheetModal

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start'
  },
  modalContainer: {
    ...CommonStyles.shadow,
    backgroundColor: Color.white_Shade_back,
    padding: scale(20),
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    paddingTop: verticalScale(50)
  },
  headerTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logoImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    marginRight: scale(10),
    marginVertical: verticalScale(10)
  },
  headerRowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: moderateScale(23),
    fontFamily: Fonts.bold,
    color: Color.redShadeFF,
    textTransform: 'uppercase'
  },
  headerPointText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  gtnSmallLogoImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    marginLeft: scale(10)
  },
  btnCotainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15)
  },
  btnStyle: {
    width: scale(80)
  },
  mainProfileContainer: {
    width: '100%',
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(10),
    ...CommonStyles.redShadow,
    backgroundColor: Color.white_Shade_back
  },
  innerProfileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10),
    paddingHorizontal: scale(30),
    ...CommonStyles.redShadow,
    backgroundColor: Color.white_Shade_back,
    borderRadius: moderateScale(15)
  },
  innerImageSub: {
    height: verticalScale(18),
    width: verticalScale(18),
    marginRight: scale(10),
    marginVertical: verticalScale(2)
  },
  subInnerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  innerSubText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  profileImageBack: {
    borderRadius: moderateScale(15),
    borderWidth: 4,
    borderColor: Color.Primary,
    width: verticalScale(60),
    height: verticalScale(60),
    overflow: 'hidden'
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10)
  },
  profileBottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  profileBottomText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  profileBottomImage: {
    width: verticalScale(15),
    height: verticalScale(15),
    marginLeft: scale(10)
  },
  btnImageView: {
    width: verticalScale(15),
    height: verticalScale(15),
    marginRight: scale(10)
  },
  blackTine: {
    tintColor: Color.black
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    ...CommonStyles.shadow,
    backgroundColor: Color.white_Shade_back,
    padding: scale(5),
    marginVertical: verticalScale(3),
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(15)
  },
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(100),
    width: '100%',
    marginTop: verticalScale(30),
    justifyContent: 'space-between'
  },
  cardsShadowItemContainer: {
    ...CommonStyles.redShadow,
    flex: 1,
    borderRadius: moderateScale(10),
    overflow: 'hidden'
  },
  cardsImage: {
    height: '100%',
    width: W_WIDTH / 2.4
  },
  bootmBtnLogoImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.white_Shade_back
  },
  bottomButtongradient: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10)
  },
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(15),
    justifyContent: 'space-between'
  },
  bottomContainerItemContainer: {
    width: '47%',
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    height: verticalScale(50),
    ...CommonStyles.shadow
  },
  lastViewStyl: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10)
  },
  devider: {
    width: verticalScale(80),
    height: verticalScale(4),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    marginTop: verticalScale(10)
  },
  lasttext: {
    color: Color.blue_shade,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15)
  },
  countText: {
    color: Color.offBlack,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12.5)
  }
})
