import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LiveStreamVideoModel from '../Components/LiveStreamVideoModel/LiveStreamVideoModel'
import ProfileBottomSheet from '../Components/ProfileBottomSheet/ProfileBottomSheet'
import ProfileSheetLoader from '../Components/ProfileSheetLoader'
import VideoSheetLoader from '../Components/VideoSheetLoader'
import {Screen} from '../Helpers'
import {AudioPlayerScreen, EntertainmentHomeScreen} from '../Screens'

const Stack = createNativeStackNavigator()
const EntertainMentNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={Screen.EntertainmentHomeScreen} component={EntertainmentHomeScreen} />
        <Stack.Screen name={Screen.AudioPlayerScreen} component={AudioPlayerScreen} />
      </Stack.Navigator>
      <LiveStreamVideoModel ref={(ref) => VideoSheetLoader.setLoader(ref)} />
      <ProfileBottomSheet ref={(ref) => ProfileSheetLoader.setLoader(ref)} />
    </>
  )
}

export default EntertainMentNavigation
