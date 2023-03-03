import React, {useMemo, useRef} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import ReactNativeModal from 'react-native-modal'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints
} from '@gorhom/bottom-sheet'
import {t} from 'i18next'

import {FEEDS} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface WhyThisPostModalProps {
  onClose?: () => void
}

const WhyThisPostModal = ({onClose = () => {}}: WhyThisPostModalProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])
  const {animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout} =
    useBottomSheetDynamicSnapPoints(initialSnapPoints)

  const close = () => {
    bottomSheetRef.current?.close()
    if (onClose) onClose()
  }

  return (
    <ReactNativeModal isVisible coverScreen style={CommonStyles.modalStyle}>
      <GestureHandlerRootView style={CommonStyles.flex}>
        <BottomSheet
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              disappearsOnIndex={-1}
              appearsOnIndex={0}
              enableTouchThrough
              pressBehavior={'close'}
              {...props}
            />
          )}
          onClose={close}
          handleIndicatorStyle={styles.handleIndicatorStyle}
          enablePanDownToClose
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <Text style={styles.topText}>{t('FD271')}</Text>
            <View style={styles.borderView} />
            <Text style={styles.longText}>
              {t('FD272')}
              <Text style={styles.longPrimaryText}>{t('FD144')}</Text>
            </Text>

            <View style={styles.innerBtnContainer}>
              <View style={[CommonStyles.row, styles.btnContainer]}>
                <View style={[styles.imgbtnBackStyle, styles.profileContainer]}>
                  <Image
                    source={{
                      uri: FEEDS[0].image
                    }}
                    borderRadius={moderateScale(10)}
                    resizeMode={'contain'}
                    style={styles.profileImage}
                  />
                </View>
                <Text style={styles.textbutton}>{`${t('FD273')} lawrance@jane`}</Text>
              </View>
              <View style={[CommonStyles.row, styles.btnContainer]}>
                <View style={styles.imgbtnBackStyle}>
                  <Image
                    source={Images.calendar}
                    resizeMode={'contain'}
                    style={styles.imgbtnStyle}
                  />
                </View>
                <Text style={styles.textbutton}>{`${t('FD274')} lawrance@jane for 5 years`}</Text>
              </View>
              <View style={[CommonStyles.row, styles.btnContainer]}>
                <View style={styles.imgbtnBackStyle}>
                  <Image
                    source={Images.heart}
                    resizeMode={'contain'}
                    style={[styles.imgbtnStyle, styles.imgbtnStylePrimary]}
                  />
                </View>
                <Text style={styles.textbutton}>{t('FD275')}</Text>
              </View>
              <View style={[CommonStyles.row, styles.btnContainer]}>
                <View style={styles.imgbtnBackStyle}>
                  <Image
                    source={Images.clock}
                    resizeMode={'contain'}
                    style={[styles.imgbtnStyle, styles.imgbtnStylePrimary]}
                  />
                </View>
                <Text style={styles.textbutton}>{t('FD276')}</Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </ReactNativeModal>
  )
}

export default WhyThisPostModal

const styles = StyleSheet.create({
  innerBtnContainer: {
    marginTop: verticalScale(15),
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15)
  },

  imgbtnBackStyle: {
    width: verticalScale(35),
    height: verticalScale(35),
    marginHorizontal: scale(15),
    borderWidth: 2.5,
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(5),
    borderColor: Color.lightGrey
  },
  imgbtnStyle: {
    width: '60%',
    height: '60%',
    tintColor: Color.lightGrey
  },
  profileImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },

  imgbtnStylePrimary: {
    tintColor: Color.lightGrey
  },

  borderView: {
    width: '90%',
    height: verticalScale(2),
    backgroundColor: Color.lightGrey,
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  textbutton: {
    width: '90%',
    alignSelf: 'center'
  },
  topText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    textAlign: 'center',
    marginVertical: verticalScale(10)
  },
  longText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  longPrimaryText: {
    color: Color.Primary
  },
  btnContainer: {
    marginVertical: verticalScale(5)
  },
  profileContainer: {
    overflow: 'hidden',
    borderWidth: 0
  },
  handleIndicatorStyle: {
    width: '20%'
  }
})
