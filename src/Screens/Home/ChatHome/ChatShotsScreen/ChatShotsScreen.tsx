import React, {useMemo, useState} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import {ShotsData} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'
import RequestModal from './Components/RequestModal'
import ShotsItem from './Components/ShotsItem'

const ChatShotsScreen = () => {
  const [isRequestModal, setISRequestModal] = useState(false)
  const renderHeader = useMemo(() => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity>
          <Text style={styles.leftText}>{t('FD404')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setISRequestModal(true)}>
          <Text style={styles.rightText}>{t('FD405')}</Text>
        </TouchableOpacity>
      </View>
    )
  }, [])

  const renderShotsList = useMemo(() => {
    return (
      <FlatList
        data={ShotsData}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ShotsItem item={item} />}
      />
    )
  }, [])

  return (
    <AppContainer>
      {renderHeader}
      {renderShotsList}
      {isRequestModal && <RequestModal onClose={() => setISRequestModal(false)} />}
    </AppContainer>
  )
}

export default ChatShotsScreen
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
  },
  contentContainerStyle: {
    marginHorizontal: scale(20)
  }
})
