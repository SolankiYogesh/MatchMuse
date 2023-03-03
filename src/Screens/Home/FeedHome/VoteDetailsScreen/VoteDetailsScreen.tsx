import React, {useState} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../Components/Animations/AnimatedImage'
import AppButton from '../../../../Components/AppButton'
import AppContainer from '../../../../Components/AppContainer'
import AppScrollView from '../../../../Components/AppScrollView'
import RNPoll, {IChoice} from '../../../../Components/React-native-Poll/RNPoll'
import {Color, CommonStyles, Fonts, Images} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {styles} from './VoteDetailsScreenStyle'

const VoteDetailsScreen = () => {
  const route: any = useRoute().params
  const mainItem = route?.item
  const [liked, setLiked] = useState(false)
  const navigation = useNavigation()
  const [likeCount, setLikeCount] = useState(80)
  const choices: IChoice[] = [
    {id: 1, choice: 'Pepperoni', votes: 12},
    {id: 2, choice: 'Gaming', votes: 10},
    {id: 3, choice: 'TV-Streaming', votes: 7},
    {id: 4, choice: 'Meeting', votes: 7}
  ]

  const renderImageView = () => {
    return (
      <View>
        <Image
          source={{
            uri: mainItem?.image
          }}
          resizeMode={'cover'}
          borderBottomLeftRadius={moderateScale(25)}
          borderBottomRightRadius={moderateScale(25)}
          style={styles.mainImageView}
        />
        <AppButton
          gradientStyleContainer={styles.gradientStyleContainer}
          btnStyleContainer={styles.btnStyleContainer}
          title={t('FD278')}
          btnTextStyle={styles.btnTextStyle}
        />
        <TouchableOpacity style={styles.imageBack} onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderLikeView = () => {
    return (
      <View style={CommonStyles.row}>
        <AnimatedImage
          onPress={() => {
            setLikeCount((state) => (liked ? state - 1 : state + 1))
            setLiked(!liked)
          }}
          style={[styles.bottomImages, !liked && styles.tintColorBlack]}
          source={liked ? Images.heart_fill : Images.heart}
        />

        <Text style={styles.likeCount}>{likeCount}</Text>
      </View>
    )
  }

  const renderTextContainer = () => {
    return (
      <View>
        <Text style={styles.topText}>{'What is the greatest NBA team in history ?'}</Text>
        <View style={styles.textContainer}>
          <View style={CommonStyles.row}>
            <Text style={styles.voteText}>
              {'40 '}
              {t('FD254')}
            </Text>
            <View style={styles.dotView} />
            <Text style={styles.voteText}>
              {'12 '}
              {'stunden left'}
            </Text>
          </View>
          <Text style={styles.voteText}>{'31.03.2022'}</Text>
        </View>
      </View>
    )
  }

  const renderPollView = () => {
    return (
      <RNPoll
        appearFrom={'top'}
        totalVotes={40}
        animationDuration={750}
        choices={choices}
        disabled={false}
        choiceTextStyle={{
          fontFamily: Fonts.medium
        }}
        onChoicePress={(selectedChoice: IChoice) => {
          //
        }}
      />
    )
  }

  return (
    <AppContainer isTopSafeArea translucent={false} statusbarColor={Color.white}>
      <AppScrollView>
        {renderImageView()}
        <View style={styles.innerContainer}>
          {renderLikeView()}
          {renderTextContainer()}
          {renderPollView()}
        </View>
      </AppScrollView>
    </AppContainer>
  )
}

export default VoteDetailsScreen
