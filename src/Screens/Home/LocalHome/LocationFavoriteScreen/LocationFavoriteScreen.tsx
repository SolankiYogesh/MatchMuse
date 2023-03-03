import React, {useCallback, useEffect, useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import EamptyView from '../../../../Components/EamptyView'
import {cities} from '../../../../DummyData/MatchingProfileFeeds'
import {verticalScale} from '../../../../Helpers/Responsive'
import FootItem from '../LocationFilterScreen/Components/FootItem'

const LocationFavoriteScreen = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    setData(cities)
  }, [])

  const onRemoveItem = (item: any) => {
    const filterItems = _.filter(cities, (i: any) => i.id !== item?.id)

    setData(filterItems)
  }

  const renderItem = useCallback(({item}: any) => {
    return <FootItem isAllLiked onRemoveItem={onRemoveItem} item={item} />
  }, [])

  const renderVerticalSeperator = () => <View style={styles.seperator} />

  return (
    <AppContainer>
      {data.length ? (
        <FlatList
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          ItemSeparatorComponent={renderVerticalSeperator}
          style={styles.listStyle}
          numColumns={2}
        />
      ) : (
        <View style={styles.EamptyContainer}>
          <EamptyView text={t('FD339')} />
        </View>
      )}
    </AppContainer>
  )
}

export default LocationFavoriteScreen

const styles = StyleSheet.create({
  EamptyContainer: {
    flex: 1
  },
  seperator: {
    marginVertical: verticalScale(10)
  },
  listStyle: {
    marginVertical: verticalScale(10)
  }
})
