import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts} from '../../../../../Helpers'
import {
  BUTTON_HEIGHT,
  moderateScale,
  scale,
  verticalScale,
  W_WIDTH
} from '../../../../../Helpers/Responsive'

const InvitationContainer = ({item, onPressInvite = () => {}}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userReuestText}>
        <Text style={styles.usernameText}>{`${item?.name} `}</Text>
        {` ${t('FD410')}`}
      </Text>
      <Text style={styles.followersText}>{`${0} ${t('FD411')}, ${0} ${t('FD262')}`}</Text>
      <Text style={styles.followersText}>{t('FD408')}</Text>
      <View style={CommonStyles.row}>
        <TouchableOpacity onPress={() => onPressInvite(false)} style={styles.btnContainer}>
          <Text style={[styles.btnText, styles.followePrimaryText]}>{t('FD409')}</Text>
        </TouchableOpacity>
        <View style={styles.verticleLine} />
        <TouchableOpacity style={styles.btnContainer} onPress={() => onPressInvite(true)}>
          <Text style={styles.btnText}>{t('FD407')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InvitationContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.offWhite,
    borderRadius: moderateScale(20),
    padding: scale(20),
    overflow: 'hidden',
    zIndex: 1000
  },
  userReuestText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    color: Color.black,
    textAlign: 'center'
  },
  usernameText: {
    fontFamily: Fonts.semi_bold
  },
  followersText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12.5),
    color: Color.textGrey,
    textAlign: 'center',
    marginVertical: verticalScale(5)
  },
  followePrimaryText: {
    color: Color.Primary
  },
  btnContainer: {
    height: BUTTON_HEIGHT,
    width: W_WIDTH / 2.2,
    ...CommonStyles.centerItem
  },
  verticleLine: {
    height: verticalScale(30),
    width: scale(1),
    backgroundColor: Color.textGrey
  },
  btnText: {
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(16),
    color: Color.black
  }
})
