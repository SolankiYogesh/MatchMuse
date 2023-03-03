import React, {useEffect, useRef, useState} from 'react'
import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import EamptyView from '../../../../Components/EamptyView'
import {Color, CommonStyles, Images, Utility} from '../../../../Helpers'
import SearchedItem from '../SearchTabsScreen/Components/SearchedItem'
import {styles} from './SearchHistoryScreenStyle'

const usersData = [
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    description: 'Paul nEvmber Plazza'
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    description: 'Paul nEvmber Plazza'
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    description: 'Paul nEvmber Plazza'
  }
]

const SearchHistoryScreen = () => {
  const searchInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const [searchText, setSearchText] = useState('')
  const [isHistoryScreen, setISHistoryScreen] = useState(false)
  const [users, setUsers] = useState(usersData)
  useEffect(() => {
    searchInputRef.current?.focus()
  }, [])

  const renderHeaderSearch = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            if (isHistoryScreen) {
              setISHistoryScreen(false)
            } else {
              navigation.goBack()
            }
          }}
        >
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        {isHistoryScreen ? (
          <Text style={styles.headerTitle}>{t('FD312')}</Text>
        ) : (
          <View style={styles.searchButtonContainer}>
            <Image source={Images.search} resizeMode={'contain'} style={styles.searchImage} />

            <TextInput
              ref={searchInputRef}
              value={searchText}
              onChangeText={setSearchText}
              selectionColor={Color.Primary}
              style={styles.headerText}
              placeholder={String(t('FD267'))}
            />
            {_.trim(searchText).length > 0 && (
              <TouchableOpacity onPress={() => setSearchText('')}>
                <Image style={styles.closeImage} resizeMode={'contain'} source={Images.close} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    )
  }

  const renderTopView = () => {
    return (
      <View style={styles.topContainer}>
        {isHistoryScreen && (
          <Text style={styles.longText}>
            {
              'hier werden nur Dinge angezeight, nach denen Sei in der Hauptsuchleiste gesucht haben'
            }
          </Text>
        )}
        <View style={styles.topRowView}>
          <Text style={styles.recomeedeText}>{isHistoryScreen ? t('FD311') : t('FD309')}</Text>
          <TouchableOpacity style={styles.btnCOntainer} onPress={() => setISHistoryScreen(true)}>
            <Text style={[styles.recomeedeText, styles.seeEverythingText]}>{t('FD310')}</Text>
            <Image style={styles.playIcon} resizeMode={'contain'} source={Images.play} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderEamptyView = () => <EamptyView />

  const renderItem = ({item}: any) => {
    return <SearchedItem item={item} isHistory onRemoveItem={onRemoveItem} />
  }

  const onRemoveItem = (item: any) => {
    const filterData = _.filter(users, (i) => i.username !== item?.username)
    setUsers(filterData)
  }

  const renderNonHistoryView = () => {
    return (
      <FlatList
        contentContainerStyle={CommonStyles.flex}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        data={users}
        ListEmptyComponent={renderEamptyView}
        renderItem={renderItem}
      />
    )
  }

  return (
    <AppContainer bodyStyle={styles.container}>
      {renderHeaderSearch()}
      {renderTopView()}
      {renderNonHistoryView()}
    </AppContainer>
  )
}

export default SearchHistoryScreen
