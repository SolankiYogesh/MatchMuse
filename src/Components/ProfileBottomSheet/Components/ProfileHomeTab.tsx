import React, {useMemo} from 'react'
import {FlatList, ScrollView, StyleSheet, Text} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import {products, REELS} from '../../../DummyData/MatchingProfileFeeds'
import {Color, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'
import InstaPostView from '../../../Screens/Home/FeedHome/FeedPostsScreen/Components/InstaPostView'
import ProductListContainer from '../../../Screens/Home/StoreHome/StoreHomeProductScreen/Components/ProductListContainer'
import RenderPorfileStories from './RenderPorfileStories'

const ProfileHomeTab = ({isShopView = false}: any) => {
  const post = useMemo(() => _.filter(REELS, (i) => i.isBookmark), [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.labelText}>{t('FD313')}</Text>
      <RenderPorfileStories />
      {isShopView && (
        <ProductListContainer
          isHeader={false}
          data={products}
          isScrollable
          title={String(t('FD334'))}
          isMenu
          isColumnView
        />
      )}
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

export default ProfileHomeTab

const styles = StyleSheet.create({
  labelText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black,
    textTransform: 'uppercase',
    marginVertical: verticalScale(10),
    marginLeft: scale(10)
  }
})
