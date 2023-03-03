import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Modal from 'react-native-modal'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, CommonStyles, Fonts, Images, Utility} from '../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppButton from '../AppButton'
import AppContainer from '../AppContainer'
import AppScrollView from '../AppScrollView'
import CountPicker from './CountPicker'

const buttons = [
  {
    text: t('FD85'),
    selected: false
  },
  {
    text: t('FD86'),
    selected: false
  }
]
interface ChildrenPickerProps {
  onClose?: () => void
  onPickChildrenCount?: (count: number) => void
  value?: string
}

const ChildrenPicker = (props: ChildrenPickerProps) => {
  const {onClose, onPickChildrenCount, value} = props
  const [itemButtons, setitemButtons] = useState(buttons)
  const [count, setCount] = useState(1)
  const [isVisible, setISVisible] = useState(false)

  useEffect(() => {
    const valueNumber = Number(value) || 0
    setCount(valueNumber)
    const cloneData = Utility.deepClone(itemButtons)
    cloneData[valueNumber > 0 ? 0 : 1].selected = true
    setitemButtons(cloneData)
  }, [value])

  const onPressItem = (item: any) => {
    if (item.text === t('FD86')) {
      setCount(0)
    } else {
      setCount(1)
    }
    const cloneLang = Utility.deepClone(itemButtons)
    _.map(itemButtons, (i: any, index: number) => {
      cloneLang[index].selected = false
    })
    const index = _.findIndex(cloneLang, (i: any) => i?.text === item?.text)
    cloneLang[index].selected = true
    setitemButtons(cloneLang)
  }

  const onPressCountPlus = () => {
    setCount((state) => (state > 9 ? 10 : state + 1))
  }
  const onPressCountminus = () => {
    setCount((state) => (!(state > 1) ? 1 : state - 1))
  }

  const onPressCountContainer = () => {
    if (onPickChildrenCount) {
      onPickChildrenCount(count)
    }
    if (onClose) onClose()
  }

  const renderCountPicker = () => {
    return (
      <TouchableOpacity style={styles.countContainer} onPress={() => setISVisible(true)}>
        <Text style={styles.countTex}>{count}</Text>
        <View style={styles.countButtonsView}>
          <TouchableOpacity onPress={onPressCountminus} style={styles.imageback}>
            <Image source={Images.minus} style={styles.imageSmall} resizeMode={'contain'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressCountPlus} style={styles.imageback}>
            <Image source={Images.plus} style={styles.imageSmall} resizeMode={'contain'} />
          </TouchableOpacity>
        </View>
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
            <AppScrollView style={styles.innerScrollView}>
              <AppButton
                gradientStyleContainer={styles.gradientStyleContainer}
                disable
                title={t('FD60')}
              />
              <Image source={Images.children} resizeMode={'contain'} style={styles.locationImg} />
              <Text style={styles.activeYourText}>{t('FD73')}</Text>
              <TouchableOpacity
                style={[
                  styles.itemContainer,
                  itemButtons[0]?.selected && styles.selectedItemContainer
                ]}
                onPress={() => onPressItem(itemButtons[0])}
              >
                <View
                  style={[styles.innerCircle, itemButtons[0]?.selected && styles.selectedCircle]}
                >
                  {itemButtons[0]?.selected && (
                    <Image
                      source={Images.checkRight}
                      style={styles.imageCheck}
                      resizeMode={'contain'}
                    />
                  )}
                </View>

                <Text
                  style={[styles.textStyle, itemButtons[0]?.selected && styles.selectedTextStyle]}
                >
                  {itemButtons[0]?.text}
                </Text>
              </TouchableOpacity>
              {itemButtons[0]?.selected && renderCountPicker()}
              <TouchableOpacity
                style={[
                  styles.itemContainer,
                  itemButtons[1]?.selected && styles.selectedItemContainer
                ]}
                onPress={() => onPressItem(itemButtons[1])}
              >
                <View
                  style={[styles.innerCircle, itemButtons[1]?.selected && styles.selectedCircle]}
                >
                  {itemButtons[1]?.selected && (
                    <Image
                      source={Images.checkRight}
                      style={styles.imageCheck}
                      resizeMode={'contain'}
                    />
                  )}
                </View>

                <Text
                  style={[styles.textStyle, itemButtons[1]?.selected && styles.selectedTextStyle]}
                >
                  {itemButtons[1]?.text}
                </Text>
              </TouchableOpacity>
              <AppButton
                gradientStyleContainer={styles.gradientStyleContainer}
                title={t('FD50')}
                onPress={onPressCountContainer}
              />
            </AppScrollView>
          </View>
        </View>
        {isVisible && (
          <CountPicker
            onPickCount={setCount}
            selectedNumber={count}
            onClose={() => setISVisible(false)}
          />
        )}
      </AppContainer>
    </Modal>
  )
}

export default ChildrenPicker

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
  innerScrollView: {
    paddingHorizontal: scale(5)
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

  activeYourText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,
    color: Color.black,
    textAlign: 'center',
    marginBottom: verticalScale(40)
  },
  imageSmall: {
    width: '80%',
    height: '80%',
    tintColor: Color.white
  },
  imageback: {
    width: verticalScale(25),
    height: verticalScale(25),
    backgroundColor: Color.redExtra,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(5),
    ...CommonStyles.shadow
  },
  countButtonsView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    borderRadius: moderateScale(10),
    padding: scale(10),
    marginVertical: verticalScale(10),
    width: '98%',
    alignSelf: 'center',
    height: verticalScale(55)
  },
  countTex: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(17),
    color: Color.black
  },
  gradientStyleContainer: {
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center'
  }
})
