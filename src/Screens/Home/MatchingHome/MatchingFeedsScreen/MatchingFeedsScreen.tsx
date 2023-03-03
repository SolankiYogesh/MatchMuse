import React, {useMemo, useRef, useState} from 'react'
import {SafeAreaView} from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import Animated, {SlideInUp} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'

import StartUpModal from '../../../../Components/Modals/StartUpModal'
import {FEEDS} from '../../../../DummyData/MatchingProfileFeeds'
import {CommonStyles, Utility} from '../../../../Helpers'
import {heightPx, W_WIDTH} from '../../../../Helpers/Responsive'
import RenderFeedItem from './Componenets/RenderFeedItem'
import SubmitModal from './Componenets/SubmitModal'
import YourSafetyModal from './Componenets/YourSafetyModal'

const MatchingFeedsScreen = () => {
  const [feeds, setFeeds] = useState(FEEDS)
  const [isStartupModal, setStartUpModal] = useState(true)
  const [submitModal, setSubmitModal] = useState(false)
  const [isSafetyModal, setISSafetyModal] = useState(false)
  const scrollRef = useRef<any>()

  const onIndexChange = (index: number) => {
    const data: any[] = Utility.deepClone(feeds)
    data.splice(0, 1)

    if (scrollRef.current) {
      scrollRef.current?.scrollTo({
        index: 0
      })
    }
    setFeeds(data)
  }

  const onPressContinue = () => {
    setStartUpModal(false)
    ImageCropPicker.openCamera({
      includeBase64: true,
      mediaType: 'video',
      minFiles: 1,
      maxFiles: 1,
      multiple: false
    }).then(() => {
      setSubmitModal(true)
    })
  }

  const renderitem = useMemo(
    () =>
      ({item}) => {
        return (
          <Animated.View key={item?.id} exiting={SlideInUp}>
            <RenderFeedItem item={item} />
          </Animated.View>
        )
      },
    []
  )

  return (
    <SafeAreaView style={CommonStyles.flex}>
      <Carousel
        width={W_WIDTH}
        height={heightPx(85)}
        data={feeds}
        defaultIndex={0}
        windowSize={11}
        vertical
        ref={scrollRef}
        loop={false}
        mode={'parallax'}
        modeConfig={{parallaxScrollingScale: 1, parallaxScrollingOffset: 60}}
        onSnapToItem={onIndexChange}
        renderItem={renderitem}
      />

      {isStartupModal && (
        <StartUpModal
          onPressContinue={onPressContinue}
          onClose={() => {
            setStartUpModal(false)
          }}
        />
      )}
      {submitModal && (
        <SubmitModal
          onClose={() => {
            setSubmitModal(false)
            setISSafetyModal(true)
          }}
        />
      )}
      {isSafetyModal && <YourSafetyModal onClose={() => setISSafetyModal(false)} />}
    </SafeAreaView>
  )
}

export default MatchingFeedsScreen
