import React from 'react'
import {ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import RenderAudioLiveSteamList from '../EntertainmentFeedsScreen/Components/RenderAudioLiveSteamList'
import RenderCreatorAvtarList from '../EntertainmentFeedsScreen/Components/RenderCreatorAvtarList'
import RenderPodCastList from '../EntertainmentFeedsScreen/Components/RenderPodCastList'
import PlayerSheet from './Components/PlayerSheet'
import RenderAudioArtSwiper from './Components/RenderAudioArtSwiper'
import RenderFeaturedCharts from './Components/RenderFeaturedCharts'

const EntertainmentMusicScreen = () => {
  const songs = useSelector((state: any) => state?.audio?.audioList)
  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderAudioArtSwiper />
        <RenderPodCastList />
        <RenderCreatorAvtarList title={t('FD331')} />
        <RenderAudioLiveSteamList />
        <RenderFeaturedCharts />
      </ScrollView>
      {songs && songs?.length > 0 && <PlayerSheet />}
    </AppContainer>
  )
}

export default EntertainmentMusicScreen
