import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'

import {Color} from '../Helpers'

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Color.Primary} />
    </View>
  )
}

export default LoadingView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
