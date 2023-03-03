import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {CartItemsScreen, CheckoutScreen, ProductDetailsScreen, StoreHomeScreen} from '../Screens'

const Stack = createNativeStackNavigator()
const StoreNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Screen.StoreHomeScreen} component={StoreHomeScreen} />
      <Stack.Screen name={Screen.ProductDetailsScreen} component={ProductDetailsScreen} />
      <Stack.Screen name={Screen.CheckoutScreen} component={CheckoutScreen} />
      <Stack.Screen name={Screen.CartItemsScreen} component={CartItemsScreen} />
    </Stack.Navigator>
  )
}

export default StoreNavigation
