import React, {useCallback, useMemo} from 'react'
import {ScrollView, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ProgressCircle from 'react-native-progress-circle'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import AppProfileImage from '../../../../Components/AppProfileImage'
import SettingHeader from '../../../../Components/SettingHeader'
import {FEEDS} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {styles} from './TestResultScreenStyle'

const TestResultScreen = () => {
  const renderProfileView = useMemo(() => {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.8, y: 1}}
          locations={[0.1865, 0.8077]}
          colors={[Color.pink_shade1, Color.red_shade1]}
          style={styles.profileContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{'Rosa Buss'}</Text>
            <Text style={styles.hintText}>{'(21 Years) Students'}</Text>
            <Text style={styles.positionText}>{'INFJ - Counselor'}</Text>
          </View>
        </LinearGradient>
        <AppProfileImage
          borderRadius={25}
          borderColor={Color.white}
          borderWidth={5}
          style={styles.profileImage}
          size={123}
          url={FEEDS[5].image}
        />
      </View>
    )
  }, [])

  const renderProgressView = useCallback((isRowReverse = false) => {
    const percentage = Math.floor(Math.random() * 100)
    return (
      <View style={[styles.progressContainer, isRowReverse && styles.rowReverce]}>
        <ProgressCircle
          bgColor={Color.white}
          borderWidth={5}
          radius={moderateScale(50)}
          color={Color.redExtra}
          percent={percentage}
        >
          <Text style={styles.progressText}>
            {percentage}
            {'%'}
          </Text>
        </ProgressCircle>
        <View style={styles.textProgressContainer}>
          <Text style={[styles.nameText, styles.blackText]}>{t('FD396')}</Text>
          <Text style={[styles.hintText, styles.blackText, CommonStyles.flex]}>{t('FD397')}</Text>
        </View>
      </View>
    )
  }, [])

  const renderButtons = useMemo(() => {
    return (
      <View>
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.8, y: 1}}
          locations={[0.1865, 0.8077]}
          colors={[Color.pink_shade1, Color.red_shade1]}
          style={styles.btnContainer}
        >
          <Text style={styles.btnText}>{t('FD398')}</Text>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          angle={360}
          end={{x: 1, y: 0}}
          colors={[Color.blueShade041, Color.blueShade0414, Color.blueShade040]}
          style={styles.btnContainer}
        >
          <Text style={styles.btnText}>{t('FD50')}</Text>
        </LinearGradient>
      </View>
    )
  }, [])

  return (
    <AppContainer isEdgeContainer>
      <SettingHeader isShadow={false} title={t('FD395')} otherIcon={Images.vertical_menu} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderProfileView}
        {renderProgressView()}
        {renderProgressView(true)}
        {renderButtons}
      </ScrollView>
    </AppContainer>
  )
}

export default TestResultScreen
