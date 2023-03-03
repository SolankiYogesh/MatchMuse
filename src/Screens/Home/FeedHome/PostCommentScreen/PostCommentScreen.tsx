import React, {useState} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import AppScrollView from '../../../../Components/AppScrollView'
import {NOTIFICATIONSACTIVITIES} from '../../../../DummyData/MatchingProfileFeeds'
import {CommonStyles, Images, Utility} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import CommentInput from './Components/CommentInput'
import CommentItem from './Components/CommentItem'
import {styles} from './PostCommentScreenStyle'

const PostCommentScreen = () => {
  const navigation = useNavigation()
  const route: any = useRoute().params
  const mainItem = route?.item
  const [isReply, setISReply] = useState(false)
  const [replyComment, setReplyComment] = useState<any>(null)
  const [comments, setComments] = useState(NOTIFICATIONSACTIVITIES)

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

  const renderHeader = () => {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={[CommonStyles.row, styles.innerView]}>
            <View style={CommonStyles.row}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>{'Kommentare'}</Text>
            </View>
            <TouchableOpacity>
              <Image source={Images.vertical_menu} style={styles.dotMenu} resizeMode={'contain'} />
            </TouchableOpacity>
          </View>
          <View style={styles.postViewContainer}>
            <View style={styles.headerMainImageContainer}>
              <Image
                borderRadius={moderateScale(5)}
                resizeMode={'cover'}
                source={{uri: mainItem?.image}}
                style={styles.profileImage}
              />
            </View>
            <View style={[CommonStyles.flex, styles.textContainer]}>
              <Text style={styles.nameText}>
                {'lose.asline@comm'}
                <Text style={styles.descText}>
                  {' Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                </Text>
              </Text>
              <Text style={styles.timeText}>{'January 2022'}</Text>
            </View>
          </View>
        </View>
      </View>
    )
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

  return (
    <AppContainer>
      <AppScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.image + index}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </AppScrollView>
      <CommentInput
        onCloseReply={() => {
          setReplyComment(null)
          setISReply(false)
        }}
        replyerName={' Anup Soni'}
        isReplyView={isReply}
        onPressComment={onPressComment}
      />
    </AppContainer>
  )
}

export default PostCommentScreen
