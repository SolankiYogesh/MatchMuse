import React, {useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {t} from 'i18next'

import {verticalScale} from '../../../../../Helpers/Responsive'
import EntertainmentFeedHeader from './EntertainmentFeedHeader'
import PodaCastItem from './PodaCastItem'

const streams = [
  {
    deskText: 'This never change',
    title: 'Like Check Yourself',
    image: 'https://kaprat.com/dev/demo/podcast/01.png',
    audio: 'https://pagalfree.com/musics/128-Achha%20Sila%20Diya%20-%20B%20Praak%20128%20Kbps.mp3'
  },
  {
    deskText: 'This never change',

    title: 'GreatWisdon',
    image: 'https://kaprat.com/dev/demo/podcast/02.png',
    audio:
      'https://pagalfree.com/musics/128-Saare%20Bolo%20Bewafa%20-%20Bachchhan%20Paandey%20128%20Kbps.mp3'
  },
  {
    deskText: 'This never change',
    title: 'JioDio',
    image: 'https://kaprat.com/dev/demo/podcast/03.png',
    audio:
      'https://pagalfree.com/musics/128-Heer%20Raanjhana%20-%20Bachchhan%20Paandey%20128%20Kbps.mp3'
  },
  {
    deskText: 'This never change',
    title: 'Dharmesh',
    image: 'https://kaprat.com/dev/demo/podcast/04.png',
    audio:
      'https://pagalfree.com/musics/128-Apna%20Time%20Aayega%20-%20Gully%20Boy%20128%20Kbps.mp3'
  },
  {
    deskText: 'This never change',
    title: 'Dharmesh',
    image: 'https://kaprat.com/dev/demo/podcast/05.png',
    audio:
      'https://pagalfree.com/musics/128-Bhool%20Bhulaiyaa%202%20Title%20Track%20-%20Bhool%20Bhulaiyaa%202%20128%20Kbps.mp3'
  },
  {
    deskText: 'This never change',
    title: 'Dharmesh',
    image: 'https://kaprat.com/dev/demo/podcast/06.png',
    audio:
      'https://pagalfree.com/musics/128-Hum%20Nashe%20Mein%20Toh%20Nahin%20-%20Bhool%20Bhulaiyaa%202%20128%20Kbps.mp3'
  }
]

const RenderPodCastList = () => {
  const [isColumn, setISColumn] = useState(false)
  const [key, setKey] = useState(0)

  const renderitem = ({item}: any) => {
    return <PodaCastItem isColumn={isColumn} audioData={streams} item={item} />
  }

  return (
    <View>
      <EntertainmentFeedHeader
        title={t('FD320')}
        onPressMenu={() => {
          setISColumn(!isColumn)
          setKey(key + 1)
        }}
      />
      {isColumn ? (
        <FlatList
          data={streams}
          renderItem={renderitem}
          keyExtractor={(item) => item.image}
          numColumns={3}
          key={key}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        />
      ) : (
        <FlatList
          data={streams}
          renderItem={renderitem}
          keyExtractor={(item) => item.image}
          horizontal
          key={key}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        />
      )}
    </View>
  )
}

export default RenderPodCastList

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(15)
  }
})
