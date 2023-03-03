import React from 'react'
import {ScrollView, Text} from 'react-native'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../Components/AppContainer'
import SettingHeader from '../../../Components/SettingHeader'
import {testData} from '../../../DummyData/MatchingProfileFeeds'
import {Images} from '../../../Helpers'
import RenderTestListItem from './Components/RenderTestListItem'
import {styles} from './PersonalityTestStyle'

const PersonalityTestScreen = () => {
  return (
    <AppContainer isEdgeContainer>
      <SettingHeader isShadow={false} title={t('FD385')} otherIcon={Images.vertical_menu} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.topText}>{'Erzähle uns mehr über deine Person'}</Text>
        <Text style={styles.bottomText}>
          {
            'Gebe uns und den Personen auf dieser Plattform mehr Einblick zu deiner Persönlichkeit. Das Ausfüllen unserer Fragebögen hilft dir später auch bei der Match-Kompatibilität mit einem weiteren Single!'
          }
        </Text>
        {_.map(testData, (i) => {
          return <RenderTestListItem item={i} />
        })}
      </ScrollView>
    </AppContainer>
  )
}

export default PersonalityTestScreen
