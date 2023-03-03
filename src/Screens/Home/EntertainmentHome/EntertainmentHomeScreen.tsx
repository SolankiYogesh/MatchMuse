import React from 'react'

import MainHeader from '../../../Components/MainHeader/MainHeader'
import {Screen} from '../../../Helpers'
import FeedFavoriteScreen from '../FeedHome/FeedFavoriteScreen/FeedFavoriteScreen'
import EntertainmentFeedsScreen from './EntertainmentFeedsScreen/EntertainmentFeedsScreen'
import EntertainmentMusicScreen from './EntertainmentMusicScreen/EntertainmentMusicScreen'
import EntertainmentVideoScreen from './EntertainmentVideoScreen/EntertainmentVideoScreen'

const EntertainmentHomeScreen = () => {
  const routes = [
    {
      name: Screen.EntertainmentFeedsScreen,
      component: EntertainmentFeedsScreen,
      isIntial: true
    },
    {
      name: Screen.EntertainmentVideoScreen,
      component: EntertainmentVideoScreen
    },
    {
      name: Screen.EntertainmentMusicScreen,
      component: EntertainmentMusicScreen
    },
    {
      name: Screen.FeedFavoriteScreen,
      component: FeedFavoriteScreen
    }
  ]
  return <MainHeader Routes={routes} />
}

export default EntertainmentHomeScreen
