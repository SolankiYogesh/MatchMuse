import React, {useState} from 'react'
import {
  Animated,
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View
} from 'react-native'
import ReactNativeModal from 'react-native-modal'

import {Color, CommonStyles, Images} from '../../Helpers'
import {scale, verticalScale} from '../../Helpers/Responsive'
import AppContainer from '../AppContainer'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

interface itemDataProps {
  x: number
  y: number
  width: number
  height: number
}

interface AnimatedImageViewerProps {
  itemData: itemDataProps
  url?: string
  onClose?: () => void
}

const AnimatedImageViewer = (props: AnimatedImageViewerProps) => {
  const {onClose, itemData, url} = props
  const {x, y, width, height} = itemData
  const [expanded, setExpanded] = useState(false)

  const close = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        150,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      ),
      () => {
        if (onClose) onClose()
      }
    )
    setExpanded(false)
  }

  const onModalShow = () => {
    LayoutAnimation.easeInEaseOut()
    setExpanded(true)
  }
  return (
    <ReactNativeModal
      onModalShow={onModalShow}
      isVisible
      onBackdropPress={onClose}
      style={CommonStyles.modalStyle}
      onBackButtonPress={close}
    >
      <AppContainer>
        <View style={[CommonStyles.flex, CommonStyles.centerItem]}>
          {expanded && <Animated.View style={StyleSheet.absoluteFill} />}
          <View
            style={[
              expanded
                ? CommonStyles.viewFull
                : {
                    height,
                    width,
                    left: x,
                    top: y,
                    ...styles.postionsAbsolute
                  },
              styles.expandViewStyle
            ]}
          >
            <Image
              source={{
                uri: url
              }}
              resizeMode={'contain'}
              style={CommonStyles.viewFull}
            />
            {expanded && (
              <TouchableOpacity style={styles.btnCOntainer} onPress={close}>
                <Image style={styles.closeImage} resizeMode={'contain'} source={Images.leftArrow} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </AppContainer>
    </ReactNativeModal>
  )
}

export default AnimatedImageViewer

const styles = StyleSheet.create({
  expandViewStyle: {
    backgroundColor: Color.black,
    overflow: 'hidden'
  },
  closeImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    tintColor: Color.white
  },
  btnCOntainer: {
    position: 'absolute',
    left: scale(15),
    top: verticalScale(15)
  },
  postionsAbsolute: {
    position: 'absolute'
  }
})
