import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {Color, Images, Utility} from '../../../../Helpers'
import SearchEntertainmentViewTab from './Components/SearchEntertainmentViewTab'
import SearchFeedViewTab from './Components/SearchFeedViewTab'
import SearchLocationViewTab from './Components/SearchLocationViewTab'
import SearchStoreViewTab from './Components/SearchStoreViewTab'
import SearchTopViewTab from './Components/SearchTopViewTab'
import {styles} from './SearchTabsScreenStyle'

const tabData = [
  {
    text: t('FD302'),
    isFocus: true,
    icon: null
  },
  {
    text: t('FD303'),
    isFocus: false,
    icon: Images.feeds
  },
  {
    text: t('FD304'),
    isFocus: false,
    icon: Images.store
  },
  {
    text: t('FD305'),
    isFocus: false,
    icon: Images.location_line
  },
  {
    text: t('FD306'),
    isFocus: false,
    icon: Images.entertainment
  }
]

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

const SearchTabsScreen = () => {
  const searchInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const [tabs, setTabs] = useState(tabData)
  const [searchText, setSearchText] = useState('')
  const [searchData, setSearchData] = useState<any>([])
  const users = useMemo(() => usersData, [])

  useEffect(() => {
    if (!_.trim(searchText)) {
      setSearchData([])
    } else {
      onSearch()
    }
  }, [searchText])

  const onSearch = () => {
    const filter = _.filter(users, (i: any) => {
      return i?.username?.toLowerCase()?.indexOf(searchText?.toLowerCase()) > -1
    })

    setSearchData(filter)
  }

  useEffect(() => {
    searchInputRef.current?.focus()
  }, [])
  const renderHeaderSearch = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
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
      </View>
    )
  }

  const onPressTab = (item: any) => {
    const deepClone = Utility.deepClone(tabs)
    _.map(deepClone, (i: any, index: number) => {
      deepClone[index].isFocus = false
    })
    const index = _.findIndex(deepClone, (i: any) => i?.text === item?.text)
    deepClone[index].isFocus = true
    setTabs(deepClone)
  }

  const renderTabView = () => {
    return (
      <View style={styles.tabContainerView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {_.map(tabs, (i) => {
            return (
              <View style={[styles.tabBackContainer, i.isFocus && styles.selectedTabBackContainer]}>
                <TouchableOpacity style={styles.tabContainer} onPress={() => onPressTab(i)}>
                  {i.icon && (
                    <Image
                      source={i.icon}
                      resizeMode={'contain'}
                      style={[styles.tabIcon, i.isFocus && styles.selectedTabIcon]}
                    />
                  )}
                  <Text style={[styles.tabText, i.isFocus && styles.selectedTabText]}>
                    {i.text}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  const selectedTab = useMemo(() => _.find(tabs, (i) => i.isFocus), [tabs])

  const renderTabScreen = () => {
    switch (selectedTab?.text) {
      case t('FD302'):
        return <SearchTopViewTab data={searchData} />
      case t('FD303'):
        return <SearchFeedViewTab data={searchData} />
      case t('FD304'):
        return <SearchStoreViewTab data={searchData} />
      case t('FD305'):
        return <SearchLocationViewTab data={searchData} />
      case t('FD306'):
        return <SearchEntertainmentViewTab data={searchData} />

      default:
        return <SearchTopViewTab data={searchData} />
    }
  }

  return (
    <AppContainer bodyStyle={styles.container}>
      {renderHeaderSearch()}
      {renderTabView()}
      {renderTabScreen()}
    </AppContainer>
  )
}

export default SearchTabsScreen
