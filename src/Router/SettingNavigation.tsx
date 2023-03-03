import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {
  CelebrityProfileBadgeScreen,
  ChangePasswordSettingScreen,
  CreatorProfileSettingScreen,
  NotificationSettingScreen,
  PaymentSettingScreen,
  PrivacySettingScreen,
  ProfileSettingScreen,
  SecuritySettingScreen,
  SettingScreen
} from '../Screens'

const Stack = createNativeStackNavigator()
const SettingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Screen.SettingScreen} component={SettingScreen} />
      <Stack.Screen name={Screen.NotificationSettingScreen} component={NotificationSettingScreen} />
      <Stack.Screen name={Screen.PaymentSettingScreen} component={PaymentSettingScreen} />
      <Stack.Screen name={Screen.ProfileSettingScreen} component={ProfileSettingScreen} />
      <Stack.Screen
        name={Screen.CreatorProfileSettingScreen}
        component={CreatorProfileSettingScreen}
      />
      <Stack.Screen name={Screen.PrivacySettingScreen} component={PrivacySettingScreen} />
      <Stack.Screen
        name={Screen.ChangePasswordSettingScreen}
        component={ChangePasswordSettingScreen}
      />
      <Stack.Screen name={Screen.SecuritySettingScreen} component={SecuritySettingScreen} />
      <Stack.Screen
        name={Screen.CelebrityProfileBadgeScreen}
        component={CelebrityProfileBadgeScreen}
      />
    </Stack.Navigator>
  )
}

export default SettingNavigation
