import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import {NOTIFICATIONSACTIVITIES} from '../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../../Helpers'
import {moderateScale, verticalScale} from '../../../Helpers/Responsive'
import CommentItem from '../../../Screens/Home/FeedHome/PostCommentScreen/Components/CommentItem'

interface LiveStreamCommentSheetProps {
  isLiveChat?: boolean
}

const LiveStreamCommentSheet = forwardRef((props: LiveStreamCommentSheetProps, ref) => {
  const [isReply, setISReply] = useState(false)
  const [replyComment, setReplyComment] = useState<any>(null)
  const [comments, setComments] = useState(NOTIFICATIONSACTIVITIES)
  const [isExtended, setISExtended] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus(text: string) {
          onPressComment(text)
        }
      }
    },
    []
  )

  const onPressComment = (commentText: string) => {
    const cloneData = Utility.deepClone(comments)

    if (isReply) {
      const findIndex = _.findIndex(cloneData, (i: any) => i?.id === replyComment?.id)
      const subCommentItme = {
        image: 'https://kaprat.com/dev/demo/profile/04.jpg',
        name: 'SomeOne',
        text: commentText,
        isFriendRequest: true,
        id: cloneData[findIndex].subComments?.length + 1 || 0
      }
      const subComments = [...(cloneData[findIndex]?.subComments || []), subCommentItme]

      cloneData[findIndex].subComments = subComments
    } else {
      cloneData.push({
        image: 'https://kaprat.com/dev/demo/profile/04.jpg',
        name: 'SomeOne',
        text: commentText,
        isFriendRequest: true,
        id: cloneData?.length + 1
      })
    }
    setISReply(false)
    setReplyComment(null)

    setComments(cloneData)
  }

  const renderItem = ({item}: any) => {
    return (
      <CommentItem
        onPressReply={(item: any) => {
          setReplyComment(item)
          setISReply(true)
        }}
        item={item}
      />
    )
  }

  const renderHeader = () => {
    return (
      <View style={[CommonStyles.row, styles.headerContainer]}>
        <Text style={styles.commentText}>
          {t('FD253')} <Text style={styles.greyText}>{' 10'}</Text>
        </Text>
        <TouchableOpacity onPress={() => setISExtended(!isExtended)}>
          <Image
            source={Images.up_down_arrows}
            style={styles.exntendImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={!isExtended ? _.slice(comments, 0, 2) : comments}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.image + index}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
      {!isExtended && <View style={styles.abnsoluteView} />}
    </View>
  )
})

export default LiveStreamCommentSheet

const styles = StyleSheet.create({
  exntendImage: {
    height: verticalScale(15),
    width: verticalScale(15),
    tintColor: Color.darkGrey
  },
  commentText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    flex: 1,
    textTransform: 'uppercase'
  },
  greyText: {
    color: Color.darkGrey
  },
  headerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    zIndex: 1000
  },
  container: {
    marginTop: verticalScale(2),
    zIndex: 1000
  },
  abnsoluteView: {
    position: 'absolute',
    ...CommonStyles.viewFull
  }
})
