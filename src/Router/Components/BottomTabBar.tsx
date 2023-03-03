import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'

import {Color, Images, Screen} from '../../Helpers'
import {scale, verticalScale} from '../../Helpers/Responsive'

const BottomTabBar = (props: BottomTabBarProps) => {
  const {state, descriptors} = props
  const nav: any = props.navigation
  return (
    <View style={styles.bottomContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          const event = nav.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            nav.navigate({name: route?.name, merge: true})
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
            case 'Matching':
              return Images.matching
            case 'Feed':
              return Images.feeds
            case 'EntertainMent':
              return Images.entertainment
            case 'Store':
              return Images.store
            case 'Local':
              return Images.local
            default:
              return Images.matching
          }
        }

        if (route.name === Screen.Search) {
          return null
        }

        return (
          <TouchableOpacity
            accessibilityRole={'button'}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={route.key}
            onLongPress={onLongPress}
          >
            <Image
              source={getImage(route.name)}
              style={[
                styles.tabImage,
                route.name === 'Feed' && styles.tabImageFeed,
                route.name === 'Matching' && styles.tabImageMatching,
                isFocused && styles.tabImageTint
              ]}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default BottomTabBar

const styles = StyleSheet.create({
  tabImage: {
    height: verticalScale(25),
    width: verticalScale(25)
  },
  tabImageMatching: {
    height: verticalScale(30),
    width: verticalScale(30)
  },
  tabImageFeed: {
    height: verticalScale(20),
    width: verticalScale(20)
  },
  tabImageTint: {
    tintColor: Color.Primary
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(70),
    backgroundColor: Color.offWhite,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(10)
  }
})
