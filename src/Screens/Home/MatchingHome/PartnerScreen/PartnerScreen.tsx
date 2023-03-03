import React from 'react'
import {FlatList, Image, View} from 'react-native'
import {t} from 'i18next'

import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {Images} from '../../../../Helpers'
import {styles} from './PartnerScreenStyle'

const partenerData = [
  Images.red_bull,
  Images.reichel,
  Images.trishul,
  Images.p_and_g,
  Images.treva,
  Images.logoipsum,
  Images.big_dummmy,
  Images.elvis
]

const PartnerScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.partenerItemContainer}>
        <Image source={item} style={styles.imageStyle} />
      </View>
    )
  }

  return (
    <AppContainer isEdgeContainer>
      <SettingHeader
        otherIcon={Images.vertical_menu}
        isShadow={false}
        isTransparent
        title={t('FD473')}
      />
      <FlatList
        style={styles.listStyle}
        numColumns={2}
        renderItem={renderItem}
        data={partenerData}
        keyExtractor={(item) => item}
      />
    </AppContainer>
  )
}

export default PartnerScreen
