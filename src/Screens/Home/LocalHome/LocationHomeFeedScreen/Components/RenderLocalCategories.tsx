import React, {useMemo} from 'react'
import {FlatList, ScrollView, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import {cities} from '../../../../../DummyData/MatchingProfileFeeds'
import {verticalScale} from '../../../../../Helpers/Responsive'
import EntertainmentFeedHeader from '../../../EntertainmentHome/EntertainmentFeedsScreen/Components/EntertainmentFeedHeader'
import LocalItem from './LocalItem'

const RenderLocalCategories = () => {
  const renderItem = ({item}: any) => <LocalItem isLikeView={false} item={item} />
  const firstPart = useMemo(() => cities.slice(0, Math.floor(cities.length / 2)), [cities])
  const secondPart = useMemo(() => cities.slice(Math.floor(cities.length / 2)), [cities])
  return (
    <View>
      <EntertainmentFeedHeader title={t('FD366')} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listStyle}>
        <View>
          <FlatList
            renderItem={renderItem}
            data={firstPart}
            horizontal
            scrollEnabled={false}
            style={styles.listStyle}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            renderItem={renderItem}
            data={secondPart}
            horizontal
            scrollEnabled={false}
            style={styles.listStyle}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default RenderLocalCategories

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: verticalScale(10)
  }
})
