import React, {useRef, useState} from 'react'
import {Image, ScrollView, TextInput, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import {Color, Images} from '../../../Helpers'
import RenderFollowingList from '../../../Screens/Home/EntertainmentHome/EntertainmentFeedsScreen/Components/RenderFollowingList'
import AppContainer from '../../AppContainer'
import {styles} from '../LiveStreamVideoModel'
import LiveChatContainer from './LiveChatContainer'
import LiveStreamCommentSheet from './LiveStreamCommentSheet'
import ReactionContainer from './ReactionContainer'
import VideoPlayer from './VideoPlayer'

const VideoDetailsConainer = ({onClose = () => {}, isLive = false}) => {
  const [isLiveChat, setISLiveChat] = useState(false)

  const commentRef = useRef<any>(null)
  const [comment, setComment] = useState('')
  return (
    <AppContainer isTopSafeArea statusbarColor={Color.white}>
      <VideoPlayer isLive={isLive} onClose={onClose} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReactionContainer isLive={isLive} onPressLiveChat={() => setISLiveChat(!isLiveChat)} />
        {!isLive && <LiveStreamCommentSheet ref={commentRef} isLiveChat={isLiveChat} />}
        <RenderFollowingList isLable={false} />
      </ScrollView>
      {isLiveChat && isLive && <LiveChatContainer onClose={() => setISLiveChat(false)} />}
      {isLiveChat && (
        <View style={styles.footerContainer}>
          <View style={styles.inputView}>
            <TextInput
              placeholder={String(t('FD289'))}
              placeholderTextColor={Color.grey_Shade2}
              onChangeText={setComment}
              value={comment}
              ref={(ref) => ref?.focus()}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => {
                commentRef.current?.focus(comment)
                setComment('')
                setISLiveChat(false)
              }}
            >
              <Image source={Images.send} resizeMode={'contain'} style={styles.sendBtnImage} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </AppContainer>
  )
}

export default VideoDetailsConainer
