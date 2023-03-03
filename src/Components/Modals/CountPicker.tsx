import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Modal from 'react-native-modal'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, Fonts, Utility} from '../../Helpers'
import {moderateScale, scale, verticalScale} from '../../Helpers/Responsive'

interface CountPickerProps {
  onClose?: () => void
  onPickCount?: (count: number) => void
  selectedNumber?: number
}

const CountPicker = (props: CountPickerProps) => {
  const {onClose, onPickCount, selectedNumber} = props
  const intData = [
    {
      number: 1,
      isSelected: false
    },
    {
      number: 2,
      isSelected: false
    },
    {
      number: 3,
      isSelected: false
    },
    {
      number: 4,
      isSelected: false
    },
    {
      number: 5,
      isSelected: false
    },
    {
      number: 6,
      isSelected: false
    },
    {
      number: 7,
      isSelected: false
    },
    {
      number: 8,
      isSelected: false
    },
    {
      number: 9,
      isSelected: false
    },
    {
      number: 10,
      isSelected: false
    }
  ]
  const [data, setData] = useState(intData)

  useEffect(() => {
    if (selectedNumber && selectedNumber !== 0 && selectedNumber <= 10) {
      const cloneData = Utility.deepClone(data)
      const index = _.findIndex(cloneData, (i: any) => i.number === selectedNumber)
      cloneData[index].isSelected = true

      setData(cloneData)
    }
  }, [selectedNumber])

  const onPressItem = (item: any) => {
    if (onPickCount) {
      onPickCount(item?.number)
    }
    if (onClose) onClose()
  }

  const renderitem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={[styles.itemContainer, item?.isSelected && styles.selectedCircle]}
      >
        <View style={styles.circle}>{item?.isSelected && <View style={styles.innerCircel} />}</View>
        <Text style={styles.countText}>{item?.number}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Modal
      coverScreen
      style={styles.modalStyle}
      isVisible
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.headertext}>{t('FD94')}</Text>
        <FlatList keyExtractor={(item) => `${item.number}`} data={data} renderItem={renderitem} />
      </View>
    </Modal>
  )
}

export default CountPicker

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0
  },
  container: {
    backgroundColor: Color.white,
    width: '90%',
    alignSelf: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(10),
    padding: scale(8)
  },
  circle: {
    width: verticalScale(20),
    height: verticalScale(20),
    borderWidth: 2,
    borderColor: Color.textGrey,
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(20)
  },
  selectedCircle: {
    borderColor: Color.Primary
  },
  innerCircel: {
    width: '70%',
    height: '70%',
    backgroundColor: Color.Primary,
    borderRadius: moderateScale(100)
  },
  headertext: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10)
  },
  countText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black
  }
})
