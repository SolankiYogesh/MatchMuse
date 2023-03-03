import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'

import {Images} from '../../../Helpers'
import {verticalScale} from '../../../Helpers/Responsive'
import CommonModalHeader from '../../Modals/CommonModalHeader'

interface CardModalProps {
  onClose?: () => void
  onPressCard1?: () => void
}

const CardModal = ({onClose, onPressCard1}: CardModalProps) => {
  return (
    <CommonModalHeader onBack={onClose} onClose={onClose}>
      <TouchableOpacity onPress={onPressCard1}>
        <Image style={styles.cardimage} source={Images.blue_Card} />
      </TouchableOpacity>
      <Image style={styles.cardimage} source={Images.blue_Card2} />
    </CommonModalHeader>
  )
}

export default CardModal

const styles = StyleSheet.create({
  cardimage: {
    width: '100%',
    alignSelf: 'center',
    height: verticalScale(200)
  }
})
