import React, {useState} from 'react'
import {Image, ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

import {Color, Images} from '../../Helpers'
import {verticalScale} from '../../Helpers/Responsive'
import FlyAnimatedIcon from './FlyAnimatedIcon'

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

interface FlyAnimationProps {
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
}
interface HeartType {
  id?: number
  right?: number
}

const FlyAnimation = (props: FlyAnimationProps) => {
  const [hearts, setHearts] = useState<HeartType[]>([])
  const {style = {}, imageStyle = {}} = props
  let id = 1

  const onPressHeart = () => {
    const newHeartArr = [
      ...hearts,
      {
        id: id++,
        right: getRandomNumber(50, 150)
      }
    ]
    setHearts(newHeartArr)
  }

  return (
    <View
      style={style}
      onStartShouldSetResponder={() => {
        onPressHeart()
        return true
      }}
    >
      <Image source={Images.heart} style={[styles.sendImage, imageStyle]} resizeMode={'contain'} />
      <View style={styles.container}>
        {hearts.map(({id, right}) => (
          <FlyAnimatedIcon key={id} right={right} />
        ))}
      </View>
    </View>
  )
}

export default FlyAnimation

const styles = StyleSheet.create({
  container: {
    position: 'absolute'
  },
  sendImage: {
    tintColor: Color.white,
    height: verticalScale(25),
    width: verticalScale(25)
  }
})
