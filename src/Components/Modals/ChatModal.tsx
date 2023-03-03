import React, {useMemo} from 'react'
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import ReactNativeModal from 'react-native-modal'
import {t} from 'i18next'

import {Color, CommonStyles, Fonts, Images} from '../../Helpers'
import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppProfileImage from '../AppProfileImage'

interface ChatModalProps {
  item?: any
  onClose?: () => void
}

const ChatModal = (props: ChatModalProps) => {
  const {item, onClose} = props
  const renderHeaderView = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <AppProfileImage borderWidth={2} borderRadius={15} size={60} url={item?.image} />
        <View style={styles.innerContainer}>
          <Text style={styles.nameText}>{item?.name}</Text>
          <View style={CommonStyles.row}>
            <View style={styles.nameContainer}>
              <Image
                resizeMode={'contain'}
                source={Images.groupImage}
                style={styles.headerStarIcon}
              />
              <Text style={styles.countText}>{'0'}</Text>
            </View>
            <View style={styles.dotView} />
            <View style={styles.nameContainer}>
              <Image
                resizeMode={'contain'}
                source={Images.user_start_icon_blue_128}
                style={styles.headerStarIcon}
              />
              <Text style={styles.countText}>{'0'}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={onClose}>
          <Image resizeMode={'contain'} source={Images.close} style={styles.headerSmallIcon} />
        </TouchableOpacity>
      </View>
    )
  }, [item])

  const renderEamptyView = useMemo(() => {
    return (
      <View style={[CommonStyles.flex, CommonStyles.centerItem]}>
        <Text style={styles.chatText}>{t('FD432')}</Text>
      </View>
    )
  }, [])

  const renderChatView = useMemo(() => {
    return (
      <FlatList
        renderItem={() => <></>}
        ListEmptyComponent={renderEamptyView}
        data={[]}
        contentContainerStyle={styles.listStyle}
      />
    )
  }, [])

  const renderBottomView = useMemo(() => {
    return (
      <View style={styles.bottomContainer}>
        <Image source={Images.plus} resizeMode={'contain'} style={styles.plusImage} />
        <TextInput placeholder={String(t('FD414'))} style={styles.input} />
        <Image source={Images.mic} resizeMode={'contain'} style={styles.plusImage} />
        <Image source={Images.send} resizeMode={'contain'} style={styles.sendBtnImage} />
      </View>
    )
  }, [])

  return (
    <ReactNativeModal
      style={CommonStyles.modalStyle}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      isVisible
    >
      <View style={styles.container}>
        {renderHeaderView}
        {renderChatView}
        {renderBottomView}
      </View>
    </ReactNativeModal>
  )
}

export default ChatModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    marginHorizontal: scale(20),
    borderRadius: moderateScale(20),
    overflow: 'hidden'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(5),
    ...CommonStyles.redShadow,
    backgroundColor: Color.white
  },
  headerStarIcon: {
    height: verticalScale(15),
    width: verticalScale(15),
    tintColor: Color.textGrey
  },
  headerSmallIcon: {
    height: verticalScale(25),
    width: verticalScale(25),
    tintColor: Color.black,
    marginRight: scale(5)
  },
  innerContainer: {
    marginLeft: scale(15),
    flex: 1
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Color.black
  },
  nameContainer: {
    ...CommonStyles.row
  },
  countText: {
    fontSize: moderateScale(13),
    fontFamily: Fonts.medium,
    color: Color.textGrey,
    marginLeft: scale(8)
  },
  dotView: {
    width: verticalScale(5),
    height: verticalScale(5),
    backgroundColor: Color.textGrey,
    borderRadius: moderateScale(300),
    marginHorizontal: scale(10)
  },
  listStyle: {
    minHeight: verticalScale(250)
  },
  chatText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  },
  bottomContainer: {
    ...CommonStyles.row,
    backgroundColor: Color.offWhite,
    padding: scale(10)
  },
  plusImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    marginHorizontal: scale(5),
    tintColor: Color.black
  },
  input: {
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: moderateScale(5),
    height: INPUT_HEIGHT,
    paddingHorizontal: scale(5)
  },
  sendBtnImage: {
    height: verticalScale(25),
    width: verticalScale(25),
    marginHorizontal: scale(5),
    tintColor: Color.black
  }
})
