import React from 'react'
import {Image, ImageStyle, StyleProp, StyleSheet, View} from 'react-native'

import {Color, CommonStyles} from '../../../../Helpers'
import {scale, verticalScale, W_WIDTH} from '../../../../Helpers/Responsive'

const SearchItemView = ({item, index}: any) => {
  const renderSmallImage = (item: any, style: StyleProp<ImageStyle> = {}) => {
    return (
      <View>
        <Image
          source={{
            uri: item?.image
          }}
          resizeMode={'cover'}
          style={[styles.smallImage, style]}
        />
        <Image style={styles.absoluteImage} source={item?.icon} resizeMode={'contain'} />
      </View>
    )
  }

  const renderBigImage = (item: any) => {
    return (
      <View>
        <Image
          source={{
            uri: item?.image
          }}
          resizeMode={'cover'}
          style={styles.bigImage}
        />
        <Image style={styles.absoluteImage} source={item?.icon} resizeMode={'contain'} />
      </View>
    )
  }

  return (
    <View>
      {index % 2 === 0 && (
        <View style={CommonStyles.row}>
          {index % 4 === 0 && (
            <View>
              {renderSmallImage(item[1])}
              {renderSmallImage(item[2])}
            </View>
          )}
          {renderBigImage(item[0])}
          {index % 4 !== 0 && (
            <View>
              {renderSmallImage(item[1], styles.rowsmallImage)}
              {renderSmallImage(item[2], styles.rowsmallImage)}
            </View>
          )}
        </View>
      )}
      {index % 2 !== 0 && (
        <View style={CommonStyles.row}>
          {renderSmallImage(item[0])}
          {renderSmallImage(item[1])}
          {renderSmallImage(item[2], styles.rowsmallImage)}
        </View>
      )}
    </View>
  )
}

export default SearchItemView

const dynamicWdith = W_WIDTH / 3.1

const styles = StyleSheet.create({
  smallImage: {
    width: dynamicWdith,
    height: dynamicWdith - verticalScale(3),
    marginHorizontal: scale(2.5),
    marginVertical: verticalScale(3)
  },
  bigImage: {
    width: dynamicWdith + dynamicWdith + verticalScale(5),
    height: dynamicWdith + dynamicWdith,
    marginHorizontal: scale(2.5),
    marginVertical: verticalScale(3)
  },
  absoluteImage: {
    position: 'absolute',
    zIndex: 1000,
    tintColor: Color.white,
    bottom: verticalScale(10),
    left: scale(10),
    width: verticalScale(20),
    height: verticalScale(20)
  },
  rowsmallImage: {
    width: dynamicWdith - scale(5)
  }
})
