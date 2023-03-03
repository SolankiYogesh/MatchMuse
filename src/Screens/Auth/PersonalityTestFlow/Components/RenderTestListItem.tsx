import React, {useMemo, useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import {t} from 'i18next'

import AppButton from '../../../../Components/AppButton'
import PersonalTestStartModal from '../../../../Components/Modals/PersonalTestStartModal'
import {Color, CommonStyles, Fonts, Images} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

const RenderTestListItem = ({item}: any) => {
  const percentage = useMemo(() => (item?.isStart ? Math.floor(Math.random() * 100) : 100), [])
  const [isVisible, setISVisible] = useState(false)
  return (
    <View style={styles.itemContainer}>
      <View style={[styles.absoluteBorder, !item?.isStart && styles.greenback]} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.descText} numberOfLines={2} ellipsizeMode={'clip'}>
          {item?.text}
        </Text>
      </View>
      <View style={styles.progressContainer}>
        {item?.isStart ? (
          <AppButton
            onPress={() => setISVisible(true)}
            btnTextStyle={styles.btnTextStyle}
            title={t('FD387')}
            gradientStyleContainer={styles.gradientStyleContainer}
          />
        ) : (
          <Image source={Images.greenCheck} style={styles.greenImage} resizeMode={'contain'} />
        )}
        <ProgressCircle
          bgColor={Color.white}
          borderWidth={3.8}
          radius={moderateScale(25)}
          color={!item?.isStart ? Color.green_shade : Color.Primary}
          percent={percentage}
        >
          <Text style={styles.progressText}>
            {percentage}
            {'%'}
          </Text>
        </ProgressCircle>
      </View>
      {isVisible && <PersonalTestStartModal item={item} onClose={() => setISVisible(false)} />}
    </View>
  )
}

export default RenderTestListItem

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.white,
    ...CommonStyles.row,
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(10),
    padding: scale(20)
  },
  absoluteBorder: {
    backgroundColor: Color.redExtra,
    height: '100%',
    width: scale(10),
    borderRadius: moderateScale(15),
    position: 'absolute',
    left: -scale(4)
  },
  greenback: {
    backgroundColor: Color.green_shade
  },
  textContainer: {
    marginLeft: scale(15),
    flex: 1
  },
  progressContainer: {
    // flex: 1,
    ...CommonStyles.row
  },
  progressText: {
    fontSize: moderateScale(10.5),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  gradientStyleContainer: {
    // width: verticalScale(70),
    height: verticalScale(45),
    padding: scale(3),
    paddingHorizontal: scale(15),
    marginHorizontal: scale(15)
  },
  btnTextStyle: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  greenImage: {
    width: verticalScale(22),
    height: verticalScale(22),
    paddingHorizontal: scale(35)
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginBottom: verticalScale(5)
  },
  descText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey
  }
})
