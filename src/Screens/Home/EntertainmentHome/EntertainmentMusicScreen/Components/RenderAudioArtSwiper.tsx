import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {useSharedValue} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'

import {moderateScale, verticalScale, W_WIDTH} from '../../../../../Helpers/Responsive'

const images = [
  {
    image: 'https://kaprat.com/dev/demo/podcast/01.png'
  },
  {
    image: 'https://kaprat.com/dev/demo/podcast/02.png'
  },
  {
    image: 'https://kaprat.com/dev/demo/podcast/03.png'
  },
  {
    image: 'https://kaprat.com/dev/demo/podcast/04.png'
  },
  {
    image: 'https://kaprat.com/dev/demo/podcast/05.png'
  },
  {
    image: 'https://kaprat.com/dev/demo/podcast/06.png'
  }
]
const RenderAudioArtSwiper = () => {
  const progressValue = useSharedValue<number>(0)

  const baseOptions = {
    vertical: false,
    width: W_WIDTH,
    height: W_WIDTH * 0.6
  } as const
  const renderImage = ({item}: any) => {
    return (
      <Image
        source={{
          uri: item?.image
        }}
        resizeMode={'cover'}
        style={styles.imageView}
      />
    )
  }
  return (
    <Carousel
      style={styles.list}
      {...baseOptions}
      mode={'parallax'}
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50
      }}
      onProgressChange={(_, absoluteProgress) => (progressValue.value = absoluteProgress)}
      width={W_WIDTH}
      height={W_WIDTH}
      data={images}
      renderItem={renderImage}
    />
  )
}

export default RenderAudioArtSwiper

const styles = StyleSheet.create({
  imageView: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: moderateScale(15)
  },
  list: {
    marginVertical: verticalScale(10)
  }
})
