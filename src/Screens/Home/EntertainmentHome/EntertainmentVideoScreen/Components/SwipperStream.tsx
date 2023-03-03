import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import _ from 'lodash'

import {FEEDS} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles} from '../../../../../Helpers'
import {scale, verticalScale, W_WIDTH} from '../../../../../Helpers/Responsive'
import VideoLiveSteamItem from '../../EntertainmentFeedsScreen/Components/VideoLiveSteamItem'

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
  }
]

const SwipperStream = () => {
  const [index, setIndex] = useState(0)

  const renderitem = ({item}: any) => {
    return <VideoLiveSteamItem isBigView item={item} />
  }
  return (
    <View>
      <Carousel
        width={W_WIDTH}
        height={W_WIDTH / 2}
        data={streams}
        onSnapToItem={setIndex}
        renderItem={renderitem}
      />
      <View style={[CommonStyles.row, styles.paginationContainer]}>
        {_.map(streams, (i, ind) => {
          return <View style={[styles.shape, index === ind && styles.selectedShape]} />
        })}
      </View>
    </View>
  )
}

export default SwipperStream

const styles = StyleSheet.create({
  shape: {
    width: scale(35),
    height: verticalScale(3),
    backgroundColor: Color.darkGrey,
    transform: [{skewX: '330deg'}],
    marginHorizontal: scale(2)
  },
  selectedShape: {
    backgroundColor: Color.Primary
  },
  paginationContainer: {
    marginVertical: verticalScale(10),
    alignSelf: 'center'
  }
})
