import React, {useCallback} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {t} from 'i18next'

import {ChatsList} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, Fonts} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import ChatMatchItem from './ChatMatchItem'

const RenderChatMatches = () => {
  const renderItem = useCallback(({item}: any) => {
    return <ChatMatchItem item={item} />
  }, [])
  return (
    <View>
      <Text style={styles.headerText}>{t('FD400')}</Text>
      <FlatList
        data={ChatsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default RenderChatMatches

const styles = StyleSheet.create({
  headerText: {
    marginVertical: verticalScale(10),
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(18),
    color: Color.black,
    marginHorizontal: scale(15)
  }
})
