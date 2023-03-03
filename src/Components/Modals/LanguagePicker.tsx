import React, {useEffect, useState} from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Modal from 'react-native-modal'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, CommonStyles, Fonts, Images, Utility} from '../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppButton from '../AppButton'
import AppContainer from '../AppContainer'
import AppScrollView from '../AppScrollView'
import InputText from '../InputText'

const languages = [
  {
    text: t('FD78'),
    isSelected: false
  },
  {
    text: t('FD79'),
    isSelected: false
  },
  {
    text: t('FD80'),
    isSelected: false
  },
  {text: t('FD393'), isSelected: false},
  {
    text: t('FD81'),
    isSelected: false
  },
  {
    text: t('FD82'),
    isSelected: false
  },
  {
    text: t('FD83'),
    isSelected: false
  }
]

interface LanguagePickerProps {
  onClose?: () => void
  onPickLanguage?: (language: string) => void
  value?: string
}

const LanguagePicker = (props: LanguagePickerProps) => {
  const {onClose, onPickLanguage, value} = props
  const [language, setLaunuages] = useState(languages)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!_.trim(search)) {
      setLaunuages(languages)
    } else {
      onSearch()
    }
  }, [search])

  useEffect(() => {
    if (value) {
      const splitData = value.split(', ')
      const cloneData = Utility.deepClone(language)
      if (splitData?.length > 0) {
        _.map(splitData, (item) => {
          const findIndex = _.findIndex(cloneData, (i: any) => i?.text === item)
          if (findIndex >= 0) {
            cloneData[findIndex].isSelected = true
          }
        })
      }
      setLaunuages(cloneData)
    }
  }, [value])

  const onPressConfinue = () => {
    const items: any[] = _.filter(language, (i) => i?.isSelected)
    const stringSata = items.map((u) => u?.text).join(', ')
    if (onPickLanguage) {
      onPickLanguage(stringSata || '')
    }
    if (onClose) onClose()
  }

  const onPressItem = (item: any) => {
    const cloneLang = Utility.deepClone(language)
    // _.map(language, (i: any, index: number) => {
    //   cloneLang[index].isSelected = false
    // })
    const index = _.findIndex(cloneLang, (i: any) => i?.text === item?.text)
    cloneLang[index].isSelected = !cloneLang[index].isSelected
    setLaunuages(cloneLang)
  }

  const onSearch = () => {
    const filter = _.filter(language, (i: any) => {
      return i?.text?.toLowerCase().indexOf(search?.toLowerCase()) > -1
    })
    setLaunuages(filter)
  }

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={[styles.itemContainer, item?.isSelected && styles.selectedItemContainer]}
        onPress={() => onPressItem(item)}
      >
        <View style={[styles.innerCircle, item?.isSelected && styles.selectedCircle]}>
          {item?.isSelected && (
            <Image source={Images.checkRight} style={styles.imageCheck} resizeMode={'contain'} />
          )}
        </View>

        <Text style={[styles.textStyle, item?.isSelected && styles.selectedTextStyle]}>
          {item?.text}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <Modal
      coverScreen
      style={styles.modalStyle}
      isVisible
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackButtonPress={onClose}
    >
      <AppContainer isGradient>
        <View style={styles.container}>
          <View style={styles.innerView}>
            <AppScrollView>
              <AppButton disable title={t('FD76')} />
              <Image source={Images.language} resizeMode={'contain'} style={styles.locationImg} />
              <InputText
                placeHolderCustom={t('FD77')}
                style={styles.input}
                image={Images.searchIcon}
                onChangeText={setSearch}
                value={search}
                returnKeyType={'search'}
                onSubmitEditing={onSearch}
              />
              <FlatList
                data={language}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.text}
                contentContainerStyle={styles.listContainer}
              />
            </AppScrollView>
            <AppButton title={t('FD50')} onPress={onPressConfinue} />
          </View>
        </View>
      </AppContainer>
    </Modal>
  )
}

export default LanguagePicker

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0
  },
  container: {
    flex: 1,
    backgroundColor: Color.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerView: {
    backgroundColor: Color.white,
    padding: scale(20),
    borderRadius: moderateScale(20),
    width: '90%',
    height: heightPx(90)
  },
  selectedItemContainer: {
    backgroundColor: Color.redLight2
  },
  locationImg: {
    width: verticalScale(100),
    height: verticalScale(100),
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  imageCheck: {
    width: '60%',
    height: '60%',
    tintColor: Color.white
  },
  innerCircle: {
    width: verticalScale(25),
    height: verticalScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: moderateScale(100),
    borderColor: Color.white,
    marginRight: scale(10),
    backgroundColor: `${Color.Primary}6B`
  },
  selectedCircle: {
    backgroundColor: Color.redExtra
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(15),
    marginVertical: verticalScale(5),
    backgroundColor: Color.redLight,
    borderRadius: moderateScale(20),
    height: verticalScale(55)
  },
  textStyle: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(14),
    color: Color.black
  },
  selectedTextStyle: {
    color: Color.Primary
  },
  input: {
    ...CommonStyles.shadow,
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(10),
    marginHorizontal: scale(5),
    height: verticalScale(55)
  },
  listContainer: {
    marginBottom: verticalScale(15)
  }
})
