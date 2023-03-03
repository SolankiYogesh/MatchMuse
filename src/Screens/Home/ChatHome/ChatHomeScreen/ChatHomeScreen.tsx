import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import {Screen} from '../../../../Helpers'
import ChatGamesScreen from '../ChatGamesScreen/ChatGamesScreen'
import ChatShotsScreen from '../ChatShotsScreen/ChatShotsScreen'
import ChatUsersScreen from '../ChatUsersScreen/ChatUsersScreen'
import ChatTabBar from './Components/ChatTabBar'

const Tab = createMaterialTopTabNavigator()
const ChatHomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true
      }}
      id={'chatFlow'}
      tabBar={(props) => <ChatTabBar {...props} />}
      initialRouteName={Screen.ChatUsersScreen}
    >
      <Tab.Screen name={Screen.ChatUsersScreen} component={ChatUsersScreen} />
      <Tab.Screen name={Screen.ChatShotsScreen} component={ChatShotsScreen} />
      <Tab.Screen name={Screen.ChatGamesScreen} component={ChatGamesScreen} />
    </Tab.Navigator>
  )
}

export default ChatHomeScreen
