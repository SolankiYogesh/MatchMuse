import React, {useState} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'
import _ from 'lodash'

import AppContainer from '../../../Components/AppContainer'
import AppScrollView from '../../../Components/AppScrollView'
import InputText from '../../../Components/InputText'
import {Color, Images, Utility} from '../../../Helpers'
import {styles} from './ForgotPasswordScreenStyle'

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('')

  const onPressSend = () => {
    if (!_.trim(username)) {
      Utility.showToast(t('FD15'))
    }
  }
  return (
    <AppContainer isGradient>
      <AppScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.container}>
          <Image source={Images.fyerdates_logo} style={styles.logoImage} resizeMode={'contain'} />
          <Text style={styles.logoTitle}>{t('FD1')}</Text>

          <View style={styles.innerContainer}>
            <InputText
              keyboardType={'default'}
              selectionColor={Color.Primary}
              placeHolderCustom={t('FD29')}
              value={username}
              onChangeText={setUsername}
              onSubmitEditing={onPressSend}
              returnKeyType={'done'}
              image={Images.gbn_mail_96_fit}
              style={styles.inputCOntainer}
            />

            <TouchableOpacity onPress={onPressSend}>
              <LinearGradient
                start={{x: 0, y: 0}}
                angle={360}
                end={{x: 1, y: 0}}
                style={styles.btnStyleContainer}
                colors={['#041c7c', '#041444', '#040c15']}
              >
                <Text style={styles.btntext}>{t('FD30')}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </AppScrollView>
    </AppContainer>
  )
}

export default ForgotPasswordScreen
