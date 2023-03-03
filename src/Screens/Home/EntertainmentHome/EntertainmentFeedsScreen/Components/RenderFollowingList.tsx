import React from 'react'
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
    profileImage: FEEDS[1].image,
    time: 'February 16 2022,03:50',
    duration: '11:15'
  },
  {
    image:
      'https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700520/82916256-dance-party-with-group-people-dancing-women-and-men-have-fun-in-night-club-happy-girl-with-tousled-h.jpg',
    deskText: 'SOME THINK NEVER DONE',
    views: 100,
    username: 'GreatWisdon',
    profileImage: FEEDS[2].image,
    time: 'February 16 2022,03:50',
    duration: '11:15'
  },
  {
    image:
      'https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700520/82916256-dance-party-with-group-people-dancing-women-and-men-have-fun-in-night-club-happy-girl-with-tousled-h.jpg',
    deskText: 'SOME THINK NEVER DONE',
    views: 50,
    username: 'JioDio',
    profileImage: FEEDS[3].image,
    time: 'February 16 2022,03:50',
    duration: '11:15'
  },
  {
    image:
      'https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700520/82916256-dance-party-with-group-people-dancing-women-and-men-have-fun-in-night-club-happy-girl-with-tousled-h.jpg',
    deskText: 'SOME THINK NEVER DONE',
    views: 30,
    username: 'Dharmesh',
    profileImage: FEEDS[4].image,
    time: 'February 16 2022,03:50',
    duration: '11:15'
  }
]

const RenderFollowingList = ({isLable = true, title = t('FD269')}) => {
  return (
    <View>
      {isLable && <EntertainmentFeedHeader title={title} />}
      <FlatList
        data={streams}
        scrollEnabled={false}
        renderItem={({item}) => <VideoLiveSteamItem isBigView item={item} />}
        keyExtractor={(item) => item.views?.toString()}
        style={styles.container}
      />
    </View>
  )
}

export default RenderFollowingList

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(15),
    alignSelf: 'center'
  }
})
