import React from 'react'
import {useSelector} from 'react-redux'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screen} from '../Helpers'
import {
  AppMenuScreen,
  AuthIntroScreen,
  ForgotPasswordScreen,
  LoginScreen,
  MatchProfileScreen,
  RegisterScreen,
  UserDetailsScreen
} from '../Screens'

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
  const user = useSelector((state: any) => state?.user?.user)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={
        user?.isInfoCompleted
          ? Screen.MatchProfileScreen
          : user
          ? Screen.UserDetailsScreen
          : Screen.AuthIntroScreen
      }
    >
      <Stack.Screen name={Screen.AuthIntroScreen} component={AuthIntroScreen} />
      <Stack.Screen name={Screen.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={Screen.RegisterScreen} component={RegisterScreen} />
      <Stack.Screen name={Screen.ForgotPasswordScreen} component={ForgotPasswordScreen} />
      <Stack.Screen name={Screen.AppMenuScreen} component={AppMenuScreen} />
      <Stack.Screen name={Screen.UserDetailsScreen} component={UserDetailsScreen} />
      <Stack.Screen name={Screen.MatchProfileScreen} component={MatchProfileScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigation
