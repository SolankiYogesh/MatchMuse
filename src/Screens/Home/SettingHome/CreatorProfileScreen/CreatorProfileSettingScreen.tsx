import React, {useState} from 'react'
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import AppButtonWithIcon from '../../../../Components/AppButtonWithIcon'
import AppContainer from '../../../../Components/AppContainer'
import MediaPicker from '../../../../Components/MediaPicker'
import SettingHeader from '../../../../Components/SettingHeader'
import {Images, Screen, Utility} from '../../../../Helpers'
import {styles} from './CreatorProfileSettingStyle'

const CreatorProfileSettingScreen = () => {
  const [isEnable, setISEnable] = useState(true)
  const [isEnable2, setISEnable2] = useState(true)
  const [documentUri, setDocumentUri] = useState('')
  const [isDocument, setISDocument] = useState(false)
  const [isCheked, setISChecked] = useState(false)
  const [instURL, setInstaUrl] = useState('')
  const [ytURL, setYtUrl] = useState('')
  const [snapURL, setSnapUrl] = useState('')
  const [twitchURL, setTwitchUrl] = useState('')
  const [govInstURL, setGovInstURL] = useState('')
  const navigation: any = useNavigation()

  const onPressSaveScoailAccount = () => {
    if (!_.trim(instURL) && !_.trim(ytURL) && !_.trim(snapURL) && !_.trim(twitchURL)) {
      Utility.showToast(t('FD453'))
      return
    }
    if (_.trim(instURL) && !Utility.isValidInstagramURL(instURL)) {
      Utility.showToast(t('FD454'))
      return
    }
    if (_.trim(ytURL) && !Utility.isValidYoutubeURL(ytURL)) {
      Utility.showToast(t('FD455'))
      return
    }

    if (_.trim(snapURL) && !Utility.isValidSnapChatURL(snapURL)) {
      Utility.showToast(t('FD457'))
      return
    }
    if (_.trim(twitchURL) && !Utility.isValidTwitchURL(twitchURL)) {
      Utility.showToast(t('FD456'))
    }
  }

  const onPressSendGovId = () => {
    if (!_.trim(govInstURL)) {
      Utility.showToast(t('FD458'))
      return
    }
    if (_.trim(govInstURL) && !Utility.isValidInstagramURL(govInstURL)) {
      Utility.showToast(t('FD459'))
      return
    }
    navigation.navigate(Screen.CelebrityProfileBadgeScreen)
  }

  const renderTopView = () => {
    return (
      <View style={styles.boxView}>
        <View style={styles.rowContainer}>
          <Text style={styles.hintText}>{t('FD181')}</Text>
          <TouchableOpacity onPress={() => setISEnable(!isEnable)}>
            <Image
              source={isEnable ? Images.up_arrow : Images.down_arrow}
              resizeMode={'contain'}
              style={styles.imageBtn}
            />
          </TouchableOpacity>
        </View>
        {isEnable && (
          <View style={styles.expendView}>
            <View style={styles.inputCOntainer}>
              <Image source={Images.instagram} style={styles.inLoveImage} resizeMode={'contain'} />
              <TextInput
                value={instURL}
                onChangeText={setInstaUrl}
                style={styles.input}
                placeholder={String(t('FD182'))}
              />
            </View>
            <Text style={styles.middleText}>{t('FD180')}</Text>
            <View style={styles.inputCOntainer}>
              <Image source={Images.youtube} style={styles.inLoveImage} resizeMode={'contain'} />
              <TextInput
                value={ytURL}
                onChangeText={setYtUrl}
                style={styles.input}
                placeholder={String(t('FD183'))}
              />
            </View>
            <Text style={styles.middleText}>{t('FD180')}</Text>

            <View style={styles.inputCOntainer}>
              <Image source={Images.snapchat} style={styles.inLoveImage} resizeMode={'contain'} />
              <TextInput
                value={snapURL}
                onChangeText={setSnapUrl}
                style={styles.input}
                placeholder={String(t('FD184'))}
              />
            </View>
            <Text style={styles.middleText}>{t('FD180')}</Text>

            <View style={styles.inputCOntainer}>
              <Image source={Images.twist} style={styles.inLoveImage} resizeMode={'contain'} />
              <TextInput
                value={twitchURL}
                onChangeText={setTwitchUrl}
                style={styles.input}
                placeholder={String(t('FD185'))}
              />
            </View>
            <AppButtonWithIcon
              imageStyle={styles.smallImageContainer}
              style={styles.btnToggle}
              image={Images.right_arrow}
              onPress={onPressSaveScoailAccount}
              containerStyle={styles.toogleCOntainer}
            />
          </View>
        )}
      </View>
    )
  }

  const renderBottomView = () => {
    return (
      <View style={styles.boxView}>
        <View style={styles.rowContainer}>
          <Text style={styles.hintText}>{t('FD181')}</Text>
          <TouchableOpacity onPress={() => setISEnable2(!isEnable2)}>
            <Image
              source={isEnable2 ? Images.up_arrow : Images.down_arrow}
              resizeMode={'contain'}
              style={styles.imageBtn}
            />
          </TouchableOpacity>
        </View>
        {isEnable2 && (
          <View style={styles.expendView}>
            <View style={styles.inputCOntainer}>
              <Image source={Images.instagram} style={styles.inLoveImage} resizeMode={'contain'} />
              <TextInput
                onChangeText={setGovInstURL}
                value={govInstURL}
                style={styles.input}
                placeholder={String(t('FD182'))}
              />
            </View>

            <TouchableOpacity style={styles.clickBoxView} onPress={() => setISDocument(true)}>
              {documentUri ? (
                <Image
                  source={{
                    uri: documentUri
                  }}
                  style={styles.docImage}
                  resizeMode={'cover'}
                />
              ) : (
                <>
                  <Text style={styles.goverment_id_Text}>{t('FD187')}</Text>

                  <View style={styles.shadowVIew}>
                    <Image source={Images.plus} style={styles.plusImage} resizeMode={'contain'} />
                  </View>
                </>
              )}
            </TouchableOpacity>

            <View style={styles.checkBoxVIew}>
              <TouchableOpacity onPress={() => setISChecked(!isCheked)}>
                <Image
                  source={isCheked ? Images.checkBoxGrad : Images.unCheckBoxGrad}
                  style={styles.plusView}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <Text style={styles.checktext}>{t('FD188')}</Text>
            </View>

            <AppButtonWithIcon
              imageStyle={styles.smallImageContainer}
              style={styles.btnToggle}
              image={Images.right_arrow}
              onPress={onPressSendGovId}
              containerStyle={styles.toogleCOntainer}
            />
          </View>
        )}
      </View>
    )
  }

  return (
    <AppContainer>
      <SettingHeader isLogo title={t('FD189')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTopView()}
        {renderBottomView()}
      </ScrollView>
      {isDocument && (
        <MediaPicker
          onClose={() => setISDocument(false)}
          onPickImage={(image) => {
            setDocumentUri(image.path)
            setISDocument(false)
          }}
          isVisible={isDocument}
        />
      )}
    </AppContainer>
  )
}

export default CreatorProfileSettingScreen
