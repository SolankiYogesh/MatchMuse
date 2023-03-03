import React, {useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import {FEEDS} from '../../../../../DummyData/MatchingProfileFeeds'
import {scale, verticalScale} from '../../../../../Helpers/Responsive'
import AudioLiveStreamItem from './AudioLiveStreamItem'
import EntertainmentFeedHeader from './EntertainmentFeedHeader'

const streams = [
  {
    deskText: 'This never change',
    users: 20,
    views: 113,
    username: 'Johnson',
    profileImage: FEEDS[1].image
  },
  {
    deskText: 'This never change',
    users: 1,
    views: 12000,
    username: 'GreatWisdon',
    profileImage: FEEDS[2].image
  },
  {
    deskText: 'This never change',
    users: 3,
    views: 337,
    username: 'JioDio',
    profileImage: FEEDS[3].image
  },
  {
    deskText: 'This never change',
    users: 5,
    views: 125,
    username: 'Dharmesh',
    profileImage: FEEDS[4].image
  }
]

const RenderAudioLiveSteamList = () => {
  const [isColumn, setISColumn] = useState(false)
  const [key, setKey] = useState(0)

  const renderitem = ({item}: any) => {
    return <AudioLiveStreamItem isColumn={isColumn} item={item} />
  }

  const renderSeperator = () => <View style={styles.seperator} />

  const renderVerticalSeperator = () => <View style={styles.verticalSeprator} />

  return (
    <View>
      <EntertainmentFeedHeader
        title={t('FD319')}
        onPressMenu={() => {
          setISColumn(!isColumn)
          setKey(key + 1)
        }}
      />
      {isColumn ? (
        <FlatList
          key={key}
          data={streams}
          renderItem={renderitem}
          keyExtractor={(item) => item.users?.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderVerticalSeperator}
          style={styles.container}
        />
      ) : (
        <FlatList
          key={key}
          data={streams}
          renderItem={renderitem}
          keyExtractor={(item) => item.users?.toString()}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeperator}
          style={styles.container}
        />
      )}
    </View>
  )
}

export default RenderAudioLiveSteamList

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(15)
  },
  seperator: {
    marginHorizontal: scale(10)
  },
  verticalSeprator: {
    marginVertical: verticalScale(10)
  }
})
