import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import AppProfileImage from '../../../../../Components/AppProfileImage'
import {Color, CommonStyles, Fonts, Images} from '../../../../../Helpers'
import {moderateScale, scale, verticalScale} from '../../../../../Helpers/Responsive'
import BlockChatUserModal from './BlockChatUserModal'

interface InvitationHeaderProps {
  item?: any
}
const InvitationHeader = ({item}: InvitationHeaderProps) => {
  const navigation = useNavigation()
  const [isBlockModal, setISBlockModal] = useState(false)
  return (
    <>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
        </TouchableOpacity>
        <View>
          <AppProfileImage url={item?.image} />
        </View>
        <TouchableOpacity onPress={() => setISBlockModal(true)}>
          <Image style={styles.backImage} resizeMode={'contain'} source={Images.circle_menu} />
        </TouchableOpacity>
      </View>
      <Text style={styles.nameText}>{item?.name}</Text>
      {isBlockModal && <BlockChatUserModal item={item} onClose={() => setISBlockModal(false)} />}
    </>
  )
}

export default InvitationHeader

const styles = StyleSheet.create({
  backImage: {
    width: verticalScale(30),
    height: verticalScale(30)
  },
  headerView: {
    ...CommonStyles.row,
    justifyContent: 'space-between',
    marginHorizontal: scale(15),
    backgroundColor: Color.offWhite,
    paddingVertical: verticalScale(5)
  },
  nameText: {
    textAlign: 'center',
    marginTop: verticalScale(5),
    fontSize: moderateScale(15),
    fontFamily: Fonts.semi_bold,
    color: Color.black
  }
})
