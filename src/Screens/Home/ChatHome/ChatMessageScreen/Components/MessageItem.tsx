import React, {useCallback} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'

import {Color, Fonts, Utility} from '../../../../../Helpers'
import Constant from '../../../../../Helpers/Constant'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import TextMessageItem from './TextMessageItem'
import VoiceMessageItem from './VoiceMessageItem'

const MessageItem = ({item, index, list = []}: any) => {
  const prevData = list[index + 1]
  const prevDate = prevData ? moment(prevData.sending_time).format('DD/MM/YYYY') : ''
  const nowDate = moment(item.sending_time).format('DD/MM/YYYY')

  const isYou: boolean = item?.isYou
  const type: string = item?.type

  const renderDateTag = useCallback((date: string) => {
    if (date) {
      return (
        <Text style={[styles.dateTextView, styles.dateTextView]}>
          {Utility.getDateString(date)}
        </Text>
      )
    }

    return null
  }, [])

  const renderDateMsg = () => {
    return (
      <>
        {prevDate !== '' && prevDate !== nowDate && renderDateTag(item.created_at)}
        {prevDate === '' && renderDateTag(item.created_at)}
      </>
    )
  }

  return (
    <View>
      {renderDateMsg()}
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={
          isYou ? [Color.greyChatBack, Color.greyChatBack] : [Color.pink_shade1, Color.red_shade1]
        }
        style={isYou ? styles.leftContainer : styles.rightContainer}
      >
        {type === Constant.TEXT ? (
          <TextMessageItem item={item} />
        ) : type === Constant.VOICE ? (
          <VoiceMessageItem item={item} />
        ) : null}
      </LinearGradient>
      <Text style={[styles.dateText, !isYou && styles.rightdateText]}>
        {Utility.getDateString(item?.created_at, true)}
      </Text>
    </View>
  )
}

export default MessageItem

const styles = StyleSheet.create({
  leftContainer: {
    marginLeft: scale(10),
    padding: scale(10),
    borderTopRightRadius: moderateScale(15),
    borderTopLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    maxWidth: '80%',
    alignSelf: 'flex-start'
  },
  rightContainer: {
    marginRight: scale(10),
    padding: scale(10),
    borderTopRightRadius: moderateScale(15),
    borderTopLeftRadius: moderateScale(15),
    borderBottomLeftRadius: moderateScale(15),
    maxWidth: '80%',
    alignSelf: 'flex-end'
  },
  dateText: {
    fontSize: moderateScale(12),
    color: Color.black,
    fontFamily: Fonts.medium,
    marginLeft: scale(10),
    marginTop: verticalScale(3),
    marginBottom: verticalScale(15)
  },
  rightdateText: {
    marginRight: scale(10),
    alignSelf: 'flex-end'
  },
  dateTextView: {
    alignSelf: 'center'
  }
})
