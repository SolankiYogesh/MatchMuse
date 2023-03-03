import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {
  AnimatedSplashScreen,
  AudioLiveStreamDetailsScreen,
  BlueCardBuysScreen,
  DateFilterScreen,
  EditProfileScreen,
  NotificationFilterScreen,
  PartnerScreen,
  PaymentScreen,
  PersonalityTestScreen,
  TestQuestionsScreen,
  TestResultScreen,
  VideoCallScreen
} from '../Screens'
import AuthNavigation from './AuthNavigation'
import BottomTabNavigation from './BottomTabNavigation'
import ChatNavigation from './ChatNavigation'
import DrawerNavigationRoute from './DrawerNavigationRoute'
import {navigationRef} from './RootNavigation'
import SettingNavigation from './SettingNavigation'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()} ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={Screen.AnimatedSplashScreen}
      >
        <Stack.Screen name={Screen.AnimatedSplashScreen} component={AnimatedSplashScreen} />
        <Stack.Screen name={Screen.Auth} component={AuthNavigation} />
        <Stack.Screen name={Screen.Main} component={BottomTabNavigation} />
        <Stack.Screen name={Screen.EditProfileScreen} component={EditProfileScreen} />
        <Stack.Screen name={Screen.Setting} component={SettingNavigation} />
        <Stack.Screen name={Screen.DateFilterScreen} component={DateFilterScreen} />
        <Stack.Screen name={Screen.PersonalityTestScreen} component={PersonalityTestScreen} />
        <Stack.Screen name={Screen.TestQuestionsScreen} component={TestQuestionsScreen} />
        <Stack.Screen name={Screen.TestResultScreen} component={TestResultScreen} />
        <Stack.Screen name={Screen.Chat} component={ChatNavigation} />
        <Stack.Screen name={Screen.PaymentScreen} component={PaymentScreen} />
        <Stack.Screen name={Screen.VideoCallScreen} component={VideoCallScreen} />
        <Stack.Screen name={Screen.DrawerNavigation} component={DrawerNavigationRoute} />
        <Stack.Screen name={Screen.BlueCardBuysScreen} component={BlueCardBuysScreen} />
        <Stack.Screen name={Screen.NotificationFilterScreen} component={NotificationFilterScreen} />
        <Stack.Screen name={Screen.PartnerScreen} component={PartnerScreen} />
        <Stack.Screen
          name={Screen.AudioLiveStreamDetailsScreen}
          component={AudioLiveStreamDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
