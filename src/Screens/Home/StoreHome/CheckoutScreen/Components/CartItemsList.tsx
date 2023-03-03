import React from 'react'
import {FlatList, StyleSheet} from 'react-native'

import {products} from '../../../../../DummyData/MatchingProfileFeeds'
import {verticalScale} from '../../../../../Helpers/Responsive'
import CartItem from './CartItem'

const CartItemsList = () => {
  const renderItem = ({item}: any) => {
    return <CartItem item={item} />
  }
  return (
    <FlatList
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      data={[products[0], products[1]]}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listStyle}
    />
  )
}

export default CartItemsList

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: verticalScale(10)
  }
})
