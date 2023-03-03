import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {products} from '../../../../DummyData/MatchingProfileFeeds'
import {CommonStyles} from '../../../../Helpers'
import {verticalScale} from '../../../../Helpers/Responsive'
import ProductListContainer from '../StoreHomeProductScreen/Components/ProductListContainer'
import DropDownView from './Components/DropDownView'

const priceDropDownData = [t('FD337')]

const typDropDownData = [t('FD147'), 'Perfume', 'Watch', 'Gadget', 'Spry']

const ratingDropDown = [t('FD147'), 0, 1, 2, 3, 4, 5]

const StoreBagScreen = () => {
  const [data, setData] = useState(products)

  const onSelectedItem = (value: any, by: number) => {
    if (by === 0) {
      return
    }
    if (by === 1) {
      const filter = _.filter(products, (i: any) => {
        return i?.type?.toLowerCase().indexOf(value?.toString()?.toLowerCase()) > -1
      })
      setData(filter)
      return
    }
    if (by === 2) {
      const filter = _.filter(products, (i: any) => {
        return i?.rating?.toString()?.toLowerCase().indexOf(value?.toString()?.toLowerCase()) > -1
      })
      setData(filter)
    }
  }
  return (
    <AppContainer>
      <View style={styles.dropDownContainer}>
        <DropDownView
          data={priceDropDownData}
          onSelectedItem={(value) => onSelectedItem(value, 0)}
        />
        <DropDownView data={typDropDownData} onSelectedItem={(value) => onSelectedItem(value, 1)} />
        <DropDownView
          isRating
          data={ratingDropDown}
          onSelectedItem={(value) => onSelectedItem(value, 2)}
        />
      </View>
      <ProductListContainer isScrollable isColumnView data={data} isHeader={false} />
    </AppContainer>
  )
}

export default StoreBagScreen

const styles = StyleSheet.create({
  dropDownContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-evenly',
    width: '95%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  }
})
