import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import RenderFeaturedChartitem from './RenderFeaturedChartitem'

const data = [
  {
    title: 'Top Songs',
    from: 'Global',
    descText: 'Weekly Music Charts',
    colors: [Color.blue_start, Color.blue_end]
  },
  {
    title: 'Top Songs',
    from: 'Germany',
    descText: 'Weekly Music Charts',
    colors: [Color.blue_start, Color.blue_end]
  },
  {
    title: 'Top Songs',
    from: 'Viral',
    descText: 'Weekly Music Charts',
    colors: [Color.green_shade, Color.green_shade]
  },
  {
    title: 'Top Songs',
    from: 'India',
    descText: 'Weekly Music Charts',
    colors: [Color.green_shade, Color.green_shade]
  }
]

const RenderFeaturedCharts = () => {
  const renderitem = ({item}: any) => {
    return <RenderFeaturedChartitem item={item} />
  }
  return (
    <View style={CommonStyles.flex}>
      <Text style={styles.labelStyle}>{t('FD332')}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderitem}
        keyExtractor={(item) => item.from}
        style={styles.listStyle}
      />
    </View>
  )
}

export default RenderFeaturedCharts

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginVertical: verticalScale(15),
    marginLeft: scale(15)
  },
  listStyle: {
    paddingHorizontal: scale(10)
  }
})
