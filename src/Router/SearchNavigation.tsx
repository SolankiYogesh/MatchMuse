import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {SearchHistoryScreen, SearchHomeScreen, SearchTabsScreen} from '../Screens'

const Stack = createNativeStackNavigator()
const SearchNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Screen.SearchHomeScreen} component={SearchHomeScreen} />
      <Stack.Screen name={Screen.SearchTabsScreen} component={SearchTabsScreen} />
      <Stack.Screen name={Screen.SearchHistoryScreen} component={SearchHistoryScreen} />
    </Stack.Navigator>
  )
}

export default SearchNavigation
