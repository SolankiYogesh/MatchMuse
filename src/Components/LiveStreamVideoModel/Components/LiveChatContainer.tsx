import React, {useMemo, useRef, useState} from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import {t} from 'i18next'

import {dummyComments, FEEDS} from '../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale, W_HEIGHT} from '../../../Helpers/Responsive'
import ChatCommentInput from './ChatCommentInput'
import LiveChatCommentItem from './LiveChatCommentItem'

interface LiveChatContainerProps {
  onClose?: () => void
}

const LiveChatContainer = (props: LiveChatContainerProps) => {
  const {onClose} = props
  const bottomSheet = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => [heightPx(69), W_HEIGHT - verticalScale(40)], [])
  const [chatComments, setChatComments] = useState<any>(dummyComments)
  const randomImage = useMemo(() => Math.floor(Math.random() * 9) + 1, [])
  const [index, setIndex] = useState(0)

  const onPressSendComment = (text: string) => {
    const deepClone = Utility.deepClone(chatComments)
    deepClone.push({
      time: Date.now(),
      text,
      image: FEEDS[randomImage].image
    })
    setChatComments(deepClone)
  }

  const renderHeader = () => {
    return (
      <View style={[styles.headerContainer, index === 1 && styles.borderRadiusChange]}>
        <View>
          <Text style={styles.liveChattext}>{t('FD325')}</Text>
          <View style={CommonStyles.row}>
            <Text style={styles.topChatText}>{t('FD326')}</Text>
            <View style={CommonStyles.row}>
              <Image source={Images.user_1} resizeMode={'contain'} style={styles.userImage} />
              <Text style={styles.topChatText}>{'1.2k'}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onClose}>
          <Image source={Images.close} style={styles.closeImage} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderItem = useMemo(
    () =>
      ({item}: any) => {
        return <LiveChatCommentItem item={item} />
      },
    []
  )

  return (
    <>
      <BottomSheet
        handleComponent={renderHeader}
        snapPoints={snapPoints}
        onClose={onClose}
        enablePanDownToClose
        ref={bottomSheet}
        onChange={setIndex}
      >
        <FlatList data={chatComments} renderItem={renderItem} keyExtractor={(item) => item?.time} />
      </BottomSheet>
      <ChatCommentInput onPressComment={onPressSendComment} />
    </>
  )
}

export default LiveChatContainer

const styles = StyleSheet.create({
  userImage: {
    height: verticalScale(15),
    width: verticalScale(15),
    tintColor: Color.darkGrey,
    marginLeft: scale(10)
  },
  topChatText: {
    fontSize: moderateScale(15),
    color: Color.darkGrey,
    fontFamily: Fonts.semi_bold,
    marginHorizontal: scale(5)
  },
  liveChattext: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginVertical: verticalScale(10)
  },
  closeImage: {
    height: verticalScale(18),
    width: verticalScale(18)
  },
  headerContainer: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    width: '100%',
    backgroundColor: Color.white,
    ...CommonStyles.shadow,
    padding: scale(10),
    borderRadius: moderateScale(20)
  },
  borderRadiusChange: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
})
