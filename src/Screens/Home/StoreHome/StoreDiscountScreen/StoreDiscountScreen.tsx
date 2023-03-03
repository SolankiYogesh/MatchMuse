import React from 'react'

import AppContainer from '../../../../Components/AppContainer'
import {products} from '../../../../DummyData/MatchingProfileFeeds'
import ProductListContainer from '../StoreHomeProductScreen/Components/ProductListContainer'

const StoreDiscountScreen = () => {
  return (
    <AppContainer>
      <ProductListContainer isDiscount isScrollable isColumnView data={products} isHeader={false} />
    </AppContainer>
  )
}

export default StoreDiscountScreen
