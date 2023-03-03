import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Image, Text, View} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {useSharedValue} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedButton from '../../../../Components/Animations/AnimatedButton'
import AppContainer from '../../../../Components/AppContainer'
import {CommonStyles, Images, Screen} from '../../../../Helpers'
import {heightPx, W_WIDTH} from '../../../../Helpers/Responsive'
import QuestionItem from './Components/QuestionItem'
import {styles} from './TestQuestionsScreenStyles'

const dummyQuestion = {
  question: 'kochst du gerne ?',
  options: [
    'Ja, ich kann sehr gut kochen und es macht mir sehr viel Spaß!',
    'ich kann und möchte nicht gerne kochen',
    'Ja, ganz gerne',
    'ich koche nur, wenn ich es muss.',
    'ich koch nur gerne fur mein besuch.'
  ]
}

const TestQuestionsScreen = () => {
  const [question, setQuestion] = useState<any>([])
  const progressValue = useSharedValue<number>(0)
  const ref = useRef<any>(null)
  const [isAnimation, setIsAnimation] = useState(false)
  const navigation: any = useNavigation()

  const baseOptions = {
    vertical: false,
    width: W_WIDTH,
    height: W_WIDTH * 0.6
  } as const

  useEffect(() => {
    const newQues = Array.from({
      length: 14
    }).map((_, index) => {
      return {
        id: index,
        ...dummyQuestion
      }
    })
    setQuestion(newQues)
  }, [])

  const renderLogoTitle = useMemo(() => {
    return (
      <View style={styles.topContainer}>
        <Image source={Images.fyerdates_logo} style={styles.logoImage} resizeMode={'contain'} />
        <Text style={styles.logoTitle}>{t('FD1')}</Text>
      </View>
    )
  }, [])

  const renderItem = useCallback(
    (item: any) => {
      return (
        <QuestionItem
          onPressOption={() => {
            ref.current?.next()
          }}
          length={question?.length}
          itemData={item}
        />
      )
    },
    [question?.length]
  )

  const renderList = useMemo(() => {
    return (
      <GestureHandlerRootView style={CommonStyles.flex}>
        <Carousel
          style={styles.list}
          {...baseOptions}
          loop={false}
          mode={'parallax'}
          ref={ref}
          onSnapToItem={(index) => {
            if (index === question?.length - 1) {
              setIsAnimation(true)
            } else if (index !== question?.length - 1 && isAnimation) {
              setIsAnimation(false)
            }
          }}
          modeConfig={{parallaxScrollingScale: 0.9, parallaxScrollingOffset: 60}}
          onProgressChange={(_, absoluteProgress) => (progressValue.value = absoluteProgress)}
          height={heightPx(80)}
          data={question}
          renderItem={renderItem}
        />
      </GestureHandlerRootView>
    )
  }, [question])

  const renderAnimatedButton = useMemo(() => {
    return (
      <AnimatedButton
        onPress={() => navigation.replace(Screen.TestResultScreen)}
        isVisible={isAnimation}
      />
    )
  }, [isAnimation])

  return (
    <AppContainer isGradient>
      {renderLogoTitle}
      {renderList}
      {renderAnimatedButton}
    </AppContainer>
  )
}

export default TestQuestionsScreen
