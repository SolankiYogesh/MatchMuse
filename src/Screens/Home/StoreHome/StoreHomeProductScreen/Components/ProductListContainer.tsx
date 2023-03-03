import React, {useCallback, useEffect, useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import EamptyView from '../../../../../Components/EamptyView'
import {verticalScale} from '../../../../../Helpers/Responsive'
import EntertainmentFeedHeader, {
  EntertainmentFeedHeaderProps
} from '../../../EntertainmentHome/EntertainmentFeedsScreen/Components/EntertainmentFeedHeader'
import ProductItem from './ProductItem'

interface ProductListContainerProps extends EntertainmentFeedHeaderProps {
  title?: string
  isHeader?: boolean
  data?: any[]
  isScrollable?: boolean
  horizontal?: boolean
  isMenu?: boolean
  isBigItems?: boolean
  isColumnView?: boolean
  isDiscount?: boolean
  isLiked?: boolean
  onRemoveItem?: (item: any) => void
  renderEamptyView?: JSX.Element
}

const ProductListContainer = (props: ProductListContainerProps) => {
  const {
    isHeader = true,
    isMenu = false,
    data = [],
    isScrollable = false,
    horizontal = true,
    isBigItems = false,
    isColumnView = false,
    isDiscount = false,
    isLiked = false,
    onRemoveItem = () => {},
    renderEamptyView
  } = props

  const [isColumn, setISColumn] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (isColumnView) {
      setISColumn(!isColumn)
      setKey(key + 1)
    }
  }, [isColumnView])

  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <ProductItem
          onRemoveItem={onRemoveItem}
          isLiked={isLiked}
          isDiscount={isDiscount}
          isBigView={isBigItems}
          item={item}
        />
      )
    },
    [isBigItems, isDiscount, onRemoveItem, isLiked]
  )

  const renderVerticalSeperator = () => <View style={styles.seperator} />

  return data?.length > 0 ? (
    <View>
      {isHeader && (
        <EntertainmentFeedHeader
          onPressMenu={
            isMenu
              ? () => {
                  setISColumn(!isColumn)
                  setKey(key + 1)
                }
              : undefined
          }
          {...props}
        />
      )}
      {isColumn ? (
        <FlatList
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={isScrollable}
          data={data}
          ItemSeparatorComponent={renderVerticalSeperator}
          key={key}
          style={styles.listStyle}
          numColumns={2}
        />
      ) : (
        <FlatList
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={isScrollable}
          data={data}
          key={key}
          ListEmptyComponent={renderEamptyView}
          style={styles.listStyle}
          horizontal={horizontal}
        />
      )}
    </View>
  ) : (
    <View style={styles.EamptyContainer}>
      <EamptyView text={t('FD339')} />
    </View>
  )
}

export default ProductListContainer
const styles = StyleSheet.create({
  listStyle: {
    marginVertical: verticalScale(10)
  },
  seperator: {
    marginVertical: verticalScale(10)
  },
  EamptyContainer: {
    flex: 1
  }
})
