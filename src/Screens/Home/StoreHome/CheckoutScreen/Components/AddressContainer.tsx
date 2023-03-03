import React, {useCallback} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {t} from 'i18next'

import {CommonStyles, Images} from '../../../../../Helpers'
import {styles} from '../CheckoutScreenStyle'

const AddressContainer = () => {
  const renderLabel = useCallback((label: string) => {
    return <Text style={styles.labeltext}>{label}</Text>
  }, [])
  return (
    <View style={styles.addressCotainer}>
      {renderLabel(t('FD355'))}
      <View style={CommonStyles.row}>
        <View style={CommonStyles.row}>
          <View style={styles.imageLocBack}>
            <Image
              style={styles.locationImage}
              source={Images.location_line}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.addressTextCotainer}>
            <Text style={styles.addressText}>{'Grosse Praesidenten Str. 94'}</Text>
            <Text style={styles.textContainer}>{'74746 Hopfingen'}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.leftImageBack}>
          <Image source={Images.rightArrow} style={styles.imageLeft} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddressContainer
