import React, {useEffect, useState} from 'react'
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useDispatch} from 'react-redux'
import {t} from 'i18next'
import _ from 'lodash'

import AppButton from '../../../../Components/AppButton'
import AppScrollView from '../../../../Components/AppScrollView'
import LoadingView from '../../../../Components/LoadingView'
import {interstData} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, Images, Utility} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {setUserData} from '../../../../Store/Reducers/UserSlice'
import {styles} from '../UserDetailsScreenStyle'

interface InterestViewProps {
  onIndexChange?: (index: number) => void
}
const InterestView = (props: InterestViewProps) => {
  const {onIndexChange} = props
  const [interest, setInterest] = useState(interstData)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])

  const onPressContinue = () => {
    dispatch(
      setUserData({
        isThirdComplete: true
      })
    )
    if (onIndexChange) onIndexChange(4)
  }

  const onSelect = (item: any) => {
    const deepClone = Utility.deepClone(interest)
    const index = _.findIndex(deepClone, (i: any) => i?.id === item?.id)
    deepClone[index].isSelected = !deepClone[index].isSelected
    setInterest(deepClone)
  }

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => onSelect(item)}>
        <ImageBackground
          borderRadius={moderateScale(10)}
          style={styles.imageContainer}
          source={{uri: item?.icon}}
        >
          <LinearGradient
            colors={
              item?.isSelected
                ? [Color.transparent, Color.Primary]
                : [Color.transparent, Color.black]
            }
            style={styles.innerImageView}
          >
            <Image source={Images.notification} style={styles.iconStyle} resizeMode={'contain'} />
            <Text style={styles.itemtext}>{item?.name}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.innerView}>
      {
        <AppScrollView>
          <AppButton
            gradientStyleContainer={styles.gradientStyleContainer}
            title={t('FD111')}
            disable
          />
          <View style={styles.listView}>
            {!loading ? (
              <FlatList
                keyExtractor={(item: any) => item?.id}
                renderItem={renderItem}
                data={interest}
                numColumns={2}
              />
            ) : (
              <LoadingView />
            )}
          </View>
        </AppScrollView>
      }
      <AppButton
        title={t('FD50')}
        btnStyleContainer={styles.btnContainer}
        btnTextStyle={styles.btnTextStyle}
        onPress={onPressContinue}
        gradientStyleContainer={styles.gradientStyleContainer}
        // disable={isANySelected.length <= 0}
        // isBackAsItIs={!(isANySelected.length <= 0)}
      />
    </View>
  )
}

export default InterestView
