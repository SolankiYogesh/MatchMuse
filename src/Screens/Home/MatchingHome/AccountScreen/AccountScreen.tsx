import React, {useEffect, useState} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppButtonWithIcon from '../../../../Components/AppButtonWithIcon'
import AppContainer from '../../../../Components/AppContainer'
import MediaPicker from '../../../../Components/MediaPicker'
import {PPROFILEBACKIMAGES, PROFILEIMAGEICON} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, Images, Screen} from '../../../../Helpers'
import MathProfileTabView from '../../../Auth/MatchProfileScreen/Compoents/MathProfileTabView'
import {styles} from './AccountScreenStyle'

const AccountScreen = () => {
  const navigation: any = useNavigation()
  const [isBigPicker, setISBigPicker] = useState({
    isPicker: false,
    uri: ''
  })
  const [isSmallPicker, setISSmallPicker] = useState({
    isPicker: false,
    uri: ''
  })
  const user = useSelector((state: any) => state?.user?.user)

  useEffect(() => {
    if (user) {
      setISBigPicker({
        isPicker: false,
        uri: user?.bigImage
      })
      setISSmallPicker({
        isPicker: false,
        uri: user?.smallImage
      })
    }
  }, [])

  const renderBigImageView = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          setISBigPicker({
            isPicker: true,
            uri: isBigPicker.uri
          })
        }
        activeOpacity={1}
        style={styles.bigButtonContainer}
      >
        <Image
          style={styles.imageContainer}
          source={{uri: isBigPicker?.uri || PPROFILEBACKIMAGES}}
          resizeMode={'cover'}
        />

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.1}}
          colors={[Color.transparent, Color.black]}
          style={styles.gradientContainer}
        >
          <>
            <Text style={styles.usernameStylebig}>{user?.username}</Text>
            <Image style={styles.rightImage} resizeMode={'contain'} source={Images.greenCheck} />
          </>
        </LinearGradient>
        {renderToggleButtons()}
      </TouchableOpacity>
    )
  }
  const renderMainContainerRow = () => {
    return (
      <View style={styles.mainRowContainer}>
        <TouchableOpacity
          onPress={() =>
            setISSmallPicker({
              isPicker: true,
              uri: isSmallPicker.uri
            })
          }
          activeOpacity={1}
          style={[styles.firstBoxView, styles.padding0]}
        >
          <Image
            source={{
              uri: isSmallPicker.uri || PROFILEIMAGEICON
            }}
            resizeMode={'cover'}
            style={styles.smallImageContainer}
          />
        </TouchableOpacity>
        <View style={styles.secondBoxView}>
          <View style={styles.rowView}>
            <Image style={styles.followerImage} source={Images.groupImage} resizeMode={'contain'} />
            <View style={styles.followerContainer}>
              <Text style={[styles.uploadSmallText, styles.uplocaCount]}>{0}</Text>
              <Text style={styles.uploadSmallText}>{t('FD117')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.verticalView} />
        <View style={styles.secondBoxView}>
          <View style={styles.rowView}>
            <Image
              style={styles.followerImage}
              source={Images.fyerdates_logo}
              resizeMode={'contain'}
            />
            <View style={styles.followerContainer}>
              <Text style={[styles.uploadSmallText, styles.uplocaCount]}>{0}</Text>
              <Text style={styles.uploadSmallText}>{t('FD118')}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderShadowBottomView = () => {
    return (
      <View style={styles.rowShadowContainer}>
        <View style={styles.menuItemContainer}>
          <View style={styles.greenDot} />
          <Text style={styles.menuText}>{t('FD121')}</Text>
        </View>
        <View style={[styles.verticalView, styles.colorView]} />
        <View style={styles.menuItemContainer}>
          <Image source={Images.distribute} style={styles.menuImage} />
          <Text style={styles.menuText}>{t('FD46')}</Text>
        </View>
        <View style={[styles.verticalView, styles.colorView]} />
        <View style={styles.menuItemContainer}>
          <Image source={Images.location_line} style={styles.menuImage} />
          <Text style={styles.menuText}>{t('FD122')}</Text>
        </View>
      </View>
    )
  }

  const renderTabView = () => {
    return <MathProfileTabView isAccount />
  }

  const renderTopView = () => {
    return (
      <View style={styles.shadowContainerStyle}>
        <View style={styles.middleInnerContainer}>
          {renderBigImageView()}
          {renderMainContainerRow()}
        </View>
        {renderShadowBottomView()}
      </View>
    )
  }

  const renderToggleButtons = () => {
    return (
      <AppButtonWithIcon
        imageStyle={[styles.smallImageContainer, styles.imgTintWhite]}
        style={styles.btnToggle}
        image={Images.pencil}
        onPress={() => navigation.navigate(Screen.EditProfileScreen)}
        containerStyle={styles.toogleCOntainer}
      />
    )
  }

  return (
    <AppContainer>
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
        {renderTopView()}
        {renderTabView()}
      </ScrollView>
      {isBigPicker.isPicker && (
        <MediaPicker
          onClose={() =>
            setISBigPicker({
              isPicker: false,
              uri: isBigPicker.uri
            })
          }
          onPickImage={(image) =>
            setISBigPicker({
              isPicker: false,
              uri: image.path
            })
          }
          isVisible={isBigPicker.isPicker}
        />
      )}
      {isSmallPicker.isPicker && (
        <MediaPicker
          onClose={() =>
            setISSmallPicker({
              isPicker: false,
              uri: isSmallPicker.uri
            })
          }
          onPickImage={(image) =>
            setISSmallPicker({
              isPicker: false,
              uri: image.path
            })
          }
          isVisible={isSmallPicker.isPicker}
        />
      )}
    </AppContainer>
  )
}

export default AccountScreen
