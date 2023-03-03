import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {Color, CommonStyles, Fonts, Images} from '../Helpers'
import {getStatusBarHeight, moderateScale, scale, verticalScale} from '../Helpers/Responsive'

interface SettingHeaderProps {
  title?: string | undefined | null
  isLogo?: boolean
  isCloseIcon?: boolean
  isShadow?: boolean
  isTransparent?: boolean
  style?: StyleProp<ViewStyle>
  otherIcon?: ImageSourcePropType
  onBackFunction?: () => void
}

const statusbarheight = getStatusBarHeight()

const SettingHeader = ({
  title = '',
  isShadow = true,
  isCloseIcon = false,
  isLogo = false,
  isTransparent = false,
  style = {},
  otherIcon = undefined,
  onBackFunction
}: SettingHeaderProps) => {
  const navigation = useNavigation()

  return (
    <View
      style={[
        styles.headerContainer,
        isTransparent && styles.transparentback,
        isShadow && {...CommonStyles.shadow, paddingTop: statusbarheight / 1.8},
        style
      ]}
    >
      <View style={CommonStyles.row}>
        <TouchableOpacity
          onPress={() => {
            if (onBackFunction) {
              onBackFunction()
            } else {
              navigation.goBack()
            }
          }}
        >
          <Image
            style={isCloseIcon ? styles.closeImage : styles.backImage}
            resizeMode={'contain'}
            source={isCloseIcon ? Images.close : Images.leftArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {otherIcon && (
        <TouchableOpacity>
          <Image source={otherIcon} style={styles.closeImage} resizeMode={'contain'} />
        </TouchableOpacity>
      )}
      {isLogo && (
        <Image source={Images.fyerdates_logo} style={styles.backImage} resizeMode={'contain'} />
      )}
    </View>
  )
}

export default SettingHeader

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    ...CommonStyles.row,

    backgroundColor: Color.white,
    padding: scale(15),
    paddingVertical: verticalScale(20),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    justifyContent: 'space-between'
  },
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  closeImage: {
    width: verticalScale(20),
    height: verticalScale(20)
  },
  headerTitle: {
    fontSize: moderateScale(18),
    color: Color.black,
    fontFamily: Fonts.semi_bold,
    marginLeft: scale(15)
  },
  transparentback: {
    backgroundColor: Color.transparent
  }
})
