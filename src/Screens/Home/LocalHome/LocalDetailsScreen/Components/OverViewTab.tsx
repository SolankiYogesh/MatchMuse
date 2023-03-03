import React, {useCallback, useMemo} from 'react'
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import ViewMoreText from 'react-native-view-more-text'
import {t} from 'i18next'

import AppButtonWithIcon from '../../../../../Components/AppButtonWithIcon'
import {cities} from '../../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const OverViewTab = () => {
  const renderImageView = useMemo(() => {
    return (
      <Image
        source={{
          uri: 'https://kaprat.com/dev/demo/city/8.jpg'
        }}
        resizeMode={'cover'}
        style={styles.imageVIew}
      />
    )
  }, [])

  const renderViewMore = useCallback((onPress: () => void) => {
    return (
      <Text style={styles.viewMoreText} onPress={onPress}>
        {t('FD377')}
      </Text>
    )
  }, [])

  const renderTaxtView = useMemo(() => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{'Amsterdam'}</Text>
        <ViewMoreText
          numberOfLines={5}
          renderViewMore={renderViewMore}
          renderViewLess={() => {
            return <></>
          }}
        >
          <Text style={styles.descText}>
            {
              'Zeitalter der Stadt im 17. Jahrhundert stammen. Sein Museumsviertel beherbergt das Van Gogh Museum, Werke von Rembrandt und Vermeer im Rijksmuseum und moderne Kunst im Stedelijk. Zeitalter der Stadt im 17. Jahrhundert stammen. Sein Museumsviertel beherbergt das Van Gogh Museum, Werke von Rembrandt und Vermeer im Rijksmuseum und moderne Kunst im Stedelijk. Werke von Rembrandt und Vermeer im Rijksmuseum und moderne Kunst im Stedelijk. Radfahren ist der Schlüssel zum Charakter der'
            }
          </Text>
        </ViewMoreText>
        <AppButtonWithIcon
          containerStyle={styles.btnCOntainerStyle}
          imageStyle={styles.btnImageStyle}
          titleStyle={styles.titleStyle}
          image={Images.location_line}
          title={t('FD376')}
        />
      </View>
    )
  }, [])

  const renderItemImage = ({item}: any) => {
    return (
      <>
        <Image
          source={{
            uri: item?.image
          }}
          style={styles.itemImageStyle}
          resizeMode={'cover'}
        />
        <Text style={styles.cityText}>{item?.title}</Text>
      </>
    )
  }

  const renderNeighborhoodsView = useMemo(() => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id}
        data={cities}
        renderItem={renderItemImage}
      />
    )
  }, [])

  return (
    <View style={CommonStyles.flex}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderImageView}
        {renderTaxtView}
        {renderNeighborhoodsView}
      </ScrollView>
    </View>
  )
}

export default OverViewTab

const styles = StyleSheet.create({
  imageVIew: {
    width: '90%',
    alignSelf: 'center',
    height: verticalScale(220),
    borderRadius: moderateScale(20),
    ...CommonStyles.shadow,
    marginVertical: verticalScale(15)
  },
  btnCOntainerStyle: {
    flex: 0,
    ...CommonStyles.row,
    width: '35%',
    marginVertical: verticalScale(15)
  },
  btnImageStyle: {
    height: verticalScale(30),
    width: verticalScale(30),
    tintColor: Color.white
  },
  titleStyle: {
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    fontSize: moderateScale(15),
    marginLeft: scale(5)
  },
  textContainer: {
    marginHorizontal: scale(15)
  },
  viewMoreText: {
    fontSize: moderateScale(13),
    textDecorationLine: 'underline',
    marginTop: verticalScale(10),
    fontFamily: Fonts.medium,
    color: Color.black
  },
  titleText: {
    fontFamily: Fonts.bold,
    color: Color.black,
    fontSize: moderateScale(19),
    marginVertical: verticalScale(15)
  },
  descText: {
    fontFamily: Fonts.medium,
    color: Color.darkGrey,
    fontSize: moderateScale(14)
  },
  itemImageStyle: {
    width: verticalScale(200),
    height: verticalScale(180),
    borderRadius: moderateScale(20),
    ...CommonStyles.shadow,
    marginHorizontal: scale(10)
  },
  cityText: {
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    fontSize: moderateScale(13),
    position: 'absolute',
    bottom: verticalScale(20),
    left: scale(25)
  }
})
