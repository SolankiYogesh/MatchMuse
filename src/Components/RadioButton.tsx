import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import _ from 'lodash'

import {Color, CommonStyles, Fonts} from '../Helpers'
import {INPUT_HEIGHT, moderateScale, scale} from '../Helpers/Responsive'

interface RadioButtonProps {
  data: any[]
  onSelect?: (value: string) => void
  value?: string
}

const RadioButton = (props: RadioButtonProps) => {
  const {onSelect = () => {}, data = [], value = ''} = props

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (onSelect) onSelect(data[0])
    if (value) {
      const findIndex = _.findIndex(data, (i) => i === value)

      if (findIndex > 0) {
        if (onSelect) onSelect(data[findIndex])
        setActiveIndex(findIndex)
      }
    }
  }, [])

  const onPressTab = (item: any, index: number) => {
    setActiveIndex(index)
    if (onSelect) onSelect(item)
  }

  return (
    <View style={styles.mainContainer}>
      {_.map(data, (i: any, index: number) => {
        const selected = activeIndex === index
        return selected ? (
          <TouchableOpacity
            activeOpacity={0.8}
            style={CommonStyles.flex}
            key={index}
            onPress={() => onPressTab(i, index)}
          >
            <LinearGradient
              style={[styles.itemView, index !== data?.length - 1 && styles.spaccer]}
              start={{x: 0.3, y: 0}}
              end={{x: 0.8, y: 1}}
              locations={[0.1865, 0.8077]}
              colors={[Color.pink_shade1, Color.red_shade1]}
            >
              <Text style={[styles.itemText, styles.colorText]}>{i}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => onPressTab(i, index)}
            style={[styles.itemView, index !== data?.length - 1 && styles.spaccer]}
          >
            <Text style={styles.itemText}>{i}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(5)
  },
  itemView: {
    // padding: scale(10),
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: INPUT_HEIGHT
  },
  spaccer: {
    marginRight: scale(10)
  },
  itemText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.Primary
  },
  colorText: {
    color: Color.white
  }
})
