import React from 'react'
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import AppContainer from '../Components/AppContainer'
import {Screen} from '../Helpers'
import BottomTabBar from './Components/BottomTabBar'
import EntertainMentNavigation from './EntertainMentNavigation'
import FeedNavigation from './FeedNavigation'
import LocalNavigation from './LocalNavigation'
import MatchingNavigation from './MatchingNavigation'
import SearchNavigation from './SearchNavigation'
import StoreNavigation from './StoreNavigation'

const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
  const renderCustomTabBar = (props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />
  }
  return (
    <AppContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        tabBar={renderCustomTabBar}
      >
        <Tab.Screen name={Screen.Matching} component={MatchingNavigation} />
        <Tab.Screen name={Screen.Feed} component={FeedNavigation} />
        <Tab.Screen name={Screen.EntertainMent} component={EntertainMentNavigation} />
        <Tab.Screen name={Screen.Store} component={StoreNavigation} />
        <Tab.Screen name={Screen.Local} component={LocalNavigation} />
        <Tab.Screen name={Screen.Search} component={SearchNavigation} />
      </Tab.Navigator>
    </AppContainer>
  )
}

export default BottomTabNavigation
