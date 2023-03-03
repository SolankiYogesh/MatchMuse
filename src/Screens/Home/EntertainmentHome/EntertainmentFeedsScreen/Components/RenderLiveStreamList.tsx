import React, {useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import {FEEDS} from '../../../../../DummyData/MatchingProfileFeeds'
import {verticalScale} from '../../../../../Helpers/Responsive'
import EntertainmentFeedHeader from './EntertainmentFeedHeader'
import VideoLiveSteamItem from './VideoLiveSteamItem'

const streams = [
  {
    image:
      'https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700520/82916256-dance-party-with-group-people-dancing-women-and-men-have-fun-in-night-club-happy-girl-with-tousled-h.jpg',
    deskText: 'SOME THINK NEVER DONE',
    views: 20,
    username: 'Johnson',
    profileImage: FEEDS[1].image
  },
  {
    image:
      'https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700520/82916256-dance-party-with-group-people-dancing-women-and-men-have-fun-in-night-club-happy-girl-with-tousled-h.jpg',
    deskText: 'SOME THINK NEVER DONE',
    views: 100,
    username: 'GreatWisdon',
    profileImage: FEEDS[2].image
  },
  {
    image:
      'https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700520/82916256-dance-party-with-group-people-dancing-women-and-men-have-fun-in-night-club-happy-girl-with-tousled-h.jpg',
    deskText: 'SOME THINK NEVER DONE',
    views: 50,
    username: 'JioDio',
    profileImage: FEEDS[3].image
  },
  {
    image:
      'https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700520/82916256-dance-party-with-group-people-dancing-women-and-men-have-fun-in-night-club-happy-girl-with-tousled-h.jpg',
    deskText: 'SOME THINK NEVER DONE',
    views: 30,
    username: 'Dharmesh',
    profileImage: FEEDS[4].image
  }
]

const RenderLiveStreamList = ({title = t('FD318')}: any) => {
  const [isColumn, setISColumn] = useState(false)
  const [key, setKey] = useState(0)

  const renderitem = ({item}: any) => {
    return <VideoLiveSteamItem item={item} isColumn={isColumn} />
  }

  return (
    <View>
      <EntertainmentFeedHeader
        title={title}
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
          keyExtractor={(item) => item.views?.toString()}
          numColumns={2}
          style={styles.container}
        />
      ) : (
        <FlatList
          key={key}
          data={streams}
          renderItem={renderitem}
          keyExtractor={(item) => item.views?.toString()}
          horizontal
          style={styles.container}
        />
      )}
    </View>
  )
}

export default RenderLiveStreamList

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(15)
  }
})
