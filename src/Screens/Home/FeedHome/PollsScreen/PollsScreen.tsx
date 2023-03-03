import React from 'react'
import {FlatList, Text} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import AppScrollView from '../../../../Components/AppScrollView'
import SettingHeader from '../../../../Components/SettingHeader'
import RenderPollItem from './Components/RenderPollItem'
import {styles} from './PollsScreenStyle'

const pollData = [
  {
    image: 'https://kaprat.com/dev/demo/profile/01.jpg',
    likeCount: 120,
    date: '30.03.2022',
    votes: 20
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/02.jpg',
    likeCount: 100,
    date: '30.03.2022',
    votes: 40
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/03.jpg',
    likeCount: 90,
    date: '30.03.2022',
    votes: 10
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/04.jpg',
    likeCount: 112,
    date: '30.03.2022',
    votes: 5
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/05.jpg',
    likeCount: 50,
    date: '30.03.2022',
    votes: 45
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/01.jpg',
    likeCount: 120,
    date: '30.03.2022',
    votes: 20
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/02.jpg',
    likeCount: 100,
    date: '30.03.2022',
    votes: 40
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/03.jpg',
    likeCount: 90,
    date: '30.03.2022',
    votes: 10
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/04.jpg',
    likeCount: 112,
    date: '30.03.2022',
    votes: 5
  },
  {
    image: 'https://kaprat.com/dev/demo/profile/05.jpg',
    likeCount: 50,
    date: '30.03.2022',
    votes: 45
  }
]

const PollsScreen = () => {
  const renderPollList = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={pollData}
        renderItem={renderItem}
        horizontal
      />
    )
  }

  const renderItem = ({item}: any) => {
    return <RenderPollItem item={item} />
  }

  const renderNewPollList = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={pollData}
        renderItem={renderItem}
        horizontal
      />
    )
  }

  return (
    <AppContainer isEdgeContainer>
      <SettingHeader style={styles.headerStyle} title={t('FD284')} isShadow={false} isTransparent />
      <AppScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.toptext}>
          {'Nehme mit der gesamten Fyerdates Community an unterschiedlichen Abstimmungen teil!'}
        </Text>
        {renderPollList()}
        <Text style={styles.newText}>{t('FD285')}</Text>
        {renderNewPollList()}
      </AppScrollView>
    </AppContainer>
  )
}

export default PollsScreen
