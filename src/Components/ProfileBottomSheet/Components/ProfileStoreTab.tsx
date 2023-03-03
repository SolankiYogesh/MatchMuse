import React, {useMemo} from 'react'
import {FlatList, ScrollView} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import {REELS} from '../../../DummyData/MatchingProfileFeeds'
import InstaPostView from '../../../Screens/Home/FeedHome/FeedPostsScreen/Components/InstaPostView'
import ProductListContainer from '../../../Screens/Home/StoreHome/StoreHomeProductScreen/Components/ProductListContainer'

const ProfileStoreTab = () => {
  const post = useMemo(() => _.filter(REELS, (i) => i.isBookmark), [])
  return (
    <ScrollView nestedScrollEnabled>
      <InstaPostView item={REELS[5]} />
      <ProductListContainer title={String(t('FD427'))} />
      <FlatList
        scrollEnabled={false}
        data={post}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        windowSize={1}
        maxToRenderPerBatch={0}
        pagingEnabled
        renderItem={({item}) => <InstaPostView item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  )
}

export default ProfileStoreTab
