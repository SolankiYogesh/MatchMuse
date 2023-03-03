import React from 'react'
import {useWindowDimensions} from 'react-native'
import {SceneMap, TabView} from 'react-native-tab-view'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import HotelsTab from './Components/HotelsTab'
import LocalTabBar from './Components/LocalTabBar'
import OverViewTab from './Components/OverViewTab'

const renderScene = SceneMap({
  first: OverViewTab,
  second: HotelsTab
})

const LocalDetailsScreen = () => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {key: 'first', title: t('FD374')},
    {key: 'second', title: t('FD375')}
  ])

  return (
    <AppContainer isEdgeContainer>
      <SettingHeader isTransparent isShadow={false} title={'Amsterdam'} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={(props) => <LocalTabBar {...props} />}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </AppContainer>
  )
}

export default LocalDetailsScreen
