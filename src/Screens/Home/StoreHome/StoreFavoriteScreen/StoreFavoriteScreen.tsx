import React, {useEffect, useState} from 'react'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {products} from '../../../../DummyData/MatchingProfileFeeds'
import ProductListContainer from '../StoreHomeProductScreen/Components/ProductListContainer'

const StoreFavoriteScreen = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(products)
  }, [])

  const onRemoveItem = (item: any) => {
    const filterItems = _.filter(data, (i: any) => i.id !== item?.id)
    setData(filterItems)
  }
  return (
    <AppContainer>
      <ProductListContainer
        isLiked
        onRemoveItem={onRemoveItem}
        isScrollable
        isColumnView
        data={data}
        isHeader={false}
      />
    </AppContainer>
  )
}

export default StoreFavoriteScreen
