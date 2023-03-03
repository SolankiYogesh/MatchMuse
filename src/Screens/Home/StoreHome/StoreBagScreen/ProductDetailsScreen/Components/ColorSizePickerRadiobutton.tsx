import React, {useEffect, useState} from 'react'
import {
  FlatList,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import _ from 'lodash'

import {Color, CommonStyles, Fonts, Images} from '../../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../../Helpers/Responsive'

interface ColorSizePickerRadiobuttonProps {
  data?: string[]
  onSelect?: (value: string) => void
  isSize?: boolean
  style?: StyleProp<ViewStyle>
}

const ColorSizePickerRadiobutton = (props: ColorSizePickerRadiobuttonProps) => {
  const {data = [], onSelect = () => {}, isSize = false, style = {}} = props
  const [items, setItems] = useState<any[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const cloneData = _.map(data, (i, index) => {
      return {
        text: i,
        isSelected: index === 0
      }
    })
    setItems(cloneData)
  }, [data])

  const onPressItem = (item: any, index: number) => {
    onSelect(item?.text)
    setActiveIndex(index)
  }

  const renderItem = ({item, index}: any) => {
    const selected = activeIndex === index
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPressItem(item, index)}
        style={[
          styles.circle,
          selected && styles.selectedCircle,
          isSize && !selected && styles.sizeCircle
        ]}
      >
        {isSize ? (
          <Text style={[styles.sizeText, selected && styles.selectedText]}>{item?.text}</Text>
        ) : (
          <View style={[styles.innercircle, {backgroundColor: item?.text}]}>
            {selected && (
              <View style={styles.innerView}>
                <Image source={Images.checkRight} style={styles.check} resizeMode={'contain'} />
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={items}
      keyExtractor={(item) => item?.text}
      horizontal
      style={[styles.listStyle, style]}
      renderItem={renderItem}
    />
  )
}

export default ColorSizePickerRadiobutton

const styles = StyleSheet.create({
  circle: {
    height: verticalScale(40),
    width: verticalScale(40),
    borderRadius: moderateScale(100),
    ...CommonStyles.centerItem,
    marginHorizontal: scale(7)
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: Color.Primary
  },
  sizeCircle: {
    borderWidth: 2,
    borderColor: Color.darkGrey
  },
  innercircle: {
    height: '80%',
    width: '80%',
    borderRadius: moderateScale(100),
    ...CommonStyles.centerItem
  },
  listStyle: {
    marginVertical: verticalScale(10)
  },
  sizeText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  selectedText: {
    color: Color.Primary
  },
  check: {
    height: '60%',
    width: '60%',
    tintColor: Color.white
  },
  innerView: {
    height: verticalScale(15),
    width: verticalScale(15),
    backgroundColor: Color.Primary,
    borderRadius: moderateScale(100),
    ...CommonStyles.centerItem
  }
})
