import React, {useMemo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import moment from 'moment'

import {Color, CommonStyles, Fonts} from '../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../Helpers/Responsive'
import AppProfileImage from '../../AppProfileImage'

const LiveChatCommentItem = ({item}: any) => {
  const time = useMemo(() => moment(item?.time).format('hh:mm A'), [item?.time])
  return (
    <View style={styles.itemContainer}>
      <AppProfileImage url={item?.image} borderWidth={3} size={40} />
      <Text style={styles.timeStyle}>{time}</Text>
      <Text style={styles.textStyle}>{item?.text}</Text>
    </View>
  )
}

export default LiveChatCommentItem

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: verticalScale(10),
    ...CommonStyles.row
  },
  textStyle: {
    flex: 1,
    marginLeft: scale(10),
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  timeStyle: {
    marginLeft: scale(10),
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.darkGrey
  }
})
