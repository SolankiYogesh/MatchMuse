import React, {useCallback, useMemo, useState} from 'react'
import {FlatList, Image, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useSharedValue} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppButton from '../../../../Components/AppButton'
import AppContainer from '../../../../Components/AppContainer'
import {Color, CommonStyles, Images, Screen} from '../../../../Helpers'
import {W_WIDTH} from '../../../../Helpers/Responsive'
import {styles} from './BlueCardBuysScreenStyle'

const data = [
  {
    image: Images.blue_Card,
    features: [
      {
        text: 'Hampden Sydeny-College',
        isExist: true
      },
      {
        text: 'Goin to the cites',
        isExist: true
      },
      {
        text: 'Loss polentel kuber',
        isExist: false
      }
    ]
  },
  {
    image: Images.lite_card_1,
    features: [
      {
        text: 'Goinf Panda Colony',
        isExist: true
      },
      {
        text: 'ruakel seirgio putankul',
        isExist: true
      },
      {
        text: 'ogestedb pumber terer',
        isExist: true
      },
      {
        text: 'Jugutram dave individula',
        isExist: false
      }
    ]
  },
  {
    image: Images.lite_card_2,
    features: [
      {
        text: 'dugetom raheses logon',
        isExist: true
      },
      {
        text: 'koten der samntef futer niches',
        isExist: true
      },
      {
        text: 'Antenia polo',
        isExist: true
      },
      {
        text: 'Powering addern seth kuber',
        isExist: true
      },
      {
        text: 'Suket Roll Amber tiles',
        isExist: false
      }
    ]
  }
]

const BlueCardBuysScreen = () => {
  const progressValue = useSharedValue<number>(0)
  const navigation: any = useNavigation()
  const [activeIndex, setActiveIndex] = useState(0)

  const onPressPay = () => {
    navigation.navigate(Screen.PaymentScreen)
  }

  const baseOptions = {
    vertical: false,
    width: W_WIDTH,
    height: W_WIDTH * 0.6
  } as const

  const renderImage = ({item}: any) => {
    return <Image source={item?.image} resizeMode={'contain'} style={styles.imageView} />
  }

  const renderImageSlider = useMemo(() => {
    return (
      <View style={CommonStyles.centerItem}>
        <Carousel
          style={styles.list}
          {...baseOptions}
          loop={false}
          mode={'parallax'}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 100
          }}
          onProgressChange={(_, absoluteProgress) => (progressValue.value = absoluteProgress)}
          width={W_WIDTH}
          onSnapToItem={setActiveIndex}
          data={data}
          renderItem={renderImage}
        />
        <View style={styles.paginationCOntainer}>
          {[...Array(data.length).keys()].map((_, i) => (
            <View
              key={i?.toString()}
              style={[styles.inActiveDot, i === activeIndex && styles.activeStyle]}
            />
          ))}
        </View>
      </View>
    )
  }, [activeIndex, data])

  const renderItem = useCallback(({item}) => {
    return (
      <View style={styles.itemContainer}>
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.8, y: 1}}
          locations={[0.1865, 0.8077]}
          colors={
            item?.isExist
              ? [Color.greenShade00ff, Color.greenShade00, Color.greenShade00C]
              : [Color.pink_shade1, Color.red_shade1]
          }
          style={styles.styleView}
        >
          <Image
            source={item?.isExist ? Images.checkRight : Images.close}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
        </LinearGradient>
        <Text style={styles.itemText}>{item?.text}</Text>
      </View>
    )
  }, [])

  const renderList = useMemo(() => {
    const selectedItem = data[activeIndex]
    return (
      <View style={styles.listStyle}>
        <FlatList
          keyExtractor={(item) => item.text}
          renderItem={renderItem}
          data={selectedItem.features}
        />
      </View>
    )
  }, [activeIndex])

  return (
    <AppContainer isEdgeContainer>
      {renderImageSlider}
      <Text style={styles.upgradeText}>{t('FD434')}</Text>
      <Text style={styles.whatYougetText}>{t('FD433')}</Text>
      {renderList}
      <Image style={styles.lineImage} source={Images.horizontal_line_gradient_multiple} />
      <Text style={styles.priceText}>{'€ 14,95'}</Text>
      <AppButton
        onPress={onPressPay}
        title={t('FD362')}
        gradientStyleContainer={styles.gradientStyleContainer}
      />
    </AppContainer>
  )
}

export default BlueCardBuysScreen
