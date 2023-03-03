import React, {useMemo} from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {Color, CommonStyles, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'

interface ReactionButtonProps {
  title?: string | undefined | null | number
  image?: ImageSourcePropType
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  isLiked?: boolean
}
const ReactionButton = (props: ReactionButtonProps) => {
  const {title = '', image, onPress = () => {}, style = {}, isLiked = false} = props
  const redShade = useMemo(() => [Color.pink_shade1, Color.red_shade1], [])
  const greyShade = useMemo(() => [Color.lightGrey, Color.lightGrey], [])
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={isLiked ? redShade : greyShade}
        style={[styles.container, style]}
      >
        <Image
          style={[styles.imageStyle, isLiked && styles.likedImage]}
          resizeMode={'contain'}
          source={image}
        />
        {(!!title || title === 0) && (
          <Text style={[styles.titleStyle, isLiked && styles.likedTitleStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default ReactionButton

const styles = StyleSheet.create({
  imageStyle: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.black,
    marginRight: scale(5)
  },
  likedImage: {tintColor: Color.white},
  container: {
    ...CommonStyles.row,
    padding: scale(10),
    borderRadius: moderateScale(10)
  },
  titleStyle: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  likedTitleStyle: {
    color: Color.white
  }
})
