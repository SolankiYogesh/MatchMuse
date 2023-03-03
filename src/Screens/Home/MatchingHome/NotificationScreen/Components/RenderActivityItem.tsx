import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import AppButton from '../../../../../Components/AppButton'
import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, Fonts, Utility} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const RenderActivityItem = ({item}: any) => {
  const onPressDelete = () => Utility.showToast('Coming Soon')
  const onPressConfirm = () => Utility.showToast('Coming Soon')

  return (
    <View style={styles.itemContainer}>
      <View style={styles.insiderView}>
        <AppProfileImage
          size={60}
          borderRadius={15}
          borderColor={Color.Primary}
          borderWidth={3}
          url={item?.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.hintText}>
            <Text style={styles.nameText}>{item?.name} </Text>
            {item?.text}
          </Text>
          <Text style={styles.timeText}>{'One minute ago'}</Text>
        </View>
        {!item?.isFriendRequest && (
          <AppProfileImage
            size={80}
            borderRadius={10}
            borderColor={Color.Primary}
            borderWidth={0}
            style={styles.itemBigImage}
            url={item?.image}
          />
        )}
      </View>
      {item?.isFriendRequest && (
        <View style={styles.btnContainer}>
          <AppButton
            title={t('FD136')}
            onPress={onPressConfirm}
            btnTextStyle={styles.btnText}
            gradientStyleContainer={styles.btnView}
          />

          <TouchableOpacity style={styles.btnView} onPress={onPressDelete}>
            <Text style={[styles.btnText, styles.btnText2]}>{t('FD137')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default RenderActivityItem

const styles = StyleSheet.create({
  itemContainer: {
    // width: '100%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    // height: verticalScale(100),
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: verticalScale(5),
    paddingHorizontal: scale(5),
    marginHorizontal: scale(10)
  },
  itemBigImage: {
    marginLeft: scale(10)
  },
  insiderView: {
    // ...CommonStyles.shadow,
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(10),
    borderRadius: moderateScale(20),
    flex: 1,
    marginBottom: verticalScale(10)
  },
  nameText: {
    fontSize: moderateScale(11),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  timeText: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    textAlign: 'right',
    width: '100%',
    marginTop: verticalScale(15)
  },
  hintText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    color: Color.black,
    width: '100%'
  },
  btnView: {
    // ...CommonStyles.shadow,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderRadius: moderateScale(10),
    padding: scale(5),
    paddingHorizontal: scale(10),
    height: verticalScale(35),
    marginVertical: verticalScale(5)
  },
  btnText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  btnText2: {
    color: Color.black
  },
  btnContainer: {
    justifyContent: 'space-between',
    marginLeft: scale(10)
  },
  textContainer: {
    marginLeft: scale(10),
    flex: 1
  }
})
