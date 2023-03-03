import React, {useMemo} from 'react'
import {FlatList, ScrollView} from 'react-native'
import _ from 'lodash'

import {REELS} from '../../../DummyData/MatchingProfileFeeds'
import InstaPostView from '../../../Screens/Home/FeedHome/FeedPostsScreen/Components/InstaPostView'

const ProfileFeedTab = () => {
  const post = useMemo(() => _.filter(REELS, (i) => i.isBookmark), [])

  const renderItem = ({item}: any) => {
    return <InstaPostView isProfile item={item} />
  }
  return (
    <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <FlatList
        // scrollEnabled={false}
        data={post}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        windowSize={1}
        maxToRenderPerBatch={0}
        pagingEnabled
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  )
}

export default ProfileFeedTab
