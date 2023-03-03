import React, {useRef, useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {t} from 'i18next'
import _ from 'lodash'
import Switch from 'toggle-switch-react-native'

import AppButton from '../../../../Components/AppButton'
import AppContainer from '../../../../Components/AppContainer'
import AppScrollView from '../../../../Components/AppScrollView'
import SettingHeader from '../../../../Components/SettingHeader'
import {PROFILEIMAGEICON} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, Utility} from '../../../../Helpers'
import TextFieldProfile from './Components/TextFieldProfile'
import {styles} from './EditProfileStyle'

const radioButtonsData = [t('FD148'), t('FD149'), t('FD147')]
const EditProfileScreen = () => {
  const [profileImage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [phoneNumber1, setPhoneNumber1] = useState('')
  const [phoneNumber2, setPhoneNumber2] = useState('')
  const [isSwitch, setIsSwitch] = useState(false)
  const emailRef = useRef<TextInput>()
  const phone1Ref = useRef<TextInput>()
  const phone2Ref = useRef<TextInput>()
  const [activeIndex, setActiveIndex] = useState(0)

  const onPressSubmit = () => {
    if (!_.trim(name)) {
      Utility.showToast(t('FD155'))
      return
    }
    if (!_.trim(email)) {
      Utility.showToast(t('FD16'))
      return
    }
    if (!_.trim(phoneNumber1) && !_.trim(phoneNumber2)) {
      Utility.showToast(t('FD17'))
      return
    }
    Utility.showToast(t('FD156'))
  }

  const renderProfileImageView = () => {
    return (
      <View style={styles.profileCOntainer}>
        <View style={styles.firstBoxView}>
          <Image
            source={{
              uri: profileImage || PROFILEIMAGEICON
            }}
            resizeMode={'cover'}
            style={styles.smallImageContainer}
          />
        </View>
        <View style={styles.profileNameCOntainer}>
          <Text style={styles.profileNameText}>{'UserName'}</Text>
          <TouchableOpacity>
            <Text style={styles.profileChangetext}>{t('FD139')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const onPressRadio = (index: number) => {
    setActiveIndex(index)
  }

  const renderRadioView = () => {
    return (
      <>
        <Text style={styles.nameText}>{t('FD145')}</Text>
        <View style={styles.radioViewContainer}>
          {_.map(radioButtonsData, (i, index) => {
            const selected = activeIndex === index
            return (
              <TouchableOpacity onPress={() => onPressRadio(index)} style={styles.mainContainer}>
                <LinearGradient
                  style={styles.linearContainer}
                  start={{x: 0.3, y: 0}}
                  end={{x: 0.8, y: 1}}
                  locations={[0.1865, 0.8077]}
                  colors={
                    selected
                      ? [Color.pink_shade1, Color.red_shade1]
                      : [Color.transparent, Color.transparent]
                  }
                >
                  <Text style={[styles.btntext, !selected && styles.notSelectedbtntext]}>{i}</Text>
                </LinearGradient>
              </TouchableOpacity>
            )
          })}
        </View>
      </>
    )
  }

  const renderFields = () => {
    return (
      <>
        <TextFieldProfile
          keyboardType={'default'}
          title={t('FD140')}
          value={name}
          returnKeyType={'next'}
          onChangeText={setName}
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <TextFieldProfile
          keyboardType={'default'}
          editable={false}
          title={t('FD141')}
          value={username}
          returnKeyType={'next'}
          onChangeText={setUsername}
        />
        <Text style={styles.hintText}>
          {t('FD152')}
          <Text onPress={() => {}} style={styles.btnText}>
            {t('FD144')}
          </Text>
        </Text>
        <TextFieldProfile
          keyboardType={'default'}
          isMultiple
          title={t('FD142')}
          value={bio}
          onChangeText={setBio}
        />
        <Text style={styles.nameText}>{t('FD143')}</Text>
        <Text style={styles.hintText}>{t('FD153')}</Text>
        <TextFieldProfile
          keyboardType={'email-address'}
          title={t('FD11')}
          value={email}
          ref={emailRef}
          onSubmitEditing={() => phone1Ref.current?.focus()}
          returnKeyType={'next'}
          onChangeText={setEmail}
        />
        <TextFieldProfile
          keyboardType={'phone-pad'}
          title={t('FD12')}
          value={phoneNumber1}
          returnKeyType={'next'}
          ref={phone1Ref}
          onSubmitEditing={() => phone2Ref.current?.focus()}
          onChangeText={setPhoneNumber1}
        />
        <TextFieldProfile
          keyboardType={'phone-pad'}
          title={t('FD12')}
          value={phoneNumber2}
          ref={phone2Ref}
          returnKeyType={'done'}
          onChangeText={setPhoneNumber2}
        />
        {renderRadioView()}
      </>
    )
  }

  const renderBottomView = () => {
    return (
      <>
        <Text style={styles.similarAccountText}>{t('FD146')}</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.includeYourAccText}>{t('FD150')}</Text>
          <Switch
            onColor={Color.Primary}
            offColor={Color.black}
            isOn={isSwitch}
            onToggle={setIsSwitch}
          />
        </View>
        <AppButton
          gradientStyleContainer={styles.gradientStyleContainer}
          btnStyleContainer={styles.btnStyleContainer}
          title={t('FD154')}
          onPress={onPressSubmit}
        />
        <TouchableOpacity>
          <Text style={styles.disableText}>{t('FD151')}</Text>
        </TouchableOpacity>
      </>
    )
  }

  const renderForm = () => {
    return (
      <View>
        {renderProfileImageView()}
        {renderFields()}
        {renderBottomView()}
      </View>
    )
  }

  return (
    <AppContainer>
      <AppScrollView>
        <SettingHeader title={t('FD138')} />
        {renderForm()}
      </AppScrollView>
    </AppContainer>
  )
}

export default EditProfileScreen
