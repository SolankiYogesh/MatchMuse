import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import {Screen} from '../Helpers'
import {widthPx} from '../Helpers/Responsive'
import {AccountScreen, BusinessDrawerScreen, CreateDrawerScreen} from '../Screens'
import DrawerBar from './Components/DrawerBar'

const Drawer = createDrawerNavigator()

const DrawerNavigationRoute = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerBar {...props} />}
      defaultStatus={'closed'}
      initialRouteName={Screen.AccountScreen}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: widthPx(80)}
      }}
    >
      <Drawer.Screen name={Screen.AccountScreen} component={AccountScreen} />
      <Drawer.Screen name={Screen.CreateDrawerScreen} component={CreateDrawerScreen} />
      <Drawer.Screen name={Screen.BusinessDrawerScreen} component={BusinessDrawerScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigationRoute
