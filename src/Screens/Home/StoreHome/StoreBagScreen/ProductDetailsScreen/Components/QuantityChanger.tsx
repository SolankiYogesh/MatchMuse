import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Color, CommonStyles, Fonts, Images} from '../../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../../Helpers/Responsive'

interface QuantityChangerProps {
  onChange?: (value: number) => void
}

const QuantityChanger = (props: QuantityChangerProps) => {
  const {onChange = () => {}} = props
  const [count, setCount] = useState(1)

  useEffect(() => {
    onChange(count)
  }, [count, onChange])

  const onPressPlus = () => {
    setCount((state) => (state < 10 ? state + 1 : state))
  }
  const onPressMinus = () => {
    setCount((state) => (state === 1 ? 1 : state - 1))
  }

  return (
    <View style={CommonStyles.row}>
      <TouchableOpacity style={styles.btnContainer} onPress={onPressMinus}>
        <Image source={Images.minus} style={styles.imgStyle} resizeMode={'contain'} />
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity onPress={onPressPlus} style={styles.btnContainer}>
        <Image source={Images.plus} style={styles.imgStyle} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  )
}

export default QuantityChanger

const styles = StyleSheet.create({
  btnContainer: {
    height: verticalScale(25),
    width: verticalScale(25),
    ...CommonStyles.centerItem,
    borderWidth: 1,
    borderRadius: moderateScale(5)
  },
  imgStyle: {
    width: '50%',
    height: '50%'
  },
  countText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginHorizontal: scale(10)
  }
})
