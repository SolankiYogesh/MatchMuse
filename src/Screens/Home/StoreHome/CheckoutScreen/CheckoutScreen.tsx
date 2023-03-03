import React, {useCallback, useMemo} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'

import AppButton from '../../../../Components/AppButton'
import AppContainer from '../../../../Components/AppContainer'
import SettingHeader from '../../../../Components/SettingHeader'
import {CommonStyles, Images, Screen} from '../../../../Helpers'
import {styles} from './CheckoutScreenStyle'
import AddressContainer from './Components/AddressContainer'
import CartItemsList from './Components/CartItemsList'
import PaymentSelector from './Components/PaymentSelector'

const CheckoutScreen = () => {
  const navigation: any = useNavigation()

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

  const renderMyCard = useMemo(() => {
    return (
      <View>
        <TouchableOpacity
          style={styles.labelContainer}
          onPress={() => navigation.navigate(Screen.CartItemsScreen)}
        >
          <View style={CommonStyles.row}>
            <Text style={styles.labelCart}>{t('FD360')}</Text>
            <Text style={styles.cartCountTetx}>{`(02)`}</Text>
          </View>
          <Image source={Images.rightArrow} style={styles.imageLeft} resizeMode={'contain'} />
        </TouchableOpacity>
        <CartItemsList />
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
        <AppButton
          onPress={() => navigation.goBack()}
          title={t('FD362')}
          gradientStyleContainer={styles.gradientStyleContainer}
        />
      </View>
    )
  }, [])

  return (
    <AppContainer>
      <SettingHeader title={t('FD354')} otherIcon={Images.vertical_menu} isShadow={false} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <AddressContainer />
        {renderPaymentMethod}
        {renderMyCard}
        {renderButton}
      </ScrollView>
    </AppContainer>
  )
}

export default CheckoutScreen
