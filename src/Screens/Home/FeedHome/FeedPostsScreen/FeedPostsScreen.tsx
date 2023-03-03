import React, {useState} from 'react'
import {FlatList, ScrollView} from 'react-native'

import AppContainer from '../../../../Components/AppContainer'
import {REELS} from '../../../../DummyData/MatchingProfileFeeds'
import InstaPostView from './Components/InstaPostView'
import RenderStories from './Components/RenderStories'

const FeedPostsScreen = () => {
  const [post] = useState(REELS)

  const renderItem = ({item}: any) => {
    return <InstaPostView item={item} />
  }

  return (
    <AppContainer>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <RenderStories />
        <FlatList
          scrollEnabled={false}
          data={post}
          showsVerticalScrollIndicator={false}
          windowSize={1}
          maxToRenderPerBatch={0}
          pagingEnabled
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </AppContainer>
  )
}

export default FeedPostsScreen
