import React from 'react'
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import EamptyView from '../../../../../Components/EamptyView'
import {CommonStyles, Images, Screen} from '../../../../../Helpers'
import {styles} from '../SearchTabsScreenStyle'
import SearchedItem from './SearchedItem'

const SearchEntertainmentViewTab = ({data}: any) => {
  const navigation: any = useNavigation()
  const onPressHistory = () => navigation.navigate(Screen.SearchHistoryScreen)

  const renderItem = ({item}: any) => {
    return <SearchedItem item={item} />
  }
  const renderEamptyView = () => <EamptyView />

  return (
    <View style={CommonStyles.flex}>
      <ScrollView contentContainerStyle={CommonStyles.flex} showsVerticalScrollIndicator={false}>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={CommonStyles.flex}
          keyExtractor={(_, index) => index.toString()}
          data={data}
          ListEmptyComponent={renderEamptyView}
          renderItem={renderItem}
        />
        {data?.length > 0 && (
          <TouchableOpacity
            onPress={onPressHistory}
            style={[CommonStyles.row, styles.btnContainer]}
          >
            <Text style={styles.btntext}>{t('FD307')}</Text>
            <Image style={styles.playIcon} resizeMode={'contain'} source={Images.play} />
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  )
}

export default SearchEntertainmentViewTab
