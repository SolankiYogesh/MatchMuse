import React, {useCallback, useMemo, useState} from 'react'
import {FlatList, SafeAreaView, View} from 'react-native'

import {REELS} from '../../../../DummyData/MatchingProfileFeeds'
import {CommonStyles} from '../../../../Helpers'
import {W_HEIGHT} from '../../../../Helpers/Responsive'
import RenderReelItem from './Components/RenderReelItem'

const ReelsScreen = () => {
  const [reels] = useState(REELS)
  const [activeID, setActiveID] = useState('')
  const [isMute, setISMute] = useState(false)

  const renderItem = useMemo(
    () =>
      ({item}: any) => {
        return (
          <View style={CommonStyles.fullView}>
            <RenderReelItem
              onPressMute={() => setISMute(!isMute)}
              isMute={isMute}
              item={item}
              activeID={activeID}
            />
          </View>
        )
      },
    [activeID, isMute]
  )

  const onViewableItemsChanged = useCallback((info: any) => {
    setActiveID(info?.viewableItems[0]?.item?.id)
  }, [])

  return (
    <SafeAreaView style={CommonStyles.flex}>
      <FlatList
        snapToAlignment={'start'}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        data={reels}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        initialNumToRender={3}
        windowSize={3}
        maxToRenderPerBatch={0}
        onViewableItemsChanged={onViewableItemsChanged}
        getItemLayout={(item, index) => {
          return {
            index,
            length: W_HEIGHT,
            offset: index * W_HEIGHT
          }
        }}
        decelerationRate={'fast'}
        snapToInterval={W_HEIGHT}
      />
    </SafeAreaView>
  )
}

export default ReelsScreen
