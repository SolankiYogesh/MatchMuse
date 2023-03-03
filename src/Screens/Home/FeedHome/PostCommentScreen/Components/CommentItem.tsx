import React, {useState} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import AnimatedImage from '../../../../../Components/Animations/AnimatedImage'
import {CommonStyles, Images} from '../../../../../Helpers'
import {moderateScale} from '../../../../../Helpers/Responsive'
import {styles} from '../PostCommentScreenStyle'

const CommentItem = ({item, onPressReply = () => {}}: any) => {
  const [isLiked, setISLiked] = useState(false)
  const [isSubComment, setISSubComment] = useState(false)

  const renderSubCommentList = () => {
    return (
      <FlatList
        data={item?.subComments}
        keyExtractor={(item) => item?.id}
        renderItem={renderSubComment}
        showsVerticalScrollIndicator={false}
      />
    )
  }

  const renderSubComment = (itemm: any) => {
    const i = itemm?.item

    return <CommentItem item={i} onPressReply={() => onPressReply(item)} />
  }

  return (
    <View style={[styles.postViewContainer, styles.commentContainer]}>
      <View style={styles.headerMainImageContainer}>
        <Image
          borderRadius={moderateScale(5)}
          resizeMode={'cover'}
          source={{uri: item?.image}}
          style={styles.profileImage}
        />
      </View>
      <View style={[CommonStyles.flex, styles.textContainer]}>
        <Text style={styles.nameText}>
          {'lose.asline@comm'}
          <Text style={styles.descText}>{` ${item?.text}`}</Text>
        </Text>
        <View style={CommonStyles.row}>
          <Text style={styles.timeText}>{'January 2022'}</Text>
          <TouchableOpacity onPress={() => onPressReply(item)}>
            <Text style={[styles.timeText, styles.replytext]}>{t('FD261')}</Text>
          </TouchableOpacity>
        </View>
        {item?.subComments?.length > 0 && (
          <>
            <TouchableOpacity onPress={() => setISSubComment(!isSubComment)}>
              <Text style={[styles.timeText, styles.underLine]}>
                {!isSubComment
                  ? `${t('FD265')} ${item?.subComments?.length} ${t('FD266')}`
                  : t('FD264')}
              </Text>
            </TouchableOpacity>
            {isSubComment && renderSubCommentList()}
          </>
        )}
      </View>
      <AnimatedImage
        onPress={() => setISLiked(!isLiked)}
        source={isLiked ? Images.animatedHeart : Images.heart}
        style={[styles.heartImage, !isLiked && styles.greyTint]}
      />
    </View>
  )
}

export default CommentItem
