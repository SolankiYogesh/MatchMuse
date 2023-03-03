import React, {useState} from 'react'
import {Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {t} from 'i18next'
import _ from 'lodash'

import AppButton from '../../../../Components/AppButton'
import AppInputTypeButton from '../../../../Components/AppInputTypeButton'
import AppScrollView from '../../../../Components/AppScrollView'
import ChildrenPicker from '../../../../Components/Modals/ChildrenPicker'
import EducationPicker from '../../../../Components/Modals/EducationPicker'
import LanguagePicker from '../../../../Components/Modals/LanguagePicker'
import LivingPlacePicker from '../../../../Components/Modals/LivingPlacePicker'
import MapLocationPicker from '../../../../Components/Modals/MapLocationPicker'
import SmokingDataPicker from '../../../../Components/Modals/SmokingDataPicker'
import {Images, Utility} from '../../../../Helpers'
import {setUserData} from '../../../../Store/Reducers/UserSlice'
import {styles} from '../UserDetailsScreenStyle'

interface MoreAboutYouViewProps {
  onIndexChange?: (index: number) => void
}

const MoreAboutYouView = (props: MoreAboutYouViewProps) => {
  const user = useSelector((state: any) => state?.user?.user)

  const [isMapPicker, setISMapPicker] = useState(false)
  const [location, setLocation] = useState('')
  const [isLangPicker, setISlangPicker] = useState(false)
  const [language, setLaunuage] = useState(user?.language || '')
  const [isChildrenPicker, setISChildrenPicker] = useState(false)
  const [childrenCount, setChildrenCount] = useState(user?.childrenCount || null)
  const [isEduPicker, setISEduPicker] = useState(false)
  const [education, setEducation] = useState(user?.education || '')
  const [isPlacePciker, setIsPlacePciker] = useState(false)
  const [livingPlace, setLivingPlace] = useState(user?.livingPlace || '')
  const [isSmokingPicker, setISSmokingPicker] = useState(false)
  const [smoking, setSmoking] = useState(user?.smokingStatus || '')
  const {onIndexChange} = props
  const dispatch = useDispatch()

  const onPressContinue = () => {
    if (!_.trim(location)) {
      Utility.showToast(t('FD105'))
      return
    }
    if (!_.trim(language)) {
      Utility.showToast(t('FD106'))
      return
    }
    if (childrenCount === null) {
      Utility.showToast(t('FD107'))
      return
    }
    if (!_.trim(education)) {
      Utility.showToast(t('FD108'))
      return
    }
    if (!_.trim(livingPlace)) {
      Utility.showToast(t('FD109'))
      return
    }
    if (!_.trim(smoking)) {
      Utility.showToast(t('FD110'))
      return
    }
    dispatch(
      setUserData({
        residence: location,
        language,
        education,
        childrenCount: childrenCount || 0,
        livingPlace,
        smokingStatus: smoking,
        isSecondComplete: true
      })
    )
    if (onIndexChange) onIndexChange(3)
  }
  return (
    <View style={styles.innerView}>
      <AppScrollView style={styles.innerScrollView}>
        <AppButton
          gradientStyleContainer={styles.gradientStyleContainer}
          title={t('FD70')}
          disable
        />
        <Text style={styles.queText}>{t('FD69')}</Text>
        <AppInputTypeButton
          title={location && location !== 'later' ? location : t('FD58')}
          onPress={() => setISMapPicker(true)}
        />
        <Text style={styles.queText}>{t('FD68')}</Text>
        <AppInputTypeButton
          onPress={() => setISlangPicker(true)}
          image={Images.rightArrow}
          title={language || t('FD59')}
        />
        <Text style={styles.queText}>{t('FD67')}</Text>
        <AppInputTypeButton
          onPress={() => setISChildrenPicker(true)}
          image={Images.rightArrow}
          title={childrenCount === null ? t('FD60') : childrenCount === 0 ? 0 : childrenCount}
        />
        <Text style={styles.queText}>{t('FD66')}</Text>
        <AppInputTypeButton
          onPress={() => setISEduPicker(true)}
          image={Images.rightArrow}
          title={education || t('FD61')}
        />
        <Text style={styles.queText}>{t('FD65')}</Text>
        <AppInputTypeButton
          onPress={() => setIsPlacePciker(true)}
          image={Images.rightArrow}
          title={livingPlace || t('FD62')}
        />
        <Text style={styles.queText}>{t('FD64')}</Text>
        <AppInputTypeButton
          onPress={() => setISSmokingPicker(true)}
          image={Images.rightArrow}
          title={smoking || t('FD63')}
        />
        <AppButton
          title={t('FD50')}
          btnStyleContainer={styles.btnContainer}
          btnTextStyle={styles.btnTextStyle}
          onPress={onPressContinue}
          gradientStyleContainer={styles.gradientStyleContainer}
        />
      </AppScrollView>
      {isMapPicker && (
        <MapLocationPicker
          onPickLocation={(value) => setLocation(value)}
          onClose={() => setISMapPicker(false)}
        />
      )}
      {isLangPicker && (
        <LanguagePicker
          value={language}
          onPickLanguage={setLaunuage}
          onClose={() => setISlangPicker(false)}
        />
      )}
      {isChildrenPicker && (
        <ChildrenPicker
          onPickChildrenCount={setChildrenCount}
          onClose={() => setISChildrenPicker(false)}
          value={childrenCount}
        />
      )}
      {isEduPicker && (
        <EducationPicker
          value={education}
          onEducationPick={setEducation}
          onClose={() => setISEduPicker(false)}
        />
      )}
      {isPlacePciker && (
        <LivingPlacePicker
          value={livingPlace}
          onPlacePick={setLivingPlace}
          onClose={() => setIsPlacePciker(false)}
        />
      )}
      {isSmokingPicker && (
        <SmokingDataPicker
          value={smoking}
          onSmokePick={setSmoking}
          onClose={() => setISSmokingPicker(false)}
        />
      )}
    </View>
  )
}

export default MoreAboutYouView
