import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import _ from 'lodash'

import {Color, CommonStyles, Fonts, Images, Utility} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const QuestionItem = ({itemData, onPressOption = () => {}, length = 0}: any) => {
  const {item, index} = itemData
  const [options, setOptions] = useState<any>([])

  useEffect(() => {
    const newOptions = _.map(_.shuffle(item?.options), (i: any) => {
      return {
        isSelected: false,
        text: i
      }
    })

    setOptions(newOptions)
  }, [item?.options])

  const onPressItem = useCallback(
    (item: any) => {
      const deepClone = Utility.deepClone(options)

      for (let index = 0; index < deepClone?.length; index++) {
        deepClone[index].isSelected = false
      }
      const findIndex = _.findIndex(deepClone, (i: any) => i?.text === item?.text)

      deepClone[findIndex].isSelected = true
      setOptions(deepClone)
      onPressOption()
    },
    [options]
  )

  const renderHeader = useMemo(() => {
    return (
      <>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{'Basics'}</Text>
          <Text style={styles.headerText}>{`${index + 1 ?? 0}/${length}`}</Text>
        </View>
        <Image source={Images.degree_book} resizeMode={'contain'} style={styles.locationImg} />
        <Text style={[styles.headerText, styles.questionText, styles.marginText]}>
          {item?.question}
        </Text>
      </>
    )
  }, [index])

  const renderQoptions = useMemo(() => {
    return _.map(options, (i: any) => {
      return (
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.8, y: 1}}
          locations={[0.1865, 0.8077]}
          colors={
            i?.isSelected ? [Color.pink_shade1, Color.red_shade1] : [Color.white, Color.white]
          }
          style={styles.backCOntainer}
          // style={styles.buttonContainer}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPressItem(i)}
            style={styles.buttonContainer}
          >
            <Text style={[styles.optionText, !i?.isSelected && styles.selectedText]}>
              {i?.text}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      )
    })
  }, [options, onPressItem])

  return (
    <View style={styles.container}>
      {renderHeader}
      {renderQoptions}
    </View>
  )
}

export default QuestionItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.offWhite,
    ...CommonStyles.shadow,
    borderRadius: moderateScale(15),
    padding: scale(15)
  },
  headerView: {
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.semi_bold,
    color: Color.pink_shade1
  },
  marginText: {
    marginVertical: verticalScale(15)
  },
  locationImg: {
    width: verticalScale(80),
    height: verticalScale(80),
    alignSelf: 'center'
  },
  questionText: {
    color: Color.black,
    textAlign: 'center'
  },
  optionText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.white,
    textAlign: 'center'
  },
  selectedText: {
    color: Color.black
  },
  buttonContainer: {
    flex: 1,
    ...CommonStyles.centerItem
  },
  backCOntainer: {
    overflow: 'hidden',
    borderRadius: moderateScale(15),
    flex: 1,
    marginVertical: verticalScale(5)
  }
})
