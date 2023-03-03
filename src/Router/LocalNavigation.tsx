import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {LocalDetailsScreen, LocalHomeScreen} from '../Screens'

const Stack = createNativeStackNavigator()
const LocalNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Screen.LocalHomeScreen} component={LocalHomeScreen} />
      <Stack.Screen name={Screen.LocalDetailsScreen} component={LocalDetailsScreen} />
    </Stack.Navigator>
  )
}

export default LocalNavigation
