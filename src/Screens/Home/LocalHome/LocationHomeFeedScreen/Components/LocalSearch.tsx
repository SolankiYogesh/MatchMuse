import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import {cities} from '../../../../../DummyData/MatchingProfileFeeds'
import {CommonStyles, Utility} from '../../../../../Helpers'
import {moderateScale, scale} from '../../../../../Helpers/Responsive'
import EntertainmentFeedHeader from '../../../EntertainmentHome/EntertainmentFeedsScreen/Components/EntertainmentFeedHeader'
import DropDownView from '../../../StoreHome/StoreBagScreen/Components/DropDownView'
import RenderLocalSearchitem from './RenderLocalSearchitem'

const priceDropDownData = [t('FD337')]

const typDropDownData = [t('FD147'), 'Perfume', 'Watch', 'Gadget', 'Spry']

const ratingDropDown = [t('FD147'), 0, 1, 2, 3, 4, 5]
const LocalSearch = ({search = ''}) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(cities)
  }, [])

  useEffect(() => {
    if (!_.trim(search)) {
      setData(cities)
    } else {
      const filter = _.filter(cities, (i: any) => {
        return i?.title?.toLowerCase().indexOf(search?.toString()?.toLowerCase()) > -1
      })

      setData(filter)
    }
  }, [search])

  const onSelectedItem = (value: any, by: number) => {
    if (value === t('FD147')) {
      setData(cities)
      return
    }
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

  const onPressRemove = (item: any) => {
    const deepClone = Utility.deepClone(data)

    const filterData = _.filter(deepClone, (i: any) => i?.id !== item?.id)

    setData(filterData)
  }

  const renderItem = ({item}: any) => <RenderLocalSearchitem onPress={onPressRemove} item={item} />

  return (
    <View>
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
      <EntertainmentFeedHeader title={t('FD383')} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default LocalSearch

const styles = StyleSheet.create({
  dropDownContainer: {
    ...CommonStyles.centerItem,
    ...CommonStyles.row,
    borderRadius: moderateScale(10),
    padding: scale(10),
    alignSelf: 'center',
    marginLeft: scale(4),
    zIndex: 20000
  }
})
