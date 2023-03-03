import React, {useState} from 'react'
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import ProfileSheetLoader from '../../../../Components/ProfileSheetLoader'
import {Color, Utility} from '../../../../Helpers'
import RenderUserProfileItem from './Components/RenderUserProfileItem'
import {styles} from './FeedFavoriteStyle'

const radioButtons = [
  {
    text: t('FD296'),
    isSelected: true
  },
  {
    text: t('FD297'),
    isSelected: false
  },
  {
    text: t('FD298'),
    isSelected: false
  },
  {
    text: t('FD299'),
    isSelected: false
  },
  {
    text: t('FD300'),
    isSelected: false
  },
  {
    text: t('FD301'),
    isSelected: false
  }
]

const usersData = [
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },

  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: Utility.randomeUserName(),
    followers: (Math.random() * (9999 - 1000) + 1000).toFixed(2),
    starCount: (Math.random() * (99 - 10) + 10).toFixed(2)
  }
]

const FeedFavoriteScreen = () => {
  const [radiobutton, setRadioButtons] = useState(radioButtons)
  const [usersList, setUsersList] = useState([...usersData, ...usersData])

  const onPressRadio = (item: any) => {
    let deepClone = Utility.deepClone(radiobutton)
    deepClone = _.map(deepClone, (i: any) => {
      i.isSelected = false
      return i
    })
    const index = _.findIndex(deepClone, (i: any) => i?.text === item?.text)
    deepClone[index].isSelected = true
    setRadioButtons(deepClone)
    setUsersList(_.shuffle(usersList))
  }

  const renderRadioButtons = () => {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {_.map(radiobutton, (i) => {
            return (
              <TouchableOpacity onPress={() => onPressRadio(i)} style={styles.mainContainer}>
                <LinearGradient
                  style={styles.linearContainer}
                  start={{x: 0.3, y: 0}}
                  end={{x: 0.8, y: 1}}
                  locations={[0.1865, 0.8077]}
                  colors={
                    i.isSelected
                      ? [Color.pink_shade1, Color.red_shade1]
                      : [Color.white, Color.white]
                  }
                >
                  <Text style={[styles.btntext, !i.isSelected && styles.notSelectedbtntext]}>
                    {i.text}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  const renderUsersList = () => {
    return (
      <FlatList
        data={usersList}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => item.starCount + index.toString()}
        numColumns={3}
      />
    )
  }

  const renderItem = ({item, index}: any) => {
    return (
      <Animatable.View delay={index * 100} animation={'fadeInDown'}>
        <RenderUserProfileItem onPress={() => ProfileSheetLoader.OpenProfile(item)} item={item} />
      </Animatable.View>
    )
  }

  return (
    <AppContainer>
      {renderRadioButtons()}
      {renderUsersList()}
    </AppContainer>
  )
}

export default FeedFavoriteScreen
