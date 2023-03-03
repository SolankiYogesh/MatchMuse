import React, {useMemo, useState} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {Color, CommonStyles, Images, Utility} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {styles} from './AwardTopperStyle'

const rbs = [
  {
    text: t('FD294'),
    isSelected: true
  },
  {
    text: t('FD295'),
    isSelected: false
  },
  {
    text: t('FD37'),
    isSelected: false
  }
]

const usersList = [
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },

  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  },
  {
    image: `https://kaprat.com/dev/demo/profile/0${Math.floor(Math.random() * 9) + 1}.jpg`,
    username: 'John Deo',
    points: Math.floor(1000 + Math.random() * 9000)
  }
]

const AwardTopperScreen = () => {
  const navigation = useNavigation()
  const [radioButtons, setRadioButtons] = useState(rbs)
  const [awardUser, setAwardUsers] = useState(usersList)
  const awarsTop = useMemo(() => _.slice(awardUser, 0, 3), [awardUser])
  const otherUsers = useMemo(() => _.slice(awardUser, 3, awardUser.length), [awardUser])

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.eventNameText}>{'The Acedemy Awards'}</Text>
          <Text style={styles.descText} numberOfLines={2} ellipsizeMode={'tail'}>
            {
              'as several ‘National Awards’ across various categories. Here, we discuss all the national awards of India under different categories such as civilian awards, gallantry awards, sports awards, cinema awards and literature awards.'
            }
          </Text>
        </View>
      </View>
    )
  }

  const onPressRadioItem = (item: any) => {
    setAwardUsers(_.shuffle(awardUser))
    const cloneData = Utility.deepClone(radioButtons)
    for (let index = 0; index < cloneData.length; index++) {
      cloneData[index].isSelected = false
    }
    const index = _.findIndex(cloneData, (i: any) => i?.text === item?.text)
    cloneData[index].isSelected = true
    setRadioButtons(cloneData)
  }

  const renderRadioButton = () => {
    return (
      <View style={styles.radioContainer}>
        {_.map(radioButtons, (i) => {
          return (
            <TouchableOpacity
              onPress={() => onPressRadioItem(i)}
              style={[styles.radioButtonContainer, i?.isSelected && styles.selectedRadio]}
            >
              <Text style={[styles.radioButtonText, i?.isSelected && styles.selectedRadiotext]}>
                {i?.text}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const getIndexText = (index: number) => {
    return index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'
  }

  const renderTopperView = () => {
    return (
      <View style={styles.awardContainer}>
        <View style={[styles.awardView, styles.initialView]}>
          <View style={styles.srTextView}>
            <Text style={styles.srText}>{2}</Text>
            <Text style={styles.srSmallText}>{getIndexText(1)}</Text>
          </View>
          <Image
            resizeMode={'contain'}
            source={Images.triangle}
            style={[styles.kingImage, styles.imageWhite]}
          />
          <View style={styles.headerMainImageContainer}>
            <Image
              borderRadius={moderateScale(5)}
              resizeMode={'cover'}
              source={{uri: awarsTop[1]?.image}}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.awardNameText}>{awarsTop[0].username}</Text>
          <Text style={styles.awardNameText}>{awarsTop[0].points}</Text>
        </View>
        <View style={styles.awardView}>
          <View style={styles.srTextView}>
            <Text style={styles.srText}>{1}</Text>
            <Text style={styles.srSmallText}>{getIndexText(0)}</Text>
          </View>
          <Image resizeMode={'contain'} source={Images.king} style={styles.kingImage} />
          <View style={[styles.headerMainImageContainer, styles.initialProfileImage]}>
            <Image
              borderRadius={moderateScale(5)}
              resizeMode={'cover'}
              source={{uri: awarsTop[0].image}}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.awardNameText}>{awarsTop[1].username}</Text>
          <Text style={styles.awardNameText}>{awarsTop[1].points}</Text>
        </View>
        <View style={[styles.awardView, styles.initialView]}>
          <View style={styles.srTextView}>
            <Text style={styles.srText}>{3}</Text>
            <Text style={styles.srSmallText}>{getIndexText(2)}</Text>
          </View>
          <Image
            resizeMode={'contain'}
            source={Images.triangle}
            style={[styles.kingImage, styles.imageWhite]}
          />
          <View style={styles.headerMainImageContainer}>
            <Image
              borderRadius={moderateScale(5)}
              resizeMode={'cover'}
              source={{uri: awarsTop[2]?.image}}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.awardNameText}>{awarsTop[2].username}</Text>
          <Text style={styles.awardNameText}>{awarsTop[2].points}</Text>
        </View>
      </View>
    )
  }

  const renderListView = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={otherUsers}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.image + index}
        />
      </View>
    )
  }

  const renderItem = ({item, index}: any) => {
    return (
      <View style={styles.itemContainer}>
        <View style={[styles.headerMainImageContainer, styles.otherHeaderView]}>
          <Image
            borderRadius={moderateScale(5)}
            resizeMode={'cover'}
            source={{uri: item?.image}}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.username}>{item?.username}</Text>
          <Text style={styles.points}>{item?.points}</Text>
        </View>
        <View>
          <View style={styles.srTextView}>
            <Text style={[styles.srText, styles.srTextprimary]}>{4 + index}</Text>
            <Text style={[styles.srSmallText, styles.srTextprimary]}>
              {getIndexText(4 + index)}
            </Text>
          </View>
          <Text style={styles.points}>{'1:06'}</Text>
        </View>
      </View>
    )
  }

  return (
    <AppContainer>
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.8, y: 1}}
        locations={[0.1865, 0.8077]}
        colors={[Color.pink_shade1, Color.red_shade1]}
        style={CommonStyles.flex}
      >
        {renderHeader()}
        {renderRadioButton()}
        {renderTopperView()}
        {renderListView()}
      </LinearGradient>
    </AppContainer>
  )
}

export default AwardTopperScreen
