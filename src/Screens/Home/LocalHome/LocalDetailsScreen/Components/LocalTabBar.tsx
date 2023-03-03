import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {TabBar} from 'react-native-tab-view'

import {Color, Fonts} from '../../../../../Helpers'
import {moderateScale} from '../../../../../Helpers/Responsive'

const LocalTabBar = (props: any) => {
  const renderlabel = ({route}: any) => {
    return <Text style={styles.labelStyle}>{route?.title}</Text>
  }
  return (
    <TabBar
      {...props}
      pressColor={'transparent'}
      pressOpacity={1}
      renderLabel={renderlabel}
      indicatorStyle={styles.indicatorStyle}
      indicatorContainerStyle={styles.indicatorContainerStyle}
    />
  )
}

export default LocalTabBar

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: Color.black
  },
  indicatorContainerStyle: {
    backgroundColor: Color.offWhite
  },
  labelStyle: {
    color: Color.black,
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold
  }
})
