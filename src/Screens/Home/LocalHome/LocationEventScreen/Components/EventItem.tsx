import React, {useMemo, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import _ from 'lodash'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import EventDetailsBottomSheet from '../../../../../Components/EventDetailsBottomSheet/EventDetailsBottomSheet'
import {Color, CommonStyles, Fonts} from '../../../../../Helpers'
import {heightPx, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const EventItem = ({item}: any) => {
  const [isDetailScreen, setISDetailsScreen] = useState(false)
  const renderProfileContainer = useMemo(() => {
    return (
      <View style={styles.profileContainer}>
        <View style={styles.profileIconContainer}>
          {_.map(item?.profiles, (i, index: number) => {
            return (
              <AppProfileImage
                borderWidth={1}
                borderRadius={moderateScale(30)}
                url={i}
                style={index === 1 && styles.rightImage}
                borderColor={Color.white}
              />
            )
          })}
        </View>
        <View style={styles.calenderView}>
          <Text style={styles.date}>{item?.date}</Text>
          <Text style={styles.month}>{item?.month}</Text>
        </View>
      </View>
    )
  }, [item])

  const renderTextContainer = useMemo(() => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.category}>{item?.category}</Text>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.deskText}>{item?.descText}</Text>
      </View>
    )
  }, [])

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => setISDetailsScreen(true)}>
      <Image
        source={{
          uri: item?.image
        }}
        style={styles.imageVIew}
        resizeMode={'cover'}
      />
      {renderProfileContainer}
      {renderTextContainer}
      {isDetailScreen && (
        <EventDetailsBottomSheet item={item} onClose={() => setISDetailsScreen(false)} />
      )}
    </TouchableOpacity>
  )
}

export default EventItem

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    height: heightPx(45),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    marginVertical: verticalScale(10)
  },
  imageVIew: {
    width: '100%',
    height: '100%'
  },
  profileContainer: {
    position: 'absolute',
    padding: scale(25),
    width: '100%',
    ...CommonStyles.row,
    justifyContent: 'space-between'
  },
  profileIconContainer: {
    width: scale(80),
    ...CommonStyles.row
  },
  rightImage: {
    right: scale(10)
  },
  calenderView: {
    backgroundColor: Color.white,
    borderRadius: moderateScale(15),
    padding: scale(15)
  },
  date: {
    fontFamily: Fonts.semi_bold,
    color: Color.black,
    fontSize: moderateScale(15),
    textAlign: 'center'
  },
  month: {
    fontFamily: Fonts.medium,
    color: Color.black,
    fontSize: moderateScale(11)
  },
  textContainer: {
    position: 'absolute',
    bottom: verticalScale(25),
    marginLeft: scale(25)
  },
  category: {
    fontFamily: Fonts.medium,
    color: Color.white,
    fontSize: moderateScale(11),
    marginBottom: verticalScale(5)
  },
  title: {
    fontFamily: Fonts.bold,
    color: Color.white,
    fontSize: moderateScale(16)
  },
  deskText: {
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    fontSize: moderateScale(15)
  }
})
