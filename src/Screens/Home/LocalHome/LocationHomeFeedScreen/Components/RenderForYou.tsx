import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import {verticalScale} from '../../../../../Helpers/Responsive'
import EntertainmentFeedHeader from '../../../EntertainmentHome/EntertainmentFeedsScreen/Components/EntertainmentFeedHeader'
import Hotelitem from './Hotelitem'

const dummyHotels = [
  {
    title: 'Hotel Hafen',
    views: Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 6),
    isDeal: Math.random() < 0.5
  },
  {
    title: 'Hotel Hafen',
    views: Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 6),
    isDeal: Math.random() < 0.5
  },
  {
    title: 'Hotel XYZ',
    views: Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 6),
    isDeal: Math.random() < 0.5
  },
  {
    title: 'Hotel Lifaj',
    views: Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 6),
    isDeal: Math.random() < 0.5
  },
  {
    title: 'Hotel Kasyap',
    views: Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 6),
    isDeal: Math.random() < 0.5
  }
]

const RenderForYou = () => {
  const renderItem = ({item}: any) => <Hotelitem item={item} />
  return (
    <View>
      <EntertainmentFeedHeader title={t('FD367')} />
      <FlatList
        data={dummyHotels}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        style={styles.listStyle}
      />
    </View>
  )
}

export default RenderForYou

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: verticalScale(10)
  }
})
