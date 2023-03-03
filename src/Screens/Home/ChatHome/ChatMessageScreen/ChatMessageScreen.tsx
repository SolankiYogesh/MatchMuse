import React, {useMemo, useRef, useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import AppContainer from '../../../../Components/AppContainer'
import IosBottomButtonAvoid from '../../../../Components/IosBottomButtonAvoid'
import {Color, CommonStyles} from '../../../../Helpers'
import ChatBottomInput from './Components/ChatBottomInput'
import ChatHeader from './Components/ChatHeader'
import InvitationContainer from './Components/InvitationContainer'
import InvitationHeader from './Components/InvitationHeader'
import MessageItem from './Components/MessageItem'

const ChatMessageScreen = () => {
  const {item}: any = useRoute().params
  const [messages, setMessage] = useState<any[]>([])
  const [isInvited, setISInvites] = useState(true)
  const navigation = useNavigation()
  const listRef = useRef<FlatList>(null)

  const onSendMessage = (value: any) => {
    // listRef.current?.scrollToEnd()
    const messagePayload = {
      text: value?.message,
      isYou: Math.random() < 0.5,
      type: value?.type,
      isRead: Math.random() < 0.5,
      created_at: Date.now(),
      voice: value?.audio || '',
      duration: value?.duration
    }

    setMessage((state) => [messagePayload, ...state])
  }

  const renderheader = useMemo(() => {
    return isInvited ? <InvitationHeader item={item} /> : <ChatHeader item={item} />
  }, [item, isInvited])

  const renderListView = useMemo(() => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={messages}
          inverted
          ref={listRef}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => <MessageItem list={messages} index={index} item={item} />}
          keyExtractor={(item, index) => item?.id + index?.toString()}
        />
      </View>
    )
  }, [messages])

  const renderBottomContainer = useMemo(() => {
    return isInvited ? (
      <InvitationContainer
        onPressInvite={(isInvitedByUser: boolean) => {
          if (!isInvitedByUser) {
            navigation.goBack()
          } else {
            setISInvites(false)
          }
        }}
        item={item}
      />
    ) : (
      <ChatBottomInput onPressSendMessage={onSendMessage} />
    )
  }, [isInvited])

  return (
    <AppContainer isEdgeContainer bodyStyle={styles.container}>
      {renderheader}
      {renderListView}
      {renderBottomContainer}

      <IosBottomButtonAvoid keyboardVerticalOffset={10} />
    </AppContainer>
  )
}

export default ChatMessageScreen

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flex,
    backgroundColor: Color.offWhite
  },
  listContainer: {
    ...CommonStyles.flex,
    backgroundColor: Color.white
  }
})
