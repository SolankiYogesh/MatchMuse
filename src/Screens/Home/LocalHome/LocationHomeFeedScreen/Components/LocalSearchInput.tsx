import React, {useEffect} from 'react'
import {Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {t} from 'i18next'

import {Color, CommonStyles, Images} from '../../../../../Helpers'
import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

interface LocalSearchInputProps {
  onChangeText?: (textL: string) => void
  value?: string
  onChangeState?: (value: boolean) => void
  isEnabled?: boolean
  onPress?: () => void
}

const LocalSearchInput = (props: LocalSearchInputProps) => {
  const {
    value = '',
    onPress = () => {},
    onChangeText = () => {},
    onChangeState = () => {},
    isEnabled = false
  } = props

  useEffect(() => {
    onChangeState(isEnabled)
  }, [isEnabled])

  return (
    <TouchableOpacity style={styles.container} disabled={isEnabled} onPress={onPress}>
      <Image source={Images.search} style={styles.searcImage} resizeMode={'contain'} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={String(t('FD267'))}
        placeholderTextColor={Color.darkGrey}
        editable={isEnabled}
        selectionColor={Color.Primary}
        style={styles.input}
      />
    </TouchableOpacity>
  )
}

export default LocalSearchInput

const styles = StyleSheet.create({
  searcImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    marginRight: scale(10),
    tintColor: Color.darkGrey
  },
  container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: Color.white,
    borderRadius: moderateScale(20),
    ...CommonStyles.row,
    marginVertical: verticalScale(10),
    paddingHorizontal: scale(15),
    height: INPUT_HEIGHT
  },
  input: {
    flex: 1
  }
})
