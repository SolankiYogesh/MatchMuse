import React, {useEffect, useState} from 'react'
import {FlatList, Image, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppContainer from '../../../Components/AppContainer'
import {Images, Screen} from '../../../Helpers'
import SearchItemView from './Components/SearchItemView'
import {styles} from './SearchHomeStyle'

const SearchHomeScreen = () => {
  const [data, setData] = useState<never[]>([])
  const navigation: any = useNavigation()

  const onPressSearch = () => {
    navigation.navigate(Screen.SearchTabsScreen)
  }

  useEffect(() => {
    const newdata = []

    for (let index = 0; index < 9; index++) {
      newdata.push([
        {
          image: `https://kaprat.com/dev/demo/profile/0${index + 1}.jpg`,
          icon: Images.feeds
        },
        {
          image: `https://kaprat.com/dev/demo/city/${index + 1}.jpg`,
          icon: Images.local
        },
        {
          image: `https://kaprat.com/dev/demo/products/0${index + 1}.png`,
          icon: Images.store
        }
      ])
    }
    setData([...newdata, ...newdata])
  }, [])

  const renderHeaderSearch = () => {
    return (
      <TouchableOpacity style={styles.searchButtonContainer} onPress={onPressSearch}>
        <Image source={Images.search} resizeMode={'contain'} style={styles.searchImage} />
        <Text style={styles.headerText}>{t('FD267')}</Text>
      </TouchableOpacity>
    )
  }

  const renderListImages = () => {
    return (
      <FlatList
        renderItem={renderSearchIem}
        data={data}
        keyExtractor={(_, index) => `items${index + index}`}
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
      />
    )
  }

  const renderSearchIem = ({item, index}: any) => {
    return <SearchItemView item={item} index={index} />
  }

  return (
    <AppContainer bodyStyle={styles.container}>
      {renderHeaderSearch()}
      {renderListImages()}
    </AppContainer>
  )
}

export default SearchHomeScreen
