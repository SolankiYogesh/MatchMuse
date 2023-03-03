import React from 'react'

import MainHeader from '../../../Components/MainHeader/MainHeader'
import {Screen} from '../../../Helpers'
import LocationEventScreen from './LocationEventScreen/LocationEventScreen'
import LocationFavoriteScreen from './LocationFavoriteScreen/LocationFavoriteScreen'
import LocationFilterScreen from './LocationFilterScreen/LocationFilterScreen'
import LocationHomeFeedScreen from './LocationHomeFeedScreen/LocationHomeFeedScreen'

const LocalHomeScreen = () => {
  const routes = [
    {
      name: Screen.LocationHomeFeedScreen,
      component: LocationHomeFeedScreen,
      isIntial: true
    },
    {
      name: Screen.LocationFilterScreen,
      component: LocationFilterScreen
    },
    {
      name: Screen.LocationEventScreen,
      component: LocationEventScreen
    },
    {
      name: Screen.LocationFavoriteScreen,
      component: LocationFavoriteScreen
    }
  ]
  return <MainHeader Routes={routes} />
}

export default LocalHomeScreen
