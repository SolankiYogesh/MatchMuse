import React, {useMemo, useRef} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import ReactNativeModal from 'react-native-modal'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints
} from '@gorhom/bottom-sheet'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface PostInfoModalProps {
  onClose?: () => void
  onPressShare?: () => void
  onWhyThisPost?: () => void
}

const PostInfoModal = ({
  onClose = () => {},
  onPressShare = () => {},
  onWhyThisPost = () => {}
}: PostInfoModalProps) => {
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
            <View style={styles.innerBtnContainer}>
              <TouchableOpacity>
                <View style={styles.imgbtnBackStyle}>
                  <Image source={Images.link} resizeMode={'contain'} style={styles.imgbtnStyle} />
                </View>
                <Text style={styles.hintText}>{t('FD255')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onClose()
                  onPressShare()
                }}
              >
                <View style={styles.imgbtnBackStyle}>
                  <Image source={Images.share} resizeMode={'contain'} style={styles.imgbtnStyle} />
                </View>
                <Text style={styles.hintText}>{t('FD256')}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.imgbtnBackStyle, styles.imgBorderPrimary]}>
                  <Image
                    source={Images.info_line}
                    resizeMode={'contain'}
                    style={[styles.imgbtnStyle, styles.imgbtnStylePrimary]}
                  />
                </View>
                <Text style={styles.hintText}>{t('FD257')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.borderView} />
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => {
                onClose()
                onWhyThisPost()
              }}
            >
              <Text style={styles.textbutton}>{t('FD258')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBack}>
              <Text style={styles.textbutton}>{t('FD259')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBack}>
              <Text style={styles.textbutton}>{t('FD260')}</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </ReactNativeModal>
  )
}

export default PostInfoModal

const styles = StyleSheet.create({
  innerBtnContainer: {
    ...CommonStyles.row,
    alignSelf: 'center',
    marginTop: verticalScale(15),
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15)
  },
  handleIndicatorStyle: {
    width: '20%'
  },
  btnBack: {
    height: verticalScale(45),
    ...CommonStyles.centerItem
  },
  imgbtnBackStyle: {
    width: verticalScale(40),
    height: verticalScale(40),
    marginHorizontal: scale(15),
    borderWidth: 2.5,
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(5)
  },
  imgbtnStyle: {
    width: '60%',
    height: '60%'
  },
  imgBorderPrimary: {
    borderWidth: 2.5,
    borderColor: Color.Primary
  },
  imgbtnStylePrimary: {
    tintColor: Color.Primary
  },
  hintText: {
    fontSize: moderateScale(9),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginTop: verticalScale(5)
  },
  borderView: {
    width: '90%',
    height: verticalScale(2),
    backgroundColor: Color.lightGrey,
    alignSelf: 'center',
    marginVertical: verticalScale(25)
  },
  textbutton: {
    width: '90%',
    alignSelf: 'center',
    fontSize: moderateScale(12.5),
    color: Color.black,
    fontFamily: Fonts.medium
  }
})
