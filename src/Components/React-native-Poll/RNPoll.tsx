import * as React from 'react'
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native'

import RNPollItem from './components/RNPollItem'
/**
 * ? Local Imports
 */
import styles from './RNPoll.style'
import {countPercentage} from './utils/RNPoll.utils'

export type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>

export interface IChoice {
  id: number
  votes: number
  choice: string
}

export interface IRNPollProps {
  totalVotes: number
  hasBeenVoted?: boolean
  votedChoiceByID?: number
  disableBuiltInIncreaseVote?: boolean
  choices: IChoice[]
  style?: CustomStyleProp
  pollContainerStyle?: CustomStyleProp
  PollContainer?: any
  PollItemContainer?: any
  onChoicePress: (selectedChoice: IChoice) => void
  appearFrom?: any
  animationDuration?: any
  disabled?: boolean
  choiceTextStyle?: any
}

const RNPoll: React.FC<IRNPollProps> = ({
  style,
  choices,
  totalVotes,
  pollContainerStyle,
  hasBeenVoted = false,
  disableBuiltInIncreaseVote = false,
  votedChoiceByID = undefined,
  PollItemContainer = View,
  PollContainer = View,
  onChoicePress,
  ...rest
}) => {
  const [votedChoice, setVotedChoice] = React.useState(votedChoiceByID)

  return (
    <View style={style}>
      <ScrollView
        style={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        <PollContainer style={[styles.pollContainer, pollContainerStyle]} {...rest}>
          {choices.map((eachChoice: IChoice) => {
            const {choice, id, votes} = eachChoice
            const percentage = countPercentage(votes, totalVotes)

            return (
              <RNPollItem
                {...rest}
                id={id}
                key={id}
                text={choice}
                disabled={false}
                percentage={percentage}
                hasBeenVoted
                votedChoiceByID={votedChoice}
                PollItemContainer={PollItemContainer}
                onPress={() => {
                  setVotedChoice(id)
                  eachChoice.votes += 1
                  onChoicePress?.(eachChoice)
                }}
              />
            )
          })}
        </PollContainer>
      </ScrollView>
    </View>
  )
}

export default RNPoll
