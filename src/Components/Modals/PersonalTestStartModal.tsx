import React, {useMemo, useRef, useState} from 'react'
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import ReactNativeModal from 'react-native-modal'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints
} from '@gorhom/bottom-sheet'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts, Images, Screen} from '../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AnimatedTestIcon from '../Animations/AnimatedTestIcon'
import AppButton from '../AppButton'

interface PersonalTestStartModalProps {
  onClose?: () => void
  item?: any
}

const PersonalTestStartModal = (props: PersonalTestStartModalProps) => {
  const {onClose, item} = props
  const bottomshetRef = useRef<BottomSheet>(null)
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])
  const {animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout} =
    useBottomSheetDynamicSnapPoints(initialSnapPoints)
  const [isBottomsheet, setISBottomsheet] = useState(false)
  const [isAnimated, setISAnimated] = useState(false)
  const navigation: any = useNavigation()
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
  //     setISBottomsheet(false)
  //     return true
  //   })

  //   return () => backHandler.remove()
  // }, [])
  const renderCloseImage = useMemo(() => {
    return (
      <TouchableOpacity onPress={() => setISBottomsheet(true)}>
        <Image source={Images.close} style={styles.closeImage} resizeMode={'contain'} />
      </TouchableOpacity>
    )
  }, [])

  const renderCenterView = useMemo(() => {
    return (
      <View>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.descText}>{item?.text}</Text>
        <TouchableOpacity style={styles.tipbtnContainer} onPress={() => setISAnimated(true)}>
          <Text style={styles.btnTextColor}>{t('FD388')}</Text>
        </TouchableOpacity>
      </View>
    )
  }, [])

  const renderLetsGoButton = useMemo(() => {
    return (
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.bottomButtonContainer}
          onPress={() => {
            bottomshetRef.current?.close()
            setISBottomsheet(false)
            if (onClose) onClose()
            navigation.navigate(Screen.TestQuestionsScreen)
          }}
        >
          <Text style={[styles.btnTextColor, styles.textblack]}>{t('FD386')}</Text>
        </TouchableOpacity>
      </View>
    )
  }, [])

  const renderBottomSheet = useMemo(() => {
    return (
      <ReactNativeModal isVisible style={CommonStyles.modalStyle}>
        <GestureHandlerRootView style={styles.bottomSheetparent}>
          <BottomSheet
            onClose={() => setISBottomsheet(false)}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            ref={bottomshetRef}
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                enableTouchThrough
                pressBehavior={'close'}
                {...props}
              />
            )}
            handleIndicatorStyle={styles.handleIndicatorStyle}
            enablePanDownToClose
          >
            <BottomSheetView onLayout={handleContentLayout} style={styles.bottomSheetContainer}>
              <Text style={styles.ohReallyText}>{t('FD389')}</Text>
              <Text style={styles.areyouSureText}>{t('FD390')}</Text>
              <AppButton title={t('FD391')} />
              <TouchableOpacity
                onPress={() => {
                  bottomshetRef.current?.close()
                  if (onClose) onClose()
                }}
              >
                <Text style={styles.areyouSureText}>{t('FD392')}</Text>
              </TouchableOpacity>
            </BottomSheetView>
          </BottomSheet>
        </GestureHandlerRootView>
      </ReactNativeModal>
    )
  }, [])

  return (
    <ReactNativeModal
      statusBarTranslucent
      coverScreen
      style={[CommonStyles.modalStyle, CommonStyles.fullView]}
      isVisible
    >
      <ImageBackground
        source={Images.test_background}
        style={styles.imageBackground}
        resizeMode={'cover'}
      >
        <ImageBackground
          source={Images.test_backgroun_overview}
          style={styles.imageBackground}
          resizeMode={'cover'}
        >
          {renderCloseImage}
          {renderCenterView}
          {renderLetsGoButton}
          {isBottomsheet && renderBottomSheet}
          {isAnimated && (
            <View style={styles.absoluteContainer}>
              <AnimatedTestIcon onEnd={() => setISAnimated(false)} />
            </View>
          )}
        </ImageBackground>
      </ImageBackground>
    </ReactNativeModal>
  )
}

export default PersonalTestStartModal

const styles = StyleSheet.create({
  imageBackground: {
    ...CommonStyles.viewFull
  },
  closeImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    tintColor: Color.white,
    marginTop: heightPx(8),
    left: scale(25),
    zIndex: 1000
  },
  nameText: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(25),
    color: Color.white,
    textAlign: 'center',
    marginVertical: verticalScale(25),
    marginTop: verticalScale(50)
  },
  descText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15),
    color: Color.white,
    textAlign: 'center',
    marginVertical: verticalScale(25)
  },
  tipbtnContainer: {
    backgroundColor: Color.backDropColor,
    borderRadius: moderateScale(20),
    padding: scale(15),
    width: '45%',
    alignSelf: 'center',
    ...CommonStyles.centerItem
  },
  btnTextColor: {fontFamily: Fonts.medium, fontSize: moderateScale(15), color: Color.white},
  textblack: {
    color: Color.black
  },
  bottomButtonContainer: {
    width: '85%',
    alignSelf: 'center',
    backgroundColor: Color.white,
    borderRadius: moderateScale(20),
    ...CommonStyles.centerItem,
    padding: scale(15),
    marginBottom: verticalScale(20)
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottomSheetContainer: {
    flex: 1,
    padding: scale(20)
  },
  ohReallyText: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    fontSize: moderateScale(18),
    color: Color.black,
    marginTop: verticalScale(20)
  },
  areyouSureText: {
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: moderateScale(16),
    color: Color.black,
    marginVertical: verticalScale(20),
    marginBottom: verticalScale(30)
  },
  handleIndicatorStyle: {
    width: '20%'
  },
  bottomSheetparent: {
    flex: 1
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...CommonStyles.centerItem,
    ...CommonStyles.viewFull
  }
})
