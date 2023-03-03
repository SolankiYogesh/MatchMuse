import React, {useCallback} from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import {Color, CommonStyles, Fonts, Images, Utility} from '../../../../Helpers'
import {
  heightPx,
  moderateScale,
  scale,
  verticalScale,
  W_WIDTH
} from '../../../../Helpers/Responsive'

const gameImages = [
  Images.games1,
  Images.games2,
  Images.games3,
  Images.games4,
  Images.games5,
  Images.games6
]

const ChatGamesScreen = () => {
  const onPressGame = () => {
    Utility.showToast('Coming soon...')
  }

  const renderImage = useCallback(({item}: any) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPressGame}>
        <Image style={styles.imageView} source={item} resizeMode={'cover'} />
      </TouchableOpacity>
    )
  }, [])

  return (
    <AppContainer>
      <View style={[CommonStyles.flex, CommonStyles.centerItem]}>
        <Text style={styles.headerText}>{t('FD403')}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderImage}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.innerView}
          keyExtractor={(item) => item}
          data={gameImages}
        />
      </View>
    </AppContainer>
  )
}

export default ChatGamesScreen
const styles = StyleSheet.create({
  imageView: {
    height: W_WIDTH / 2.85,
    width: W_WIDTH / 2.85,
    marginHorizontal: scale(10),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(20)
  },
  innerView: {
    ...CommonStyles.shadow,
    ...CommonStyles.centerItem,
    backgroundColor: Color.white,
    marginHorizontal: scale(20),
    padding: scale(15),
    borderRadius: moderateScale(20)
  },
  headerText: {
    marginVertical: verticalScale(10),
    fontFamily: Fonts.semi_bold,
    fontSize: moderateScale(18),
    color: Color.black,
    marginHorizontal: scale(15),
    width: '85%',
    marginTop: heightPx(5)
  }
})
