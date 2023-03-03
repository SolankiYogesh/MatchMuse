import React, {useCallback, useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {cities} from '../../../../DummyData/MatchingProfileFeeds'
import {CommonStyles} from '../../../../Helpers'
import {verticalScale} from '../../../../Helpers/Responsive'
import EntertainmentFeedHeader from '../../EntertainmentHome/EntertainmentFeedsScreen/Components/EntertainmentFeedHeader'
import DropDownView from '../../StoreHome/StoreBagScreen/Components/DropDownView'
import FootItem from './Components/FootItem'

const priceDropDownData = [t('FD337')]

const typDropDownData = [t('FD147'), 'Perfume', 'Watch', 'Gadget', 'Spry']

const ratingDropDown = [t('FD147'), 0, 1, 2, 3, 4, 5]
const LocationFilterScreen = () => {
  const [data, setData] = useState(cities)

  const onSelectedItem = (value: any, by: number) => {
    if (by === 0) {
      return
    }
    if (by === 1) {
      const filter = _.filter(cities, (i: any) => {
        return i?.type?.toLowerCase().indexOf(value?.toString()?.toLowerCase()) > -1
      })
      setData(filter)
      return
    }
    if (by === 2) {
      const filter = _.filter(cities, (i: any) => {
        return i?.rating?.toString()?.toLowerCase().indexOf(value?.toString()?.toLowerCase()) > -1
      })
      setData(filter)
    }
  }

  const renderVerticalSeperator = () => <View style={styles.seperator} />

  const renderItem = useCallback(({item}: any) => {
    return <FootItem item={item} />
  }, [])

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
      <EntertainmentFeedHeader title={t('FD367')} />
      <FlatList
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={renderVerticalSeperator}
        style={styles.listStyle}
        numColumns={2}
      />
    </AppContainer>
  )
}

export default LocationFilterScreen
const styles = StyleSheet.create({
  dropDownContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-evenly',
    width: '95%',
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  listStyle: {
    marginVertical: verticalScale(10)
  },
  seperator: {
    marginVertical: verticalScale(10)
  }
})
