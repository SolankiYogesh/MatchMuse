import React, {useCallback, useMemo, useRef, useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import {StackActions, useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'
import ToggleSwitch from 'toggle-switch-react-native'

import AppButton from '../../../../Components/AppButton'
import AppContainer from '../../../../Components/AppContainer'
import AppScrollView from '../../../../Components/AppScrollView'
import SettingHeader from '../../../../Components/SettingHeader'
import {Color, Images, Utility} from '../../../../Helpers'
import PaymentSelector from '../../StoreHome/CheckoutScreen/Components/PaymentSelector'
import {styles} from './PaymentScreenStyle'

const PaymentScreen = () => {
  const navigation = useNavigation()
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const [expireDate, setExpiredate] = useState('')
  const [Cvv, setCvv] = useState('')
  const [email, setEmail] = useState('')
  const cardHolderRef = useRef<TextInput>(null)
  const cardExpireDateRef = useRef<TextInput>(null)
  const cardCvvRef = useRef<TextInput>(null)
  const cardEmailRef = useRef<TextInput>(null)
  const [isSaveCard, setISSaveCard] = useState(false)

  const onPressPay = () => {
    if (!_.trim(cardNumber)) {
      Utility.showToast(t('FD437'))
      return
    }
    if (!_.trim(cardHolderName)) {
      Utility.showToast(t('FD442'))
      return
    }
    if (!_.trim(expireDate)) {
      Utility.showToast(t('FD451'))
      return
    }
    if (!_.trim(Cvv)) {
      Utility.showToast(t('FD450'))
      return
    }
    if (!_.trim(email)) {
      Utility.showToast(t('FD16'))
      return
    }

    navigation.dispatch(StackActions.popToTop())
  }

  const renderLabel = useCallback((label: string) => {
    return <Text style={styles.labeltext}>{label}</Text>
  }, [])

  const renderPaymentMethod = useMemo(() => {
    return (
      <View style={styles.addressCotainer}>
        {renderLabel(t('FD356'))}
        <PaymentSelector />
      </View>
    )
  }, [])

  const renderButton = useMemo(() => {
    return (
      <View style={styles.buttnContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.totalText}>{t('FD361')}</Text>
          <Text style={styles.priceText}>{'€ 00'}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.totalText}>{t('FD448')}</Text>
          <Text style={styles.priceText}>{'-'}</Text>
        </View>
        <AppButton
          onPress={onPressPay}
          title={t('FD362')}
          gradientStyleContainer={styles.gradientStyleContainer}
        />
        <Text style={[styles.labelStyle, styles.btnText]}>{t('FD449')}</Text>
      </View>
    )
  }, [])

  const renderNewMapView = useMemo(() => {
    return (
      <View style={styles.addressCotainer}>
        {renderLabel(t('FD435'))}
        <Text style={styles.labelStyle}>{t('FD436')}</Text>
        <TextInput
          placeholder={String(t('FD437'))}
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
          onSubmitEditing={() => cardHolderRef.current?.focus()}
          keyboardType={'number-pad'}
        />
        <Text style={styles.labelStyle}>{t('FD438')}</Text>
        <TextInput
          onSubmitEditing={() => cardExpireDateRef.current?.focus()}
          ref={cardHolderRef}
          value={cardHolderName}
          onChangeText={setCardHolderName}
          placeholder={String(t('FD442'))}
          style={styles.input}
          keyboardType={'default'}
        />

        <View style={styles.cvvContainer}>
          <View style={styles.cvvViewContainer}>
            <Text style={styles.labelStyle}>{t('FD439')}</Text>
            <TextInput
              style={styles.input}
              value={expireDate}
              onChangeText={setExpiredate}
              placeholder={String(t('FD443'))}
              onSubmitEditing={() => cardCvvRef.current?.focus()}
              keyboardType={'number-pad'}
              maxLength={5}
              ref={cardExpireDateRef}
            />
          </View>

          <View style={styles.Expirycontainer}>
            <Text style={styles.labelStyle}>{t('FD440')}</Text>
            <TextInput
              style={styles.input}
              ref={cardCvvRef}
              value={Cvv}
              onChangeText={setCvv}
              placeholder={String(t('FD444'))}
              keyboardType={'number-pad'}
              onSubmitEditing={() => cardEmailRef.current?.focus()}
              maxLength={3}
            />
          </View>
        </View>

        <Text style={styles.labelStyle}>{t('FD441')}</Text>
        <TextInput
          placeholder={String(t('FD445'))}
          style={styles.input}
          ref={cardEmailRef}
          value={email}
          onChangeText={setEmail}
          keyboardType={'email-address'}
        />
        <View style={styles.switchView}>
          <View style={styles.textContainer}>
            <Text style={styles.topText}>{t('FD446')}</Text>
            <Text style={styles.bottomText}>{t('FD447')}</Text>
          </View>
          <ToggleSwitch
            isOn={isSaveCard}
            onToggle={setISSaveCard}
            onColor={Color.Primary}
            offColor={Color.black}
          />
        </View>
      </View>
    )
  }, [isSaveCard, email, cardHolderName, cardNumber, Cvv, expireDate])

  return (
    <AppContainer isEdgeContainer>
      <SettingHeader
        isTransparent
        title={t('FD159')}
        otherIcon={Images.vertical_menu}
        isShadow={false}
      />
      <AppScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderPaymentMethod}

        {renderNewMapView}
        {renderButton}
      </AppScrollView>
    </AppContainer>
  )
}

export default PaymentScreen
