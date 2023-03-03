import React from 'react'
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps
} from '@react-navigation/material-top-tabs'
import _ from 'lodash'

import MainTopTabBar from './MainTopTabBar'

const Tab = createMaterialTopTabNavigator()

interface routeType {
  component?: Element
  name?: string
  isIntial?: boolean
}
interface MainHeaderProps {
  Routes?: routeType[] | [] | undefined
}

const MainHeader = (props: MainHeaderProps) => {
  const {Routes} = props

  const renderCustombar = (props: MaterialTopTabBarProps) => {
    return <MainTopTabBar {...props} />
  }

  const intialRoute: any = _.find(Routes, (i) => i?.isIntial)

  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true
      }}
      id={'MatchingFlow'}
      tabBar={renderCustombar}
      initialRouteName={intialRoute?.name}
    >
      {Routes &&
        _.map(Routes, (i: any, index) => {
          return <Tab.Screen key={index.toString()} name={i.name} component={i.component} />
        })}
    </Tab.Navigator>
  )
}

export default MainHeader
