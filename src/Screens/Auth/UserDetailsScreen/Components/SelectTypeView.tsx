import React, {useState} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import {useDispatch} from 'react-redux'
import {t} from 'i18next'

import AppButton from '../../../../Components/AppButton'
import AppScrollView from '../../../../Components/AppScrollView'
import {Images} from '../../../../Helpers'
import {setUserData} from '../../../../Store/Reducers/UserSlice'
import {styles} from '../UserDetailsScreenStyle'

const images = [
  'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_960_720.jpg'
]

interface SelectTypeViewProps {
  onPressContinueEnd?: () => void
}
const SelectTypeView = (props: SelectTypeViewProps) => {
  const {onPressContinueEnd} = props

  const [activeIndex, setActiveIndex] = useState(0)
  const dispatch = useDispatch()

  const onPressContinue = () => {
    dispatch(
      setUserData({
        isInfoCompleted: true
      })
    )
    if (onPressContinueEnd) onPressContinueEnd()
  }

  const onSelect = (index) => {
    setActiveIndex(index)
  }

  const renderItem = ({item, index}: any) => {
    const selected = activeIndex === index
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.foodImageback}
        onPress={() => onSelect(index)}
      >
        <Image source={{uri: item}} resizeMode={'cover'} style={styles.foodImage} />
        <View style={[styles.innerCircle, selected && styles.selectedCircle]}>
          {selected && (
            <Image source={Images.checkRight} style={styles.imageCheck} resizeMode={'contain'} />
          )}
        </View>
      </TouchableOpacity>
    )
  }

  const renderSeperator = () => {
    return (
      <View style={styles.foodSeperator}>
        <View style={styles.foodSeperatorLine} />
        <Text style={styles.foodSeperatorText}>{t('FD113')}</Text>
        <View style={styles.foodSeperatorLine} />
      </View>
    )
  }

  return (
    <View style={styles.innerView}>
      <AppScrollView>
        <AppButton
          gradientStyleContainer={styles.gradientStyleContainer}
          title={t('FD112')}
          disable
        />
        <Text style={styles.footBoldText}>{t('FD114')}</Text>
        <View style={styles.foodListView}>
          <FlatList
            keyExtractor={(item: any, index) => item + index}
            renderItem={renderItem}
            data={images}
            ItemSeparatorComponent={renderSeperator}
          />
        </View>
        <AppButton
          title={t('FD50')}
          btnStyleContainer={styles.btnContainer}
          btnTextStyle={styles.btnTextStyle}
          onPress={onPressContinue}
          gradientStyleContainer={styles.gradientStyleContainer}
        />
      </AppScrollView>
    </View>
  )
}

export default SelectTypeView
