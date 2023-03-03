import React from 'react'
import {FlatList, ScrollView, Text, View} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import {
  NOTIFICATIONSACTIVITIES,
  NOTIFICATIONSMATCHES
} from '../../../../DummyData/MatchingProfileFeeds'
import RenderActivityItem from './Components/RenderActivityItem'
import RenderMatchItem from './Components/RenderMatchItem'
import {styles} from './NotificationScreenStyle'

const NotificationScreen = () => {
  const renderMatchItem = ({item}: any) => {
    return <RenderMatchItem item={item} />
  }

  const renderActivityItem = ({item}: any) => {
    return <RenderActivityItem item={item} />
  }

  const renderItemSeperator = () => {
    return <View style={styles.itemSeparator} />
  }

  const renderMatchView = () => {
    return (
      <FlatList
        ItemSeparatorComponent={renderItemSeperator}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        data={NOTIFICATIONSMATCHES}
        renderItem={renderMatchItem}
        contentContainerStyle={styles.contentStyle}
      />
    )
  }

  const renderActivites = () => {
    return (
      <FlatList
        contentContainerStyle={styles.activityContentStyle}
        data={NOTIFICATIONSACTIVITIES}
        renderItem={renderActivityItem}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    )
  }

  return (
    <AppContainer>
      <ScrollView>
        <Text style={styles.headerTitles}>{t('FD134')}</Text>
        {renderMatchView()}
        <Text style={styles.headerTitles}>{t('FD135')}</Text>
        {renderActivites()}
      </ScrollView>
    </AppContainer>
  )
}

export default NotificationScreen
