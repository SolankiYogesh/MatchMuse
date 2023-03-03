import * as React from 'react'
import {
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native'
import RNBounceable, {IRNBounceableProps} from '@freakycoder/react-native-bounceable'

import {Color, CommonStyles} from '../../../Helpers'
import {calculateProgressBarAnimation, convertPercentageString} from '../utils/RNPoll.utils'
/**
 * ? Local Imports
 */
import {_animatedViewStyle, _container, styles} from './RNPollItem.style'

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>

export interface ISource {
  source: string | {uri: string}
}

export interface IRNPollItemProps extends IRNBounceableProps {
  id: number
  text: string
  disabled?: boolean
  percentage: number
  borderColor?: string
  hasBeenVoted: boolean
  votedChoiceByID?: number
  fillBackgroundColor?: string
  checkMarkIconImageSource?: ISource
  choiceTextStyle?: TextStyle
  percentageTextStyle?: TextStyle
  checkMarkImageStyle?: ImageStyle
  style?: CustomStyleProp
  children?: React.ReactNode
  renderIcon?: () => JSX.Element
  ImageComponent?: any
  PollItemContainer?: any
  onPress: () => void
}

const RNPollItem: React.FC<IRNPollItemProps> = ({
  id,
  text,
  onPress,
  disabled,
  percentage,
  hasBeenVoted,
  votedChoiceByID,
  choiceTextStyle,
  percentageTextStyle,
  checkMarkImageStyle,
  borderColor = `${Color.Primary}6B`,
  fillBackgroundColor = `${Color.Primary}6B`,

  ImageComponent = Image,
  PollItemContainer = View,
  ...rest
}) => {
  const {width} = calculateProgressBarAnimation({
    percentage,
    hasBeenVoted
  })

  let _borderWidth = 0.5
  const isChoiceSelected = votedChoiceByID === id
  if (hasBeenVoted) {
    _borderWidth = isChoiceSelected ? 0.5 : 0.1
  }

  return (
    <RNBounceable
      bounceEffectIn={0.97}
      bounceEffectOut={0.97}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={_container(borderColor, _borderWidth)}>
        <Animated.View
          style={[StyleSheet.absoluteFill, _animatedViewStyle(fillBackgroundColor, width)]}
        />
        <View style={CommonStyles.row}>
          <View style={[styles.innerCircle, isChoiceSelected && styles.selectedCircle]} />
          <Text
            style={[
              styles.choiceTextStyle,
              choiceTextStyle,
              isChoiceSelected && {
                color: Color.redExtra
              }
            ]}
          >
            {text}
          </Text>
        </View>
        {hasBeenVoted && (
          <PollItemContainer style={styles.pollItemContainer} {...rest}>
            <Text
              style={[
                styles.percentageTextStyle,
                percentageTextStyle,
                isChoiceSelected && {
                  color: Color.redExtra
                }
              ]}
            >
              {convertPercentageString(percentage)}
            </Text>
          </PollItemContainer>
        )}
      </View>
    </RNBounceable>
  )
}

export default RNPollItem
