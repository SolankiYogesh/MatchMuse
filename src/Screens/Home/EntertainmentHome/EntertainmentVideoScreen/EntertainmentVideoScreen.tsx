import React from 'react'
import {ScrollView} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import RenderCreatorAvtarList from '../EntertainmentFeedsScreen/Components/RenderCreatorAvtarList'
import RenderFollowingList from '../EntertainmentFeedsScreen/Components/RenderFollowingList'
import RenderLiveStreamList from '../EntertainmentFeedsScreen/Components/RenderLiveStreamList'
import SwipperStream from './Components/SwipperStream'

const EntertainmentVideoScreen = () => {
  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SwipperStream />
        <RenderLiveStreamList title={t('FD317')} />
        <RenderCreatorAvtarList />
        <RenderFollowingList title={t('FD329')} />
      </ScrollView>
    </AppContainer>
  )
}

export default EntertainmentVideoScreen
