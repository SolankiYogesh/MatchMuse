import React from 'react'
import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import FlyAnimation from '../../../../Components/Animations/FlyAnimation'
import AppContainer from '../../../../Components/AppContainer'
import AppProfileImage from '../../../../Components/AppProfileImage'
import {FEEDS, NOTIFICATIONSACTIVITIES} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import {styles} from './AudioLiveStreamDetailsStyle'
import AudioLivestreamCommentItem from './Components/AudioLivestreamCommentItem'

const AudioLiveStreamDetailsScreen = () => {
  const navigation = useNavigation()

  const renderImagesView = () => {
    return (
      <View style={styles.imageContainer}>
        <AppProfileImage
          size={40}
          borderRadius={15}
          url={FEEDS[0].image}
          borderColor={Color.white}
        />
        <AppProfileImage
          style={styles.bigImage80}
          size={60}
          borderRadius={20}
          url={FEEDS[1].image}
          borderColor={Color.white}
        />
        <AppProfileImage
          borderWidth={4}
          size={120}
          borderRadius={30}
          url={FEEDS[2].image}
          borderColor={Color.Primary}
        />
        <AppProfileImage
          style={styles.bigImage80}
          size={60}
          borderRadius={20}
          url={FEEDS[3].image}
          borderColor={Color.white}
        />
        <AppProfileImage
          size={40}
          borderRadius={15}
          url={FEEDS[4].image}
          borderColor={Color.white}
        />
      </View>
    )
  }

  const renderTextContainer = () => {
    return (
      <View style={styles.textContainer}>
        <View style={styles.earImageBack}>
          <Image source={Images.ear} resizeMode={'contain'} style={styles.videoIcon} />
          <Text style={styles.liveText}>{'1767'}</Text>
        </View>
        <Text style={styles.podcastNameText}>
          {'Lena - Satellite (Germany) Live 2022 Eurovision Song Contest'}
        </Text>
        <Text style={styles.createrName}>{'Ritesh j. Panday'}</Text>
        <Text style={styles.descText}>
          {
            'Wow @larabeu was fur ein inspiriendes Bild mit einem bezaubernden Menschen. und @Wassilijkhruzin hab dir eine DM geschrieben und freue mich auf deine antwork.'
          }
        </Text>
        <Text style={[styles.descText, styles.tagText]}>{'#Sing2022 #NewYear #enjoying'}</Text>
      </View>
    )
  }

  const renderItem = ({item}: any) => {
    return <AudioLivestreamCommentItem item={item} />
  }

  const renderMessageList = () => {
    return (
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString()}
        data={NOTIFICATIONSACTIVITIES}
        showsVerticalScrollIndicator={false}
      />
    )
  }

  const renderTextInput = () => {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.inputInnerView}>
          <TextInput
            selectionColor={Color.Primary}
            placeholder={String(t('FD270'))}
            style={styles.input}
            placeholderTextColor={Color.darkGrey}
          />
          <TouchableOpacity onPress={() => {}}>
            <Image source={Images.send_message} style={styles.sendImage} resizeMode={'contain'} />
          </TouchableOpacity>
        </View>
        <FlyAnimation style={styles.imageback} />
      </View>
    )
  }

  return (
    <AppContainer>
      <LinearGradient
        colors={['#1F276A', '#397FE6', '#1F276A']}
        start={{x: 0.0, y: 0}}
        end={{x: 0.5, y: 1}}
        locations={[0, 0.5]}
        angle={270}
        style={CommonStyles.flex}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        {renderImagesView()}
        <View style={styles.innerView}>
          {renderTextContainer()}
          {renderMessageList()}
        </View>
        {renderTextInput()}
      </LinearGradient>
    </AppContainer>
  )
}

export default AudioLiveStreamDetailsScreen
