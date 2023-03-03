import React, {useMemo} from 'react'
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import {ChatsList} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'
import ChatUserItem from './Components/ChatUserItem'
import RenderChatMatches from './Components/RenderChatMatches'

const ChatUsersScreen = () => {
  const renderHeader = useMemo(() => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.leftText}>
          {t('FD401')}
          {` (${0})`}
        </Text>
        <Text style={styles.rightText}>
          {t('FD402')}
          {` (${0})`}
        </Text>
      </View>
    )
  }, [])

  const renderUsersChatsList = useMemo(() => {
    return (
      <FlatList
        data={ChatsList}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ChatUserItem item={item} />}
      />
    )
  }, [])

  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderChatMatches />
        {renderHeader}
        {renderUsersChatsList}
      </ScrollView>
    </AppContainer>
  )
}

export default ChatUsersScreen
const styles = StyleSheet.create({
  headerView: {
    marginHorizontal: scale(15),
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  leftText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  rightText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.Primary
  }
})
