import React from 'react'

import MainHeader from '../../../Components/MainHeader/MainHeader'
import {Screen} from '../../../Helpers'
import StoreBagScreen from './StoreBagScreen/StoreBagScreen'
import StoreDiscountScreen from './StoreDiscountScreen/StoreDiscountScreen'
import StoreFavoriteScreen from './StoreFavoriteScreen/StoreFavoriteScreen'
import StoreHomeProductScreen from './StoreHomeProductScreen/SroreHomeProductScreen'

const StoreHomeScreen = () => {
  const routes = [
    {
      name: Screen.StoreHomeProductScreen,
      component: StoreHomeProductScreen,
      isIntial: true
    },
    {
      name: Screen.StoreBagScreen,
      component: StoreBagScreen
    },
    {
      name: Screen.StoreDiscountScreen,
      component: StoreDiscountScreen
    },
    {
      name: Screen.StoreFavoriteScreen,
      component: StoreFavoriteScreen
    }
  ]
  return <MainHeader Routes={routes} />
}

export default StoreHomeScreen
