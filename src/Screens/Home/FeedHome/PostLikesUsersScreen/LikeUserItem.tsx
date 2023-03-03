import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import AppButton from '../../../../Components/AppButton'
import {Color, CommonStyles, Fonts, Images} from '../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'

const LikeUserItem = ({item}: any) => {
  const [isFollow, setISFollow] = useState(false)
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerMainImageContainer}>
        <Image
          borderRadius={moderateScale(5)}
          resizeMode={'cover'}
          source={{uri: item?.profile}}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.nameContainer}>
        <View>
          <Text style={styles.nameText}>{item?.username}</Text>
          <Text style={styles.nameTitleText}>{item?.title}</Text>
        </View>
        <Image
          resizeMode={'contain'}
          source={Images.creator_talents_star}
          style={styles.headerStarIcon}
        />
      </View>

      {isFollow ? (
        <TouchableOpacity style={styles.btnView} onPress={() => setISFollow(!isFollow)}>
          <Text style={[styles.btnText, styles.btnText2]}>{t('FD269')}</Text>
        </TouchableOpacity>
      ) : (
        <AppButton
          title={t('FD268')}
          onPress={() => setISFollow(!isFollow)}
          btnTextStyle={styles.btnText}
          gradientStyleContainer={styles.btnView}
        />
      )}
    </View>
  )
}

export default LikeUserItem

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(10),
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    width: '90%',
    alignSelf: 'center',
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(15)
  },
  headerMainImageContainer: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderWidth: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Primary,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  profileImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  nameContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: scale(10)
  },

  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    marginRight: scale(10)
  },
  nameTitleText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  headerStarIcon: {
    height: verticalScale(15),
    width: verticalScale(15)
  },
  btnView: {
    ...CommonStyles.shadow,
    width: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderRadius: moderateScale(10),
    padding: scale(5),
    paddingHorizontal: scale(10),
    height: verticalScale(30),
    // height: verticalScale(40),
    marginVertical: verticalScale(5)
  },
  btnText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.medium,
    color: Color.white
  },
  btnText2: {
    color: Color.Primary
  }
})
