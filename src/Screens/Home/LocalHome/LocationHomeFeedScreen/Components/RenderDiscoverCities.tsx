import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import {cities} from '../../../../../DummyData/MatchingProfileFeeds'
import {verticalScale} from '../../../../../Helpers/Responsive'
import EntertainmentFeedHeader from '../../../EntertainmentHome/EntertainmentFeedsScreen/Components/EntertainmentFeedHeader'
import LocalItem from './LocalItem'

const RenderDiscoverCities = () => {
  const renderItem = ({item}: any) => <LocalItem item={item} />
  return (
    <View>
      <EntertainmentFeedHeader title={t('FD365')} />
      <FlatList
        renderItem={renderItem}
        data={cities}
        horizontal
        style={styles.listStyle}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default RenderDiscoverCities

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: verticalScale(10)
  }
})
