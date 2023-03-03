import React, {useEffect, useMemo, useState} from 'react'
import {FlatList, Image, StyleSheet, TextInput, View} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../../Components/AppContainer'
import {FEEDS} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from '../../../../Helpers/Responsive'
import EntertainmentFeedHeader from '../../EntertainmentHome/EntertainmentFeedsScreen/Components/EntertainmentFeedHeader'
import EventItem from './Components/EventItem'

const cityData = [t('FD147'), 'BERLINE', 'TOKYO', 'WASHINGTONE', 'KIW', 'MOSKO']

const dummyEvents = [
  {
    category: 'Art Gallery',
    date: 30,
    month: 'MAR',
    title: 'Connect To Earth',
    descText: 'Booked Ticket120',
    city: 'BERLINE',
    image: 'https://kaprat.com/dev/demo/hotels/22.png',
    profiles: [
      FEEDS[Math.floor(Math.random() * 10)].image,
      FEEDS[Math.floor(Math.random() * 10)].image
    ]
  },
  {
    category: 'Night Out Part',
    date: 5,
    month: 'APR',
    title: 'Power Of Patel',
    descText: 'Booked Ticket120',
    city: 'TOKYO',
    image: 'https://kaprat.com/dev/demo/hotels/23.png',
    profiles: [
      FEEDS[Math.floor(Math.random() * 10)].image,
      FEEDS[Math.floor(Math.random() * 10)].image
    ]
  },
  {
    category: 'Mega Singer Show',
    date: 10,
    month: 'JAN',
    title: 'Get Into The Safe Zone',
    descText: 'Booked Ticket120',
    city: 'WASHINGTONE',
    image: 'https://kaprat.com/dev/demo/hotels/24.png',
    profiles: [
      FEEDS[Math.floor(Math.random() * 10)].image,
      FEEDS[Math.floor(Math.random() * 10)].image
    ]
  },
  {
    category: 'Dance For Music',
    date: 26,
    month: 'FEB',
    title: 'Cool Part',
    descText: 'Booked Ticket120',
    city: 'KIW',
    image: 'https://kaprat.com/dev/demo/hotels/25.png',
    profiles: [
      FEEDS[Math.floor(Math.random() * 10)].image,
      FEEDS[Math.floor(Math.random() * 10)].image
    ]
  },
  {
    category: 'New Year part',
    date: 31,
    month: 'DEC',
    title: 'Bath Club',
    descText: 'Booked Ticket120',
    city: 'MOSKO',
    image: 'https://kaprat.com/dev/demo/hotels/26.png',
    profiles: [
      FEEDS[Math.floor(Math.random() * 10)].image,
      FEEDS[Math.floor(Math.random() * 10)].image
    ]
  }
]

const LocationEventScreen = () => {
  const [events, setEvents] = useState(dummyEvents)
  const [search, setSearch] = useState('')
  const onSelectedItem = (value: string) => {
    const filter = _.filter(dummyEvents, (i: any) => {
      return i?.city?.toLowerCase().indexOf(value?.toString()?.toLowerCase()) > -1
    })
    setEvents(filter)
  }

  useEffect(() => {
    if (!_.trim(search)) {
      setEvents(dummyEvents)
    } else {
      const filter = _.filter(dummyEvents, (i: any) => {
        return i?.city?.toLowerCase().indexOf(search?.toString()?.toLowerCase()) > -1
      })
      setEvents(filter)
    }
  }, [search])

  const renderItem = ({item}: any) => <EventItem item={item} />

  const renderIcon = () => (
    <Image source={Images.down_arrow} style={styles.downArrow} resizeMode={'contain'} />
  )

  const renderTextInput = useMemo(() => {
    return (
      <View style={styles.inputContainer}>
        <Image source={Images.search} style={styles.searchImage} resizeMode={'contain'} />
        <TextInput
          selectionColor={Color.Primary}
          onChangeText={setSearch}
          value={search}
          placeholder={String(t('FD267'))}
          style={CommonStyles.flex}
        />
      </View>
    )
  }, [])

  return (
    <AppContainer>
      <EntertainmentFeedHeader title={t('FD369')} />
      <View style={CommonStyles.row}>
        <SelectDropdown
          onChangeSearchInputText={() => {}}
          data={cityData}
          onSelect={onSelectedItem}
          defaultButtonText={cityData[0]}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem
          }}
          buttonStyle={styles.mainButtonCintainer}
          dropdownIconPosition={'right'}
          buttonTextStyle={styles.rowText}
          rowStyle={styles.itemContainer}
          renderDropdownIcon={renderIcon}
          dropdownOverlayColor={Color.transparent}
          disableAutoScroll
          statusBarTranslucent
          dropdownStyle={styles.dropDownStyle}
          rowTextStyle={styles.rowText}
          rowTextForSelection={(item) => {
            return item
          }}
        />
        {renderTextInput}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.city}
      />
    </AppContainer>
  )
}

export default LocationEventScreen
const styles = StyleSheet.create({
  mainButtonCintainer: {
    ...CommonStyles.centerItem,
    ...CommonStyles.row,
    backgroundColor: Color.white,
    padding: scale(10),
    borderRadius: moderateScale(10),
    justifyContent: 'space-between',
    marginLeft: scale(4),
    flexDirection: 'row-reverse',
    width: scale(100),
    marginVertical: verticalScale(10),
    marginHorizontal: scale(10),
    height: INPUT_HEIGHT
  },
  rowText: {
    fontSize: moderateScale(13),
    color: Color.Primary,
    textAlign: 'left',
    flex: 1
  },
  dropDownStyle: {
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    ...CommonStyles.shadow,
    padding: scale(5),
    backgroundColor: Color.white
  },
  itemContainer: {
    backgroundColor: Color.white,
    padding: scale(5),
    zIndex: 20000,
    height: verticalScale(30),
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: verticalScale(4)
  },
  downArrow: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.Primary
  },
  inputContainer: {
    ...CommonStyles.row,
    ...CommonStyles.shadow,
    backgroundColor: Color.white,
    height: INPUT_HEIGHT,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    flex: 1,
    marginRight: scale(10),
    paddingHorizontal: scale(15)
  },
  searchImage: {
    width: verticalScale(15),
    height: verticalScale(15),
    tintColor: Color.Primary,
    marginRight: scale(10)
  }
})
