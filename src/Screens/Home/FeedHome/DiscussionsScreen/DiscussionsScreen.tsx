import React, {useState} from 'react'
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {Color, CommonStyles, Images, Utility} from '../../../../Helpers'
import {styles} from './DiscussionsScreenStyle'
import DiscussionUserItem from './DiscussionUserItem'

const usersListData = [
  {
    image: 'https://kaprat.com/dev/demo/profile/01.jpg',
    replies: 120,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/02.jpg',
    replies: 100,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/03.jpg',
    replies: 90,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/04.jpg',
    replies: 112,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/05.jpg',
    replies: 50,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/01.jpg',
    replies: 120,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/02.jpg',
    replies: 100,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/03.jpg',
    replies: 90,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/04.jpg',
    replies: 112,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/05.jpg',
    replies: 50,
    date: '12 Jul 2022',
    username: 'Robert',
    name: 'Rules and Polices'
  }
]

const featuresButtons = [
  {
    text: t('FD286'),
    isSelected: true,
    id: 'f--sdfd-fsdf'
  },
  {
    text: t('FD287'),
    isSelected: false,
    id: 'f-sdf-fds-fd'
  },
  {
    text: t('FD288'),
    isSelected: false,
    id: 'sd-fds-fd-sf-ds'
  }
]

const DiscussionsScreen = () => {
  const navigation = useNavigation()
  const [buttons, setButtons] = useState(featuresButtons)
  const [usersList, setUserList] = useState(usersListData)

  const onPressTab = (item: any) => {
    const deepClone = Utility.deepClone(buttons)
    _.map(deepClone, (i: any, index: number) => {
      deepClone[index].isSelected = false
    })
    const index = _.findIndex(deepClone, (i: any) => i?.id === item?.id)
    deepClone[index].isSelected = true
    setButtons(deepClone)
    setUserList(_.shuffle(usersList))
  }

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={CommonStyles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('FD281')}</Text>
        </View>
        <Text numberOfLines={2} style={styles.hintText}>
          {'Diskutiere ausgiebig mit der Fyerdates-Community'}
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {_.map(buttons, (i, index) => {
            return i.isSelected ? (
              <TouchableOpacity style={CommonStyles.flex} key={index} onPress={() => onPressTab(i)}>
                <LinearGradient
                  style={[
                    styles.itemView,
                    index === 0 && styles.margin,
                    styles.noBorder,
                    index !== buttons?.length - 1 && styles.spaccer
                  ]}
                  start={{x: 0.3, y: 0}}
                  end={{x: 0.8, y: 1}}
                  locations={[0.1865, 0.8077]}
                  colors={[Color.pink_shade1, Color.red_shade1]}
                >
                  <Text style={[styles.itemText, styles.colorText]}>{i?.text}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => onPressTab(i)}
                style={[styles.itemView, index !== buttons?.length - 1 && styles.spaccer]}
              >
                <Text style={styles.itemText}>{i?.text}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  const renderList = () => {
    return (
      <FlatList
        data={usersList}
        keyExtractor={(item, index) => item.image + index}
        renderItem={renderUserItem}
        showsVerticalScrollIndicator={false}
      />
    )
  }

  const renderUserItem = ({item}: any) => {
    return <DiscussionUserItem item={item} />
  }

  return (
    <AppContainer style={CommonStyles.flex}>
      {renderHeader()}
      {renderList()}
    </AppContainer>
  )
}

export default DiscussionsScreen
