import React, {useRef, useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Slider} from '@miblanchard/react-native-slider'
import {t} from 'i18next'
import _ from 'lodash'

import AppButton from '../../../../Components/AppButton'
import AppScrollView from '../../../../Components/AppScrollView'
import BODInput from '../../../../Components/BODInput'
import InputText from '../../../../Components/InputText'
import RadioButton from '../../../../Components/RadioButton'
import {Color, Utility} from '../../../../Helpers'
import {setUserData} from '../../../../Store/Reducers/UserSlice'
import {styles} from '../UserDetailsScreenStyle'

const genderData = [t('FD40'), t('FD41'), t('FD42')]
const interestData = [t('FD45'), t('FD41'), t('FD42')]
const relationData = [t('FD49'), t('FD46'), t('FD47')]

interface AboutYouViewProps {
  onIndexChange?: (index: number) => void
}

const AboutYouView = (props: AboutYouViewProps) => {
  const user = useSelector((state: any) => state?.user?.user)
  const [sliderValude, setSliderValue] = useState([user?.height || 0])
  const [name, setName] = useState(user?.name || '')
  const [bod, setBod] = useState(user?.bod || '')
  const [gender, setGender] = useState(user?.gender || '')
  const [interest, setInterest] = useState(user?.interestGender || '')
  const [relation, setRelation] = useState(user?.relationStatus || '')
  const bodRef = useRef<TextInput>()
  const {onIndexChange} = props
  const dispatch = useDispatch()

  const onPressContinue = () => {
    if (!_.trim(name)) {
      Utility.showToast(t('FD51'))
      return
    }
    if (!_.trim(bod)) {
      Utility.showToast(t('FD52'))
      return
    }

    const validateDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
    if (!validateDate.test(bod)) {
      Utility.showToast(t('FD57'))
      return
    }

    if (!_.trim(gender)) {
      Utility.showToast(t('FD53'))
      return
    }
    if (!(sliderValude[0] > 50)) {
      Utility.showToast(t('FD54'))
      return
    }
    if (!_.trim(interest)) {
      Utility.showToast(t('FD55'))
      return
    }
    if (!_.trim(relation)) {
      Utility.showToast(t('FD56'))
      return
    }
    dispatch(
      setUserData({
        name,
        bod,
        gender,
        height: sliderValude[0],
        interestGender: interest,
        relationStatus: relation,
        isFirstComplete: true
      })
    )
    if (onIndexChange) onIndexChange(2)
  }

  const onSeekerChange = (e: any) => {
    setSliderValue(e)
  }

  return (
    <View style={styles.innerView}>
      <AppScrollView>
        <AppButton
          gradientStyleContainer={styles.gradientStyleContainer}
          title={t('FD32')}
          disable
        />
        <Text style={styles.queText}>{t('FD33')}</Text>
        <InputText
          selectionColor={Color.Primary}
          style={styles.input}
          inputStyles={styles.inputStyles}
          placeHolderCustom={t('FD34')}
          onChangeText={setName}
          value={name}
          keyboardType={'default'}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            bodRef.current?.focus()
          }}
        />
        <Text style={styles.queText}>{t('FD35')}</Text>
        <BODInput value={user?.bod || bod} ref={bodRef} onChangeDate={setBod} />
        <Text style={styles.queText}>{t('FD39')}</Text>
        <RadioButton value={user?.gender || gender} data={genderData} onSelect={setGender} />

        <Text style={styles.queText}>{t('FD43')}</Text>
        <Slider
          step={1}
          value={sliderValude}
          minimumValue={0}
          animationType={'timing'}
          maximumValue={300}
          onValueChange={onSeekerChange}
          thumbStyle={styles.markerStyle}
          trackStyle={styles.trackStyle}
          minimumTrackTintColor={Color.Primary}
          containerStyle={styles.sliceContainer}
        />
        <Text style={styles.sliderText}>{sliderValude[0]}</Text>

        <Text style={styles.queText}>{t('FD44')}</Text>
        <RadioButton
          value={user?.interestGender || interest}
          data={interestData}
          onSelect={setInterest}
        />
        <Text style={styles.queText}>{t('FD48')}</Text>
        <RadioButton
          value={user?.relationStatus || relation}
          data={relationData}
          onSelect={setRelation}
        />
        <AppButton
          title={t('FD50')}
          btnStyleContainer={styles.btnContainer}
          btnTextStyle={styles.btnTextStyle}
          onPress={onPressContinue}
          gradientStyleContainer={styles.gradientStyleContainer}
        />
      </AppScrollView>
    </View>
  )
}

export default AboutYouView
