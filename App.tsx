import React, {useEffect} from 'react'
import {LogBox, ScrollView, StatusBar, Text, TextInput, TouchableOpacity} from 'react-native'
import {enableLatestRenderer} from 'react-native-maps'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import {RootSiblingParent} from 'react-native-root-siblings'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import TrackPlayer from 'react-native-track-player'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import './src/i18n/i18n'
import TopSheetModal from './src/Components/TopSheetModal/TopSheetModal'
import {Color, Fonts} from './src/Helpers'
import BottomSheetLoader from './src/Helpers/BottomSheetLoader'
import AppNavigation from './src/Router/AppNavigation'
import {persistor, store} from './src/Store/Store'

enableLatestRenderer()
LogBox.ignoreAllLogs()
TouchableOpacity.defaultProps = {
  activeOpacity: 0.5
}
ScrollView.defaultProps = {
  bounces: false,
  showsVerticalScrollIndicator: false
}

Text.defaultProps = {
  style: {
    color: Color.black
  }
}

TextInput.defaultProps = {
  selectionColor: Color.Primary,
  placeholderTextColor: Color.darkGrey,
  style: {
    color: Color.black,
    fontFamily: Fonts.regular
  }
}

const App = () => {
  useEffect(() => {
    TrackPlayer.setupPlayer({})
    changeNavigationBarColor(Color.transparent, true, true)
  }, [])
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar barStyle={'dark-content'} />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppNavigation />
            <TopSheetModal ref={(e: any) => BottomSheetLoader.setLoader(e)} />
          </PersistGate>
        </Provider>
      </RootSiblingParent>
    </SafeAreaProvider>
  )
}

export default App
