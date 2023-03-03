import React from 'react'

import MainHeader from '../../../Components/MainHeader/MainHeader'
import {Screen} from '../../../Helpers'
import FeedFavoriteScreen from './FeedFavoriteScreen/FeedFavoriteScreen'
import FeedPostsScreen from './FeedPostsScreen/FeedPostsScreen'
import FeedServiceScreen from './FeedServiceScreen/FeedServiceScreen'
import FeedsReelsScreen from './FeedsReelsScreen/FeedsReelsScreen'

const FeedHomeScreen = () => {
  const routes = [
    {
      name: Screen.FeedPostsScreen,
      component: FeedPostsScreen,
      isIntial: true
    },
    {
      name: Screen.FeedsReelsScreen,
      component: FeedsReelsScreen
    },
    {
      name: Screen.FeedServiceScreen,
      component: FeedServiceScreen
    },
    {
      name: Screen.FeedFavoriteScreen,
      component: FeedFavoriteScreen
    }
  ]
  return <MainHeader Routes={routes} />
}

export default FeedHomeScreen
