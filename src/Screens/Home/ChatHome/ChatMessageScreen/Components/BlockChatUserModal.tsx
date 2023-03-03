import React, {useMemo, useRef, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import ReactNativeModal from 'react-native-modal'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints
} from '@gorhom/bottom-sheet'
import {t} from 'i18next'
import _ from 'lodash'

import AppButton from '../../../../../Components/AppButton'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../../../../Helpers'
import {BUTTON_HEIGHT, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface BlockChatUserModalProps {
  onClose?: () => void
  item?: any
}

const blockButtons = [
  {
    image: Images.groupImage,
    text: t('FD417'),
    isSelected: false
  },
  {
    image: Images.user_1,
    text: t('FD418'),
    isSelected: true
  }
]

const BlockChatUserModal = (props: BlockChatUserModalProps) => {
  const {onClose = () => {}, item} = props
  const [options, setOptions] = useState(blockButtons)
  const bottomSheetRef = useRef<BottomSheet>(null)
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])
  const {animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout} =
    useBottomSheetDynamicSnapPoints(initialSnapPoints)

  const onPressItem = (item: any) => {
    const deepClone = Utility.deepClone(options)
    for (let index = 0; index < deepClone.length; index++) {
      deepClone[index].isSelected = false
    }
    const index = _.findIndex(deepClone, (i: any) => i?.text === item?.text)
    deepClone[index].isSelected = true
    setOptions(deepClone)
  }

  const close = () => {
    bottomSheetRef.current?.close()
    if (onClose) onClose()
  }

  return (
    <ReactNativeModal statusBarTranslucent isVisible coverScreen style={CommonStyles.modalStyle}>
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
            <Text style={styles.nameText}>{`${t('FD415')} ${item?.name} ?`}</Text>
            <Text style={styles.descText}>{`${t('FD416')}`}</Text>
            {_.map(options, (i) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => onPressItem(i)}
                  style={styles.itemContainer}
                >
                  <Image source={i.image} style={styles.imageStyle} resizeMode={'contain'} />
                  <Text style={styles.itemText}>{i?.text}</Text>
                  <View style={[styles.circleView, i.isSelected && styles.selectedCicrle]} />
                </TouchableOpacity>
              )
            })}
            <AppButton gradientStyleContainer={styles.gradientStyleContainer} title={t('FD415')} />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </ReactNativeModal>
  )
}

export default BlockChatUserModal

const styles = StyleSheet.create({
  handleIndicatorStyle: {
    width: '20%'
  },
  nameText: {
    textAlign: 'center',
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginTop: verticalScale(40),
    marginHorizontal: scale(20)
  },
  descText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.semi_bold,
    color: Color.textGrey,
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: scale(20),
    marginVertical: verticalScale(20)
  },
  imageStyle: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.Primary
  },
  itemContainer: {
    ...CommonStyles.row,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10)
  },
  itemText: {
    marginHorizontal: scale(10),
    flex: 1
  },
  circleView: {
    width: verticalScale(25),
    height: verticalScale(25),
    borderRadius: moderateScale(300),
    borderWidth: 1,
    borderColor: Color.Primary
  },
  selectedCicrle: {
    borderWidth: 7
  },
  gradientStyleContainer: {
    height: BUTTON_HEIGHT,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(20)
  }
})
