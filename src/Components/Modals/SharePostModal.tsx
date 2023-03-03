import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import ReactNativeModal from 'react-native-modal'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet'
import {t} from 'i18next'
import _ from 'lodash'

import {FEEDS, STORYLIST} from '../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../Helpers'
import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from '../../Helpers/Responsive'
import AppButton from '../AppButton'
import AppContainer from '../AppContainer'
import AppProfileImage from '../AppProfileImage'
import IosBottomButtonAvoid from '../IosBottomButtonAvoid'

interface SharePostModalProps {
  onClose?: () => void
}

const SharePostModal = ({onClose = () => {}}: SharePostModalProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const [search, setSearch] = useState('')

  const modalRef = useRef<BottomSheetModal>(null)
  const initialSnapPoints = useMemo(() => ['60%', '95%'], [])

  const [users, setUsers] = useState<any[]>()
  const items = useMemo(
    () =>
      _.map(STORYLIST, (i) => {
        return {
          ...i,
          isSelected: false
        }
      }),
    []
  )

  useEffect(() => {
    setUsers(items)
  }, [])

  useEffect(() => {
    modalRef.current?.present()
  }, [])

  const close = () => {
    bottomSheetRef.current?.close()
    if (onClose) onClose()
  }

  useEffect(() => {
    if (!_.trim(search)) {
      setUsers(items)
    } else {
      const filter = _.filter(items, (i: any) => {
        return i?.username?.toLowerCase().indexOf(search?.toLowerCase()) > -1
      })

      setUsers(filter)
    }
  }, [search])

  const renderInputView = () => {
    return (
      <View style={[CommonStyles.row, styles.inputViewContainer]}>
        <AppProfileImage borderWidth={0} borderRadius={15} size={40} url={FEEDS[1].image} />
        <TextInput
          placeholder={String(t('FD270'))}
          selectionColor={Color.Primary}
          style={styles.input}
        />
      </View>
    )
  }

  const renderSearchView = () => {
    return (
      <View style={styles.inputView}>
        <Image style={styles.searchImage} resizeMode={'contain'} source={Images.search} />
        <TextInput
          selectionColor={Color.Primary}
          placeholder={String(t('FD267'))}
          style={styles.input}
          returnKeyType={'search'}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    )
  }

  const renderUsersList = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollStyle}>
        {_.map(users, (i) => {
          return renderUserItem(i)
        })}
      </ScrollView>
    )
  }

  const onPressItem = (item: any) => {
    const cloneLang = Utility.deepClone(users)
    const index = _.findIndex(cloneLang, (i: any) => i?.id === item?.id)
    cloneLang[index].isSelected = !cloneLang[index].isSelected
    setUsers(cloneLang)
  }

  const renderUserItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.headerContainer} onPress={() => onPressItem(item)}>
        <AppProfileImage borderWidth={1} borderRadius={15} size={40} url={item?.profile} />
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.nameText}>{item?.username}</Text>
            <Text style={styles.nameTitleText}>{item?.title}</Text>
          </View>
        </View>
        <View style={[styles.innerCircle, item?.isSelected && styles.selectedCircle]}>
          {item?.isSelected && (
            <Image source={Images.checkRight} style={styles.imageCheck} resizeMode={'contain'} />
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ReactNativeModal isVisible coverScreen style={CommonStyles.modalStyle}>
      <AppContainer bottomColor={Color.white} color={Color.transparent}>
        <GestureHandlerRootView style={CommonStyles.flex}>
          <BottomSheetModalProvider>
            <BottomSheet
              snapPoints={initialSnapPoints}
              backdropComponent={(props) => (
                <BottomSheetBackdrop
                  disappearsOnIndex={-1}
                  appearsOnIndex={0}
                  enableTouchThrough
                  pressBehavior={'close'}
                  {...props}
                />
              )}
              onClose={close}
              handleIndicatorStyle={styles.handleIndicatorStyle}
              enablePanDownToClose
            >
              <View style={CommonStyles.flex}>
                {renderInputView()}
                <View style={styles.borderView} />
                {renderSearchView()}
                {renderUsersList()}
              </View>
            </BottomSheet>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
        <AppButton gradientStyleContainer={styles.mainContainer} title={t('FD30')} />
        <IosBottomButtonAvoid />
      </AppContainer>
    </ReactNativeModal>
  )
}

export default SharePostModal

const styles = StyleSheet.create({
  borderView: {
    width: '100%',
    height: verticalScale(2),
    backgroundColor: Color.lightGrey,
    alignSelf: 'center',
    marginVertical: verticalScale(15)
  },
  handleIndicatorStyle: {
    width: '20%'
  },
  input: {
    flex: 1,
    marginLeft: scale(10),
    fontSize: moderateScale(15)
  },
  inputViewContainer: {
    width: '90%',
    alignSelf: 'center'
  },
  searchImage: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.darkGrey,
    marginRight: scale(15)
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: Color.black,
    height: INPUT_HEIGHT,
    paddingHorizontal: scale(10)
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(10),
    // ...CommonStyles.shadow,
    backgroundColor: Color.white,
    width: '80%',
    alignSelf: 'center',
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(15)
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
    borderWidth: 1,
    borderRadius: moderateScale(10),
    borderColor: Color.Primary,
    marginRight: scale(10),
    backgroundColor: Color.white
  },

  selectedCircle: {
    backgroundColor: Color.redExtra
  },
  mainContainer: {
    marginBottom: verticalScale(8),
    width: '90%',
    alignSelf: 'center',
    height: verticalScale(55),
    position: 'absolute',
    bottom: 0
  },
  scrollStyle: {
    marginBottom: verticalScale(65),
    flex: 1
  }
})
