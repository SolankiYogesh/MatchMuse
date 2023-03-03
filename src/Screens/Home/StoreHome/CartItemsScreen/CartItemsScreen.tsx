import React from 'react'
import {FlatList} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {products} from '../../../../DummyData/MatchingProfileFeeds'
import {Color} from '../../../../Helpers'
import CartItem from '../CheckoutScreen/Components/CartItem'
import {styles} from './CartItemsScreenStyle'

const CartItemsScreen = () => {
  const renderItem = ({item}: any) => {
    return <CartItem item={item} isBigView />
  }

  return (
    <AppContainer color={Color.offWhite} style={styles.container}>
      <SettingHeader isTransparent title={t('FD363')} isShadow={false} />
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        data={[products[0], products[1]]}
        showsVerticalScrollIndicator={false}
      />
    </AppContainer>
  )
}

export default CartItemsScreen
