import React, {useMemo, useRef, useState} from 'react'
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {BlurView} from '@react-native-community/blur'
import moment from 'moment'

import AnimatedImageViewer from '../../../../../Components/Animations/AnimatedImageViewer'
import AppButtonWithIcon from '../../../../../Components/AppButtonWithIcon'
import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'

const ShotsItem = ({item}: any) => {
  const ref = useRef<TouchableOpacity>(null)
  const [itemData, setItemData] = useState<any>(null)
  const onPress = () => {
    ref.current?.measureInWindow((x, y, width, height) => {
      setItemData({
        x,
        y,
        width,
        height
      })
    })
  }
  const renderType = useMemo(() => {
    return (
      <AppButtonWithIcon
        imageStyle={styles.imageStyle}
        style={styles.imageContainer}
        image={item?.isImage ? Images.camera : Images.video}
        containerStyle={styles.containerStyle}
      />
    )
  }, [])

  return (
    <TouchableOpacity ref={ref} style={styles.mainContainer} onPress={onPress}>
      <ImageBackground
        source={{
          uri: item?.shot
        }}
        style={styles.itemContainer}
      >
        <BlurView
          blurType={'light'}
          blurAmount={3}
          reducedTransparencyFallbackColor={'white'}
          style={styles.absoluteBlur}
        >
          {renderType}
          <View>
            <AppProfileImage borderWidth={3.5} url={item?.profile} />
            <Text style={styles.nameText}>{item?.name}</Text>
          </View>
          <Text style={styles.dateText}>{moment(item?.time).format('MMMM DD YYYY, hh:mm')}</Text>
        </BlurView>
      </ImageBackground>
      {itemData && (
        <AnimatedImageViewer
          onClose={() => setItemData(null)}
          url={item?.shot}
          itemData={itemData}
        />
      )}
    </TouchableOpacity>
  )
}

export default ShotsItem

const styles = StyleSheet.create({
  itemContainer: {
    ...CommonStyles.centerItem,

    flex: 1,
    borderRadius: moderateScale(20),
    height: verticalScale(180),
    overflow: 'hidden'
  },
  nameText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    marginVertical: verticalScale(10)
  },
  absoluteBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    ...CommonStyles.centerItem
  },
  dateText: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.semi_bold,
    color: Color.white,
    position: 'absolute',
    bottom: verticalScale(5)
  },
  imageContainer: {
    position: 'absolute',
    top: verticalScale(15),
    left: scale(15)
  },
  imageStyle: {
    height: verticalScale(10),
    width: verticalScale(10),
    tintColor: Color.white
  },
  containerStyle: {
    borderRadius: moderateScale(5),
    padding: scale(5),
    paddingHorizontal: scale(10)
  },
  mainContainer: {
    margin: scale(10),
    flex: 1
  }
})
