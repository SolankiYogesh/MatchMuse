import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import RNFS from 'react-native-fs'
import WebView from 'react-native-webview'

import {Utility} from '../../../../../Helpers'
import {verticalScale, widthPx} from '../../../../../Helpers/Responsive'

const VoiceMessageItem = ({item}: any) => {
  const isYou: boolean = item?.isYou
  const [data, setData] = useState('')

  useEffect(() => {
    RNFS.readFile(item?.voice, 'base64').then((resp) => {
      setData('data:audio/wav;base64,' + resp)
    })
  }, [])

  const debugging = `
  // Debug
  console = new Object();
  console.log = function(log) {
    window.ReactNativeWebView.postMessage("console", log);
  };
  console.debug = console.log;
  console.info = console.log;
  console.warn = console.log;
  console.error = console.log;
  `

  return (
    data && (
      <View style={styles.top}>
        <WebView
          javaScriptEnabled
          injectedJavaScript={debugging}
          source={{
            html: Utility.getVoiceMessageHTML(item?.voice, isYou)
            // uri: 'https://ticktocktimepieces.000webhostapp.com/'
          }}
          javaScriptEnable
          scrollEnabled={false}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          originWhitelist={['*']}
          mixedContentMode={'never'} // security
          startInLoadingState // when starting this component
          allowFileAccessFromFileURLs
          allowFileAccess
          allowsProtectedMedia
          javaScriptEnabledAndroid
        />
      </View>
    )
  )
}

export default VoiceMessageItem
const styles = StyleSheet.create({
  top: {
    // flex: 1,
    width: widthPx(80),
    height: verticalScale(200),
    marginVertical: verticalScale(10)
    // ...CommonStyles.centerItem
  }
})
