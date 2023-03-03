import React from 'react'
import {ScrollView} from 'react-native'

import AppContainer from '../../../../Components/AppContainer'
import RenderAudioLiveSteamList from './Components/RenderAudioLiveSteamList'
import RenderFollowingList from './Components/RenderFollowingList'
import RenderLiveStreamList from './Components/RenderLiveStreamList'
import RenderPodCastList from './Components/RenderPodCastList'

const EntertainmentFeedsScreen = () => {
  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderLiveStreamList />
        <RenderAudioLiveSteamList />
        <RenderPodCastList />
        <RenderFollowingList />
      </ScrollView>
    </AppContainer>
  )
}

export default EntertainmentFeedsScreen
