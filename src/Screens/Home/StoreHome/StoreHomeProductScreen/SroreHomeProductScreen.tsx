import React from 'react'
import {ScrollView} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import {products} from '../../../../DummyData/MatchingProfileFeeds'
import ProductListContainer from './Components/ProductListContainer'
import RenderAutoImageSlider from './Components/RenderAutoImageSlider'

const StoreHomeProductScreen = () => {
  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderAutoImageSlider />
        <ProductListContainer isScrollable title={String(t('FD333'))} isMenu data={products} />
        <ProductListContainer data={products} isScrollable title={String(t('FD334'))} isMenu />
        <ProductListContainer
          data={products}
          horizontal={false}
          title={String(t('FD335'))}
          isBigItems
        />
      </ScrollView>
    </AppContainer>
  )
}

export default StoreHomeProductScreen
