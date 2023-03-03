import React, {useEffect, useState} from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Modal from 'react-native-modal'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, Fonts, Images} from '../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppButton from '../AppButton'
import AppContainer from '../AppContainer'
import AppScrollView from '../AppScrollView'

const data = [t('FD100'), t('FD101'), t('FD102')]

interface SmokingDataPickerProps {
  onClose?: () => void
  onSmokePick?: (language: string) => void
  value?: string
}

const SmokingDataPicker = (props: SmokingDataPickerProps) => {
  const {onClose, onSmokePick, value} = props

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (value) {
      const findIndex = _.findIndex(data, (i: any) => i === value)
      setActiveIndex(findIndex)
    }
  }, [value])

  const onPressConfinue = () => {
    if (onSmokePick) {
      onSmokePick(data[activeIndex] || '')
    }
    if (onClose) onClose()
  }

  const onPressItem = (index: any) => {
    setActiveIndex(index)
  }

  const renderItem = ({item, index}: any) => {
    const selected = activeIndex === index
    return (
      <TouchableOpacity
        style={[styles.itemContainer, selected && styles.selectedItemContainer]}
        onPress={() => onPressItem(index)}
      >
        <View style={[styles.innerCircle, selected && styles.selectedCircle]}>
          {selected && (
            <Image source={Images.checkRight} style={styles.imageCheck} resizeMode={'contain'} />
          )}
        </View>

        <Text style={[styles.textStyle, selected && styles.selectedTextStyle]}>{item}</Text>
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
              <AppButton
                gradientStyleContainer={styles.gradientStyleContainer}
                disable
                title={t('FD103')}
              />
              <Image source={Images.smokers} resizeMode={'contain'} style={styles.locationImg} />
              <Text style={styles.activeYourText}>{t('FD104')}</Text>
              <Text style={styles.activeNextYourText}>{t('FD73')}</Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={styles.listContainer}
              />
              <AppButton
                gradientStyleContainer={styles.gradientStyleContainer}
                title={t('FD50')}
                onPress={onPressConfinue}
              />
            </AppScrollView>
          </View>
        </View>
      </AppContainer>
    </Modal>
  )
}

export default SmokingDataPicker

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
  activeYourText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.black,
    marginBottom: verticalScale(20),
    textAlign: 'center'
  },
  activeNextYourText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginBottom: verticalScale(40),
    textAlign: 'center'
  },
  textStyle: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    color: Color.black
  },
  selectedTextStyle: {
    color: Color.Primary
  },
  listContainer: {
    marginBottom: verticalScale(15)
  },
  gradientStyleContainer: {
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center'
  }
})
