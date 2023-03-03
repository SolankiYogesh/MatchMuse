import React, {useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

import MainHeader from '../../../Components/MainHeader/MainHeader'
import {Emitter, Screen} from '../../../Helpers'
import DrawerNavigationRoute from '../../../Router/DrawerNavigationRoute'
import MatchingFeedsScreen from './MatchingFeedsScreen/MatchingFeedsScreen'
import NotificationScreen from './NotificationScreen/NotificationScreen'
import ReelsScreen from './ReelsScreen/ReelsScreen'

const MatchingHomeScreen = () => {
  const navigation: any = useNavigation()
  useEffect(() => {
    Emitter.addListener('navID', (value: number) => {
      if (value === 1) {
        navigation.navigate(Screen.Chat)
      }
      if (value === 2) {
        navigation.navigate(Screen.NotificationScreen)
      } else if (value === 3) {
        navigation.navigate(Screen.AccountScreen)
      } else if (value === 4) {
        navigation.navigate(Screen.Setting)
      } else if (value === 5) {
        navigation.navigate(Screen.BlueCardBuysScreen)
      } else if (value === 6) {
        navigation.navigate(Screen.PartnerScreen)
      }
    })
  }, [navigation])

  const routes = [
    {
      name: Screen.MatchingFeedsScreen,
      component: MatchingFeedsScreen,
      isIntial: true
    },
    {
      name: Screen.ReelsScreen,
      component: ReelsScreen
    },
    {
      name: Screen.NotificationScreen,
      component: NotificationScreen
    },
    {
      name: Screen.DrawerNavigation,
      component: DrawerNavigationRoute
    }
  ]
  return <MainHeader Routes={routes} />
}

export default MatchingHomeScreen
