import React, {useMemo, useState} from 'react'
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs'
import {t} from 'i18next'

import {Color, CommonStyles, Images, Screen} from '../../../../../Helpers'
import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const ChatTabBar = (props: MaterialTopTabBarProps) => {
  const {state} = props
  const nav: any = props.navigation
  const redShade = useMemo(() => [Color.pink_shade1, Color.red_shade1], [])
  const greyShade = useMemo(() => [Color.lightGrey, Color.lightGrey], [])
  const [isSearchEnable, setISSearchnable] = useState(false)

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={Color.offWhite} />
      <View style={[CommonStyles.row, styles.containerView]}>
        {!isSearchEnable && (
          <TouchableOpacity
            style={styles.backImageContainer}
            onPress={() => setISSearchnable(true)}
          >
            <Image
              style={[styles.backImage, styles.searchIcon]}
              source={Images.search}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            if (isSearchEnable) {
              setISSearchnable(false)
            } else {
              nav.goBack()
            }
          }}
          style={[styles.backImageContainer, styles.searchContainer]}
        >
          <Image style={styles.backImage} source={Images.leftArrow} resizeMode={'contain'} />
        </TouchableOpacity>
        {isSearchEnable ? (
          <TextInput
            selectionColor={Color.Primary}
            placeholderTextColor={Color.darkGrey}
            placeholder={String(t('FD267'))}
            style={styles.input}
          />
        ) : (
          state.routes.map((route: any, index) => {
            const isFocused = state.index === index

            const onPress = () => {
              const event = nav.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true
              })

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                nav.navigate({name: route.name, merge: true})
              }
            }

            const onLongPress = () => {
              nav.emit({
                type: 'tabLongPress',
                target: route.key
              })
            }

            const getImage = (route: string) => {
              switch (route) {
                case Screen.ChatUsersScreen:
                  return Images.fill_chat
                case Screen.ChatShotsScreen:
                  return Images.camera
                case Screen.ChatGamesScreen:
                  return Images.games

                default:
                  return Images.fyerdates_logo
              }
            }

            return (
              <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                key={route?.key}
                style={styles.touchView}
              >
                <LinearGradient
                  start={{x: 0.3, y: 0}}
                  end={{x: 0.8, y: 1}}
                  locations={[0.1865, 0.8077]}
                  colors={isFocused ? redShade : greyShade}
                  angle={90}
                  useAngle
                  angleCenter={{x: 0, y: 0.5}}
                  style={styles.imageBack}
                >
                  <Image
                    style={[styles.image, isFocused && styles.imageStyle]}
                    source={getImage(route.name)}
                    resizeMode={'contain'}
                  />
                </LinearGradient>
              </TouchableOpacity>
            )
          })
        )}
      </View>
    </SafeAreaView>
  )
}

export default ChatTabBar

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: Color.offWhite
  },
  containerView: {
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1
  },
  image: {
    width: verticalScale(18),
    height: verticalScale(18),
    tintColor: Color.darkGrey
  },
  imageBack: {
    paddingHorizontal: scale(15),
    height: '100%',
    ...CommonStyles.centerItem
  },
  touchView: {
    ...CommonStyles.centerItem,
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    height: verticalScale(30),
    marginHorizontal: scale(5)
  },

  imageStyle: {
    tintColor: Color.white
  },
  backImage: {
    width: '100%',
    height: '100%'
  },
  searchIcon: {
    width: '80%',
    height: '80%'
  },
  backImageContainer: {
    position: 'absolute',
    right: scale(15),
    width: verticalScale(30),
    height: verticalScale(30)
  },
  searchContainer: {
    left: scale(10)
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    marginLeft: scale(50)
  }
})
