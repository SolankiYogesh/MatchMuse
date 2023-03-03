import React, {useEffect, useMemo, useState} from 'react'
import Animated, {FadeInDown, FadeOutUp} from 'react-native-reanimated'
import {useIsFocused} from '@react-navigation/native'

import AppContainer from '../../../../Components/AppContainer'
import AppScrollView from '../../../../Components/AppScrollView'
import LocalSearch from './Components/LocalSearch'
import LocalSearchInput from './Components/LocalSearchInput'
import RenderDiscoverCities from './Components/RenderDiscoverCities'
import RenderForYou from './Components/RenderForYou'
import RenderLocalCategories from './Components/RenderLocalCategories'

const LocationHomeFeedScreen = () => {
  const [isSearch, setISSearch] = useState(false)
  const [search, setSearch] = useState('')
  const isFocused = useIsFocused()
  useEffect(() => {
    if (isFocused) {
      setISSearch(false)
    }
  }, [])

  const renderBody = useMemo(() => {
    return (
      <Animated.View entering={FadeInDown} exiting={FadeOutUp}>
        <RenderDiscoverCities />
        <RenderLocalCategories />
        <RenderForYou />
      </Animated.View>
    )
  }, [])

  const renderSearchTab = useMemo(() => {
    return (
      <Animated.View entering={FadeInDown} exiting={FadeOutUp}>
        <LocalSearch search={search} />
      </Animated.View>
    )
  }, [search])

  return (
    <AppContainer>
      <AppScrollView showsVerticalScrollIndicator={false}>
        <LocalSearchInput
          value={search}
          onPress={() => setISSearch(true)}
          isEnabled={isSearch}
          onChangeText={setSearch}
          onChangeState={setISSearch}
        />
        {isSearch ? renderSearchTab : renderBody}
      </AppScrollView>
    </AppContainer>
  )
}

export default LocationHomeFeedScreen
