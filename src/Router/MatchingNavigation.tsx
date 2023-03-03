import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {MatchingHomeScreen} from '../Screens'

const Stack = createNativeStackNavigator()
const MatchingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Screen.MatchingHomeScreen} component={MatchingHomeScreen} />
    </Stack.Navigator>
  )
}

export default MatchingNavigation
