import React, {useEffect, useState} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useDispatch} from 'react-redux'
import {CommonActions, useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppContainer from '../../../Components/AppContainer'
import MediaPicker from '../../../Components/MediaPicker'
import {Color, Images, Screen, Storage} from '../../../Helpers'
import {moderateScale} from '../../../Helpers/Responsive'
import {setUserData} from '../../../Store/Reducers/UserSlice'
import MathProfileTabView from './Compoents/MathProfileTabView'
import {styles} from './MatchProfileScreenStyle'

const MatchProfileScreen = () => {
  const [isBigPicker, setISBigPicker] = useState({
    isPicker: false,
    uri: ''
  })
  const [isSmallPicker, setISSmallPicker] = useState({
    isPicker: false,
    uri: ''
  })
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    Storage.getRemainData().then((resp) => {
      setUser(resp)
    })
  }, [])

  const onUserDetailsDone = () => {
    dispatch(
      setUserData({
        isProfileDone: true,
        smallImage: isSmallPicker?.uri,
        bigImage: isBigPicker?.uri
      })
    )
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Screen.Main}]
      })
    )
  }

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
        {!isBigPicker?.uri ? (
          <View style={styles.imageContainer}>
            <Image source={Images.plus} style={styles.bigPlusImgae} resizeMode={'contain'} />
            <Text style={styles.bigUploadText}>{t('FD116')}</Text>
          </View>
        ) : (
          <Image
            style={styles.imageContainer}
            source={{uri: isBigPicker?.uri}}
            resizeMode={'cover'}
          />
        )}

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.1}}
          colors={[Color.transparent, Color.black]}
          style={styles.gradientContainer}
        >
          {!isBigPicker.uri && (
            <>
              <Text style={styles.usernameStylebig}>{user?.username}</Text>
              <Image style={styles.rightImage} resizeMode={'contain'} source={Images.greenCheck} />
            </>
          )}
        </LinearGradient>
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
          style={[styles.firstBoxView, !!isSmallPicker?.uri && styles.padding0]}
        >
          {!isSmallPicker.uri ? (
            <>
              <Image style={styles.smallImage} source={Images.plus} resizeMode={'contain'} />
              <Text style={[styles.uploadSmallText, styles.primaryBack]}>{t('FD116')}</Text>
            </>
          ) : (
            <Image
              source={{
                uri: isSmallPicker.uri
              }}
              borderRadius={moderateScale(10)}
              resizeMode={'cover'}
              style={styles.smallImageContainer}
            />
          )}
        </TouchableOpacity>
        <View style={styles.secondBoxView}>
          <View style={styles.rowView}>
            <Image style={styles.followerImage} source={Images.groupImage} resizeMode={'contain'} />
            <View style={styles.followerContainer}>
              <Text style={[styles.uploadSmallText, styles.uplocaCount]}>{0}</Text>
              <Text style={styles.uploadSmallText}>{t('FD117')}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={1} style={styles.btnSmallContainer}>
            <LinearGradient
              start={{
                x: 0,
                y: 1
              }}
              style={styles.linearContainer}
              end={{x: 0, y: 1}}
              colors={[Color.white, Color.black]}
            >
              <Text style={styles.btnSmallText}>{t('FD119')}</Text>
            </LinearGradient>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.btnSmallContainer}>
            <LinearGradient
              style={styles.linearContainer}
              start={{x: 0.3, y: 0}}
              end={{x: 0.8, y: 1}}
              locations={[0.1865, 0.8077]}
              colors={[Color.pink_shade1, Color.red_shade1]}
            >
              <Text style={styles.btnSmallText}>{t('FD120')}</Text>
            </LinearGradient>
          </TouchableOpacity>
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
    return <MathProfileTabView isImageSelected={!!(isBigPicker?.uri && isSmallPicker?.uri)} />
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

  return (
    <AppContainer backgroundColor={Color.offWhite} bodyStyle={styles.container}>
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
      {isBigPicker.uri && isSmallPicker.uri && (
        <TouchableOpacity
          activeOpacity={0.95}
          style={styles.absoluteButton}
          onPress={onUserDetailsDone}
        >
          <LinearGradient
            start={{x: 0.3, y: 0}}
            end={{x: 0.8, y: 1}}
            locations={[0.1865, 0.8077]}
            colors={[Color.pink_shade1, Color.red_shade1]}
            style={[styles.tabIconBack, styles.abtnImage]}
          >
            <Image source={Images.right_arrow} style={[styles.tabImage, styles.tintColorWhite]} />
          </LinearGradient>
        </TouchableOpacity>
      )}
    </AppContainer>
  )
}

export default MatchProfileScreen
