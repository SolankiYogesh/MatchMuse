import React, {useState} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import _ from 'lodash'

import {Color, CommonStyles} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale, W_WIDTH} from '../../../../../Helpers/Responsive'

const images = [
  'https://kaprat.com/dev/demo/products/18.png',
  'https://kaprat.com/dev/demo/products/19.png',
  'https://kaprat.com/dev/demo/products/20.png',
  'https://kaprat.com/dev/demo/products/21.png',
  'https://kaprat.com/dev/demo/products/22.png',
  'https://kaprat.com/dev/demo/products/23.png',
  'https://kaprat.com/dev/demo/products/18.png'
]

const RenderAutoImageSlider = () => {
  const [index, setIndex] = useState(0)

  const renderImage = ({item}: any) => {
    return (
      <Image
        source={{
          uri: item
        }}
        resizeMode={'cover'}
        style={styles.imaegView}
      />
    )
  }

  return (
    <View>
      <Carousel
        width={W_WIDTH}
        height={W_WIDTH / 1.5}
        data={images}
        autoPlay
        scrollAnimationDuration={1000}
        onSnapToItem={setIndex}
        renderItem={renderImage}
        style={styles.listStyle}
      />
      <View style={[CommonStyles.row, styles.paginationContainer]}>
        {_.map(images, (i: any, ind: number) => {
          return <View style={[styles.shape, index === ind && styles.selectedShape]} />
        })}
      </View>
    </View>
  )
}

export default RenderAutoImageSlider

const styles = StyleSheet.create({
  shape: {
    width: scale(35),
    height: verticalScale(3),
    backgroundColor: Color.darkGrey,
    transform: [{skewX: '330deg'}],
    marginHorizontal: scale(2)
  },
  selectedShape: {
    backgroundColor: Color.Primary
  },
  paginationContainer: {
    marginVertical: verticalScale(10),
    alignSelf: 'center'
  },
  imaegView: {
    width: '95%',
    height: '100%',
    borderRadius: moderateScale(15),
    alignSelf: 'center'
  },
  listStyle: {
    marginVertical: verticalScale(10)
  }
})
