import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import Modal from 'react-native-modal'

import {Color, CommonStyles, Images} from '../../Helpers'
import {moderateScale, scale, verticalScale} from '../../Helpers/Responsive'

interface CommonModalHeaderProps {
  children?: React.ReactNode
  onClose?: () => void
  onBack?: () => void
}

const CommonModalHeader = ({
  children,
  onClose = () => {},
  onBack = () => {}
}: CommonModalHeaderProps) => {
  return (
    <Modal
      onBackButtonPress={onBack}
      onBackdropPress={onBack}
      isVisible
      coverScreen
      style={CommonStyles.modalStyle}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeImage} onPress={onClose}>
          <Image source={Images.close} resizeMode={'contain'} style={styles.iconStyle} />
        </TouchableOpacity>
        {children}
      </View>
    </Modal>
  )
}

export default CommonModalHeader

const styles = StyleSheet.create({
  closeImage: {
    height: verticalScale(18),
    width: verticalScale(18),
    alignSelf: 'flex-end',
    marginVertical: verticalScale(5)
  },
  iconStyle: {
    ...CommonStyles.viewFull
  },
  container: {
    backgroundColor: Color.white,
    marginHorizontal: scale(20),
    padding: scale(20),
    borderRadius: moderateScale(20)
  }
})
