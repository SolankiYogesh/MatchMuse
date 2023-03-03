import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import _ from 'lodash'

import {CommonStyles, Images} from '../Helpers'
import {scale, verticalScale} from '../Helpers/Responsive'

interface StarRatingProps {
  rating?: number
  size?: number
  marginHorizontal?: number
}

const StarRating = (props: StarRatingProps) => {
  const {rating = 0, size = 15, marginHorizontal = 0} = props
  const [ratingData, setRatingData] = useState<any>([])
  useEffect(() => {
    const data = _.map(Array.from({length: 5}), (_, index) => {
      return {
        isFilled: index < rating
      }
    })
    setRatingData(data)
  }, [rating])
  return (
    <View style={styles.container}>
      {_.map(ratingData, (i) => {
        return (
          <Image
            source={i?.isFilled ? Images.ratting_star : Images.un_rate_star}
            style={
              (styles.startImage,
              {
                height: verticalScale(size),
                width: verticalScale(size),
                marginHorizontal: scale(marginHorizontal)
              })
            }
            resizeMode={'contain'}
          />
        )
      })}
    </View>
  )
}

export default StarRating

const styles = StyleSheet.create({
  startImage: {
    height: verticalScale(15),
    width: verticalScale(15)
  },
  container: {
    ...CommonStyles.row
  }
})
