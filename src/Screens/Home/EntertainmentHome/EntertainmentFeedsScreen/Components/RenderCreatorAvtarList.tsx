import React, {useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import ProfileBottomSheet from '../../../../../Components/ProfileBottomSheet/ProfileBottomSheet'
import {Utility} from '../../../../../Helpers'
import {verticalScale} from '../../../../../Helpers/Responsive'
import RenderUserProfileItem from '../../../FeedHome/FeedFavoriteScreen/Components/RenderUserProfileItem'
import EntertainmentFeedHeader from './EntertainmentFeedHeader'

const usersData = [
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },

  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  }
]

const RenderCreatorAvtarList = ({title = t('FD330')}: any) => {
  const [isColumn, setISColumn] = useState(false)
  const [key, setKey] = useState(0)
  const [isProfile, setISProfile] = useState(false)

  const renderItem = ({item}: any) => {
    return <RenderUserProfileItem onPress={() => setISProfile(true)} item={item} />
  }

  return (
    <View>
      <EntertainmentFeedHeader
        title={title}
        isStar
        onPressMenu={() => {
          setISColumn(!isColumn)
          setKey(key + 1)
        }}
      />

      {isColumn ? (
        <FlatList
          key={key}
          data={usersData}
          renderItem={renderItem}
          keyExtractor={(item) => item.followers?.toString()}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          style={styles.container}
        />
      ) : (
        <FlatList
          key={key}
          data={usersData}
          renderItem={renderItem}
          keyExtractor={(item) => item.followers?.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        />
      )}
      {isProfile && <ProfileBottomSheet onClose={() => setISProfile(false)} />}
    </View>
  )
}

export default RenderCreatorAvtarList

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(15)
  }
})
