import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ProfileBottomSheet from '../Components/ProfileBottomSheet/ProfileBottomSheet'
import ProfileSheetLoader from '../Components/ProfileSheetLoader'
import {Screen} from '../Helpers'
import {
  AwardScreen,
  AwardTopperScreen,
  DiscussionDetailsScreen,
  DiscussionsScreen,
  FeedHomeScreen,
  GiveawayScreen,
  GiveWayDetailsSrceen,
  PollsScreen,
  PostCommentScreen,
  PostLikesUsersScreen,
  VoteDetailsScreen
} from '../Screens'

const Stack = createNativeStackNavigator()

const FeedNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={Screen.FeedHomeScreen} component={FeedHomeScreen} />
        <Stack.Screen name={Screen.PostCommentScreen} component={PostCommentScreen} />
        <Stack.Screen name={Screen.PostLikesUsersScreen} component={PostLikesUsersScreen} />
        <Stack.Screen name={Screen.VoteDetailsScreen} component={VoteDetailsScreen} />
        <Stack.Screen name={Screen.PollsScreen} component={PollsScreen} />
        <Stack.Screen name={Screen.AwardScreen} component={AwardScreen} />
        <Stack.Screen name={Screen.GiveawayScreen} component={GiveawayScreen} />
        <Stack.Screen name={Screen.DiscussionsScreen} component={DiscussionsScreen} />
        <Stack.Screen name={Screen.DiscussionDetailsScreen} component={DiscussionDetailsScreen} />
        <Stack.Screen name={Screen.GiveWayDetailsSrceen} component={GiveWayDetailsSrceen} />
        <Stack.Screen name={Screen.AwardTopperScreen} component={AwardTopperScreen} />
      </Stack.Navigator>
      <ProfileBottomSheet ref={(ref) => ProfileSheetLoader.setLoader(ref)} />
    </>
  )
}

export default FeedNavigation
