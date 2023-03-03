import React, {forwardRef} from 'react'
import {StyleSheet} from 'react-native'
import DateField from 'react-native-datefield'
import {t} from 'i18next'
import moment from 'moment'

import {Color, CommonStyles} from '../Helpers'
import {INPUT_HEIGHT, moderateScale, scale} from '../Helpers/Responsive'

interface BODInputProps {
  onChangeDate?: (date: string) => void
  value?: string
}

const BODInput = forwardRef((props: BODInputProps, ref: any) => {
  return (
    <DateField
      styleInput={styles.input}
      labelDate={String(t('FD36'))}
      labelMonth={String(t('FD37'))}
      labelYear={String(t('FD38'))}
      placeholderTextColor={Color.darkGrey}
      containerStyle={styles.container}
      onSubmit={(date: Date) => {
        if (props?.onChangeDate) {
          props?.onChangeDate(moment(new Date(date)).format('DD/MM/YYYY'))
        }
      }}
    />
  )
})

export default BODInput

const styles = StyleSheet.create({
  input: {
    width: '30%',
    height: INPUT_HEIGHT,
    borderRadius: moderateScale(15),
    ...CommonStyles.shadow,
    backgroundColor: Color.white
  },
  container: {
    padding: scale(5)
  }
})
