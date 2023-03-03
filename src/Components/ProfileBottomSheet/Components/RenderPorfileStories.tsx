import React, {useMemo, useState} from 'react'
import {FlatList, Pressable, View} from 'react-native'
import {MultiStoryContainer} from 'react-native-story-view'
import {t} from 'i18next'
import _ from 'lodash'

import {STORYLIST} from '../../../DummyData/MatchingProfileFeeds'
import {Images} from '../../../Helpers'
import StoryComponent from '../../../Screens/Home/FeedHome/FeedPostsScreen/Components/StoryComponent'
import StoryFooter from '../../../Screens/Home/FeedHome/FeedPostsScreen/Components/StoryFooter'
import StoryHeader from '../../../Screens/Home/FeedHome/FeedPostsScreen/Components/StoryHeader'

const storyIcons = [
  {
    image: Images.sports,
    text: t('FD299')
  },
  {
    image: Images.vacations,
    text: t('FD314')
  },
  {
    image: Images.restaurants,
    text: t('FD315')
  },
  {
    image: Images.regeneration,
    text: t('FD316')
  }
]

const RenderPorfileStories = () => {
  const [isStoryViewVisible, setIsStoryViewShow] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<number>(0)
  const stories = useMemo(() => _.slice(STORYLIST, 0, 4), [])

  const openStories = (index: number) => {
    setIsStoryViewShow(true)
    setPressedIndex(index)
  }

  const renderItem = ({item, index}: any) => {
    return (
      <Pressable onPress={() => openStories(index)}>
        <StoryComponent item={item} isProfile profileImage={storyIcons[index]} />
      </Pressable>
    )
  }

  return (
    <View>
      <FlatList
        horizontal
        data={stories}
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
          stories={stories}
          renderHeaderComponent={() => <StoryHeader onClose={() => setIsStoryViewShow(false)} />}
          renderFooterComponent={() => <StoryFooter />}
          userStoryIndex={pressedIndex}
        />
      )}
    </View>
  )
}

export default RenderPorfileStories
