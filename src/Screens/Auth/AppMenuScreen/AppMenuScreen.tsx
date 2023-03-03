import React, {useEffect} from 'react'
import {FlatList, Image, ImageSourcePropType, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'
import {useNavigation} from '@react-navigation/native'

import AppContainer from '../../../Components/AppContainer'
import {Color, CommonStyles, Images, Screen} from '../../../Helpers'
import {styles} from './AppMenuScreenStyle'

const AppImages: ImageSourcePropType[] = [
  require('../../../Assets/Images/AppImages/logo_first.png'),
  require('../../../Assets/Images/AppImages/logo_sec.png'),
  require('../../../Assets/Images/AppImages/logo_third.png'),
  require('../../../Assets/Images/AppImages/logo_seven.png'),
  require('../../../Assets/Images/AppImages/logo_forth.png'),
  require('../../../Assets/Images/AppImages/logo_five.png'),
  require('../../../Assets/Images/AppImages/logo_six.png'),
  require('../../../Assets/Images/AppImages/logo_twel.png'),
  require('../../../Assets/Images/AppImages/logo_eight.png'),
  require('../../../Assets/Images/AppImages/logo_nine.png'),
  require('../../../Assets/Images/AppImages/logo_ten.png'),
  require('../../../Assets/Images/AppImages/logo_eleone.png')
]

const AppMenuScreen = () => {
  const rotation = useSharedValue(0)
  const navigation: any = useNavigation()

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`
        }
      ]
    }
  }, [rotation.value])

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear
      }),
      -1
    )
    setTimeout(() => {
      navigation.replace(Screen.UserDetailsScreen)
      // define screen name
    }, 3000)
  }, [])

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.imageBack}>
        <Image source={item} style={styles.imageStyle} resizeMode={'contain'} />
      </View>
    )
  }
  return (
    <AppContainer bodyStyle={styles.container} backgroundColor={Color.blue_start}>
      <LinearGradient
        angle={315}
        colors={[Color.blue_start, Color.blue_end]}
        style={CommonStyles.flex}
        start={{
          x: -105.53,
          y: 60.93
        }}
        end={{
          x: 1230.53,
          y: 2375.07
        }}
      >
        <View style={styles.topView}>
          <Animated.Image
            source={Images.gbn_logo}
            style={[styles.logoAnimateStyle, animatedImageStyle]}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.bottomView}>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={4}
            data={AppImages}
            renderItem={renderItem}
          />
        </View>
      </LinearGradient>
    </AppContainer>
  )
}

export default AppMenuScreen
