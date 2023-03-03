import React from 'react'
import {Image, StyleSheet, Text} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

import StarRating from '../../../../../Components/StarRating'
import {Color, CommonStyles, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface DropDownViewProps {
  data?: any[]
  isRating?: boolean
  onSelectedItem?: (value: any) => void
}
const DropDownView = (props: DropDownViewProps) => {
  const {data = [], isRating = false, onSelectedItem = () => {}} = props

  const renderIcon = () => (
    <Image source={Images.down_arrow} style={styles.downArrow} resizeMode={'contain'} />
  )

  const renderRatingStar = (item: any, index: number) => {
    return index === 0 ? <Text style={styles.rowText}>{item}</Text> : <StarRating rating={item} />
  }

  return (
    <SelectDropdown
      onChangeSearchInputText={() => {}}
      data={data}
      onSelect={onSelectedItem}
      defaultButtonText={data[0]}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem
      }}
      renderCustomizedButtonChild={isRating ? renderRatingStar : undefined}
      renderCustomizedRowChild={isRating ? renderRatingStar : undefined}
      buttonStyle={styles.mainButtonCintainer}
      dropdownIconPosition={'right'}
      buttonTextStyle={styles.rowText}
      rowStyle={styles.itemContainer}
      renderDropdownIcon={renderIcon}
      dropdownOverlayColor={Color.transparent}
      disableAutoScroll
      statusBarTranslucent
      dropdownStyle={styles.dropDownStyle}
      rowTextStyle={styles.rowText}
      rowTextForSelection={(item) => {
        return item
      }}
    />
  )
}

export default DropDownView

const styles = StyleSheet.create({
  mainButtonCintainer: {
    ...CommonStyles.centerItem,
    ...CommonStyles.row,
    backgroundColor: Color.white,
    padding: scale(10),
    borderRadius: moderateScale(10),
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: scale(4),
    flexDirection: 'row-reverse'
  },
  downArrow: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.Primary
  },
  itemContainer: {
    backgroundColor: Color.white,
    padding: scale(5),
    zIndex: 20000,
    height: verticalScale(30),
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: verticalScale(4)
  },
  rowText: {
    fontSize: moderateScale(13),
    color: Color.Primary,
    textAlign: 'left',
    flex: 1
  },
  dropDownStyle: {
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    ...CommonStyles.shadow,
    padding: scale(5),
    backgroundColor: Color.white
  }
})
