import React, {useMemo} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {DrawerActions, useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppButtonWithIcon from '../../../../Components/AppButtonWithIcon'
import AppContainer from '../../../../Components/AppContainer'
import AppProfileImage from '../../../../Components/AppProfileImage'
import StarRating from '../../../../Components/StarRating'
import {FEEDS} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images, Screen} from '../../../../Helpers'
import {styles} from './BusinessDrawerScreenStyle'
import BusinessPrfileTabView from './Components/BusinessPrfileTabView'

const BusinessDrawerScreen = () => {
  const navigation: any = useNavigation()
  const rating = useMemo(() => Math.floor(Math.random() * 6), [])
  const renderProfileView = () => {
    return (
      <View style={[CommonStyles.row, styles.profileContainer]}>
        <AppProfileImage
          borderWidth={3.5}
          borderRadius={25}
          size={100}
          borderColor={Color.Primary}
          url={FEEDS[1]?.image}
        />
        <View style={styles.rightContainer}>
          {renderHeaderProfileView()}
          <View style={[CommonStyles.row, CommonStyles.flex]}>
            <View style={styles.secondBoxView}>
              <View style={styles.rowView}>
                <Image
                  style={styles.followerImage}
                  source={Images.groupImage}
                  resizeMode={'contain'}
                />
                <View style={styles.followerContainer}>
                  <Text style={[styles.uploadSmallText, styles.uplocaCount]}>{0}</Text>
                </View>
              </View>
            </View>
            <View style={styles.verticalView} />
            <View style={styles.secondBoxView}>
              <Text style={styles.ratingText}>
                {rating.toFixed(1)} <Text style={styles.smallRatingText}>{t('FD426')}</Text>
              </Text>
              <StarRating rating={rating} />
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderHeaderProfileView = () => {
    return (
      <View style={[CommonStyles.row, styles.menuContainer]}>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>{'Username'}</Text>
          <Image
            style={styles.starImageStyle}
            source={Images.creator_talents_star}
            resizeMode={'contain'}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image style={styles.image} source={Images.three_line_menu} resizeMode={'contain'} />
        </TouchableOpacity>
        <AppButtonWithIcon
          imageStyle={[styles.smallImageContainer, styles.imgTintWhite]}
          style={styles.btnToggle}
          image={Images.pencil}
          onPress={() => navigation.navigate(Screen.EditProfileScreen)}
          containerStyle={styles.toogleCOntainer}
        />
      </View>
    )
  }

  const renderDetailsContainer = () => {
    return (
      <View style={styles.nameContainer}>
        <Text style={styles.fullnameText}>{'Pits Burge-Lukenala'}</Text>
        <Text style={styles.desktext}>
          {'GrayMarket - Abuse - Comodity\n Wire ❤ Abentuuer, lhr auch?'}
        </Text>
      </View>
    )
  }

  return (
    <AppContainer>
      <ScrollView stickyHeaderIndices={[2]} style={styles.innerViewContainer}>
        {renderProfileView()}
        {renderDetailsContainer()}

        <BusinessPrfileTabView />
      </ScrollView>
    </AppContainer>
  )
}

export default BusinessDrawerScreen
