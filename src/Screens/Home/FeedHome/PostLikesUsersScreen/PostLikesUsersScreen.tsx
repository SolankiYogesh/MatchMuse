import React, {useEffect, useState} from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import {STORYLIST} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import LikeUserItem from './LikeUserItem'
import {styles} from './PostLikesUsersStyle'

const PostLikesUsersScreen = () => {
  const route: any = useRoute().params
  const mainItem = route?.item
  const navigation = useNavigation()
  const [users, setUsers] = useState(STORYLIST)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!_.trim(search)) {
      setUsers(STORYLIST)
    } else {
      const filter = _.filter(STORYLIST, (i: any) => {
        return i?.username?.toLowerCase().indexOf(search?.toLowerCase()) > -1
      })

      setUsers(filter)
    }
  }, [search])

  const renderHeader = () => {
    return (
      <View style={CommonStyles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{mainItem?.name}</Text>
      </View>
    )
  }

  const renderSearchView = () => {
    return (
      <View>
        <View style={[CommonStyles.row, styles.heartView]}>
          <Image source={Images.animatedHeart} style={styles.heartImage} resizeMode={'contain'} />
          <Text style={styles.likeCountText}>{10}</Text>
        </View>
        <View style={styles.inputView}>
          <Image style={styles.searchImage} resizeMode={'contain'} source={Images.search} />
          <TextInput
            selectionColor={Color.Primary}
            placeholder={String(t('FD267'))}
            style={styles.input}
            returnKeyType={'search'}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
    )
  }

  const renderUsersList = () => {
    return (
      <FlatList
        data={users}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={renderUserItem}
        style={styles.listStyle}
        showsVerticalScrollIndicator={false}
      />
    )
  }

  const renderUserItem = ({item}: any) => {
    return <LikeUserItem item={item} />
  }

  return (
    <SafeAreaView style={CommonStyles.flex}>
      <StatusBar backgroundColor={Color.white} />
      {renderHeader()}
      {renderSearchView()}
      {renderUsersList()}
    </SafeAreaView>
  )
}

export default PostLikesUsersScreen
