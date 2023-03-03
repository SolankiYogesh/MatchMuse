import React from 'react'
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppScrollView from '../../../../Components/AppScrollView'
import {CommonStyles, Images} from '../../../../Helpers'
import RenderGivewayItem from './Components/RenderGivewayItem'
import {styles} from './GiveawayScreenStyle'

const pollData = [
  {
    image: 'https://kaprat.com/dev/demo/profile/01.jpg',
    likeCount: 120,
    date: '30.03.2022',
    votes: 20
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/02.jpg',
    likeCount: 100,
    date: '30.03.2022',
    votes: 40
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/03.jpg',
    likeCount: 90,
    date: '30.03.2022',
    votes: 10
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/04.jpg',
    likeCount: 112,
    date: '30.03.2022',
    votes: 5
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/05.jpg',
    likeCount: 50,
    date: '30.03.2022',
    votes: 45
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/01.jpg',
    likeCount: 120,
    date: '30.03.2022',
    votes: 20
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/02.jpg',
    likeCount: 100,
    date: '30.03.2022',
    votes: 40
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/03.jpg',
    likeCount: 90,
    date: '30.03.2022',
    votes: 10
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/04.jpg',
    likeCount: 112,
    date: '30.03.2022',
    votes: 5
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/05.jpg',
    likeCount: 50,
    date: '30.03.2022',
    votes: 45
  }
]

const GiveawayScreen = () => {
  const navigation = useNavigation()

  const renderPollList = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={pollData}
        renderItem={renderItem}
        horizontal
      />
    )
  }

  const renderItem = ({item}: any) => {
    return <RenderGivewayItem item={item} />
  }

  const renderNewPollList = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={pollData}
        renderItem={renderItem}
        horizontal
      />
    )
  }

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={CommonStyles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('FD282')}</Text>
        </View>
        <Text numberOfLines={2} style={styles.hintText}>
          {'give something freely as a gift or donation'}
        </Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={CommonStyles.flex}>
      {renderHeader()}
      <AppScrollView showsVerticalScrollIndicator={false}>
        {renderPollList()}
        <Text style={styles.newText}>{t('FD290')}</Text>
        {renderNewPollList()}
      </AppScrollView>
    </SafeAreaView>
  )
}

export default GiveawayScreen
