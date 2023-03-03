import React, {useCallback, useMemo, useState} from 'react'
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ReactNativeModal from 'react-native-modal'
import {t} from 'i18next'
import _ from 'lodash'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {ChatsList} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface RequestModalProps {
  onClose?: () => void
}

const RequestModal = ({onClose = () => {}}: RequestModalProps) => {
  const [list, setList] = useState(ChatsList)
  const renderHeader = useMemo(() => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.leftText}>{t('FD406')}</Text>
        <TouchableOpacity onPress={onClose}>
          <Image style={styles.closeImage} resizeMode={'contain'} source={Images.close} />
        </TouchableOpacity>
      </View>
    )
  }, [])

  const onPressRemoveItem = (item: any, isAccept = false) => {
    const cloneData = Utility.deepClone(list)
    const filter = _.filter(cloneData, (i) => i.id !== item?.id)
    Utility.showToast(isAccept ? 'Request accept' : 'Remove Request')
    setList(filter)
  }

  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <View style={styles.itemContainer}>
          <View style={CommonStyles.row}>
            <AppProfileImage url={item?.image} />
            <Text style={styles.nameText}>{item?.name}</Text>
          </View>
          <View style={CommonStyles.row}>
            <TouchableOpacity onPress={() => onPressRemoveItem(item, true)}>
              <LinearGradient
                start={{x: 0.3, y: 0}}
                end={{x: 0.8, y: 1}}
                locations={[0.1865, 0.8077]}
                colors={[Color.pink_shade1, Color.red_shade1]}
                style={styles.btnContainer}
              >
                <Text style={styles.btntext}>{t('FD407')}</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressRemoveItem(item)}>
              <Image style={styles.closeImage} resizeMode={'contain'} source={Images.close} />
            </TouchableOpacity>
          </View>
        </View>
      )
    },
    [list]
  )

  const renderList = useMemo(() => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
      />
    )
  }, [list])

  return (
    <ReactNativeModal isVisible coverScreen style={CommonStyles.modalStyle}>
      <SafeAreaView style={CommonStyles.flex}>
        <View style={styles.innerView}>
          {renderHeader}
          {renderList}
        </View>
      </SafeAreaView>
    </ReactNativeModal>
  )
}

export default RequestModal

const styles = StyleSheet.create({
  headerView: {
    marginHorizontal: scale(15),
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginVertical: verticalScale(10)
  },
  leftText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  closeImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.textGrey
  },
  innerView: {
    flex: 1,
    backgroundColor: Color.offWhite,
    marginHorizontal: scale(20),
    borderRadius: moderateScale(20),
    padding: scale(15)
  },
  itemContainer: {
    backgroundColor: Color.white,
    padding: scale(10),
    ...CommonStyles.row,
    flex: 1,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(15),
    justifyContent: 'space-between'
  },
  btnContainer: {
    padding: scale(5),
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(15),
    ...CommonStyles.centerItem,
    marginRight: scale(10)
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.black,
    marginLeft: scale(10)
  },
  btntext: {
    color: Color.white,
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium
  }
})
