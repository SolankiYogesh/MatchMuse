import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {ChatHomeScreen, ChatMessageScreen} from '../Screens'

const Stack = createNativeStackNavigator()
const ChatNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Screen.ChatHomeScreen} component={ChatHomeScreen} />
      <Stack.Screen name={Screen.ChatMessageScreen} component={ChatMessageScreen} />
    </Stack.Navigator>
  )
}

export default ChatNavigation
