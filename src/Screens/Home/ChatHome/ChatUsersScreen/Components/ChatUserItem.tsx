import React, {useMemo} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import moment from 'moment'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts, Screen} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const ChatUserItem = ({item}: any) => {
  const randomMassageCount = useMemo(() => Math.floor(Math.random() * 100), [])
  const navigation: any = useNavigation()

  const onPressChatUser = () => {
    navigation.navigate(Screen.ChatMessageScreen, {
      item
    })
  }
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPressChatUser}>
      <AppProfileImage url={item?.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.messageText}>{item?.massage}</Text>
      </View>
      <View>
        <Text style={styles.timeText}>{moment(item?.time).format('MMMM YYYY')}</Text>
        {!!randomMassageCount && (
          <View style={styles.messageCountView}>
            <Text style={styles.massageCountText}>{randomMassageCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default ChatUserItem

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Color.white,
    marginHorizontal: scale(20),
    ...CommonStyles.row,
    padding: scale(10),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(15),
    flex: 1
  },
  nameContainer: {
    marginLeft: scale(10),
    flex: 1
  },
  messageCountView: {
    width: verticalScale(20),
    height: verticalScale(20),
    backgroundColor: Color.Primary,
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(300),
    alignSelf: 'center',
    marginVertical: verticalScale(10)
  },
  timeText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12),
    color: Color.black,
    alignSelf: 'flex-end'
  },
  massageCountText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(9),
    color: Color.white
  },
  nameText: {
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(15),
    color: Color.black
  },
  messageText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    color: Color.textGrey
  }
})
