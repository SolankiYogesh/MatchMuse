import React, {useEffect, useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import {TIMELINE} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Screen, Utility} from '../../../../Helpers'
import {widthPx} from '../../../../Helpers/Responsive'
import {styles} from '../MatchProfileScreenStyle'
import {MathProfileTabViewProps} from './MathProfileTabView'

const QueView = ({isAccount = false, isImageSelected = false}: MathProfileTabViewProps) => {
  const [timeLine, setTimeLine] = useState<any[]>([])
  const navigation: any = useNavigation()

  const onPressPersonalityTest = () => {
    if (!isImageSelected) {
      Utility.showToast(t('FD384'))
      return
    }
    navigation.navigate(Screen.PersonalityTestScreen)
  }

  useEffect(() => {
    const newTimeLIne = _.map(TIMELINE, (i) => {
      return {
        isSelected: false,
        ...i
      }
    })
    setTimeLine(newTimeLIne)
  }, [])

  const renderButton = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPressPersonalityTest}>
        <LinearGradient
          angle={90}
          useAngle
          angleCenter={{x: 0.5, y: 1}}
          end={{
            x: 0,
            y: 1
          }}
          style={styles.innerContainer}
          colors={[Color.blue_shade, Color.thar_shade]}
        >
          <Text style={styles.btnQueText}>{t('FD125')}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  const renderInnerContent = (ques: any[]) => {
    return (
      ques?.length > 0 &&
      _.map(ques, (i) => {
        return (
          <View style={styles.questionContainer}>
            <View style={CommonStyles.row}>
              <Text style={styles.bigQuestionSrText}>{'Q.'}</Text>
              <Text style={styles.questionText}>{i?.question}</Text>
            </View>
            <Text style={styles.ansText}>{i?.ans}</Text>
          </View>
        )
      })
    )
  }

  const onPressProgress = (item: any) => {
    let deepClonedData = Utility.deepClone(timeLine)
    const findIndex = _.findIndex(deepClonedData, (i: any) => i?.name === item?.name)
    if (deepClonedData[findIndex].isSelected) {
      deepClonedData[findIndex].isSelected = false
      setTimeLine(deepClonedData)
      return
    }

    deepClonedData = _.map(deepClonedData, (i) => {
      i.isSelected = false
      return i
    })
    deepClonedData[findIndex].isSelected = true
    setTimeLine(deepClonedData)
  }

  const renderTimeline = () => {
    return (
      <View style={styles.timelineItemContainer}>
        {_.map(timeLine, (i) => {
          return (
            <TouchableOpacity
              onPress={() => onPressProgress(i)}
              style={styles.progressTimelineView}
            >
              <View style={styles.textTimelineContainer}>
                <Text style={styles.nameTimeLineText}>{i?.name}</Text>
                <Text style={styles.nameTimeLineText}>
                  {i?.progress}
                  {'%'}
                </Text>
              </View>
              <Progress.Bar
                color={i?.color}
                progress={Number(i?.progress) / 100}
                width={widthPx(90)}
              />
              {i?.isSelected && renderInnerContent(i?.questionData)}
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  return (
    <View style={CommonStyles.fullView}>
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        style={CommonStyles.flex}
      >
        {isAccount ? renderTimeline() : renderButton()}
      </ScrollView>
    </View>
  )
}

export default QueView
