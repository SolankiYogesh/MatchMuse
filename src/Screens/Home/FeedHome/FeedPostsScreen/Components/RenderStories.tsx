import React, {useState} from 'react'
import {FlatList, Pressable, View} from 'react-native'
import {MultiStoryContainer} from 'react-native-story-view'

import {STORYLIST} from '../../../../../DummyData/MatchingProfileFeeds'
import StoryComponent from './StoryComponent'
import StoryFooter from './StoryFooter'
import StoryHeader from './StoryHeader'

const RenderStories = () => {
  const [isStoryViewVisible, setIsStoryViewShow] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<number>(0)

  const openStories = (index: number) => {
    setIsStoryViewShow(true)
    setPressedIndex(index)
  }

  const renderItem = ({item, index}: any) => {
    return (
      <Pressable onPress={() => openStories(index)}>
        <StoryComponent item={item} />
      </Pressable>
    )
  }

  return (
    <View>
      <FlatList
        horizontal
        data={STORYLIST}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      {isStoryViewVisible && (
        // add other StoryContainer Props
        <MultiStoryContainer
          viewedStories={[]}
          visible={isStoryViewVisible}
          onComplete={() => setIsStoryViewShow(false)}
          stories={STORYLIST}
          renderHeaderComponent={() => <StoryHeader onClose={() => setIsStoryViewShow(false)} />}
          renderFooterComponent={() => <StoryFooter />}
          userStoryIndex={pressedIndex}
        />
      )}
    </View>
  )
}

export default RenderStories
