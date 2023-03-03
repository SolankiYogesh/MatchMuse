import React, {useState} from 'react'
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {t} from 'i18next'

import AnimatedImage from '../../../../Components/Animations/AnimatedImage'
import AppContainer from '../../../../Components/AppContainer'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {styles} from './DiscussionDetailsScreenStyle'

const DiscussionDetailsScreen = () => {
  const [liked, setLiked] = useState(false)
  const route: any = useRoute().params
  const navigation = useNavigation()
  const [comment, setComment] = useState('')
  const item = route?.item
  const renderHeader = () => {
    return (
      <ImageBackground
        source={Images.discussion_header_background}
        // style={styles.backImage}
        resizeMode={'cover'}
      >
        <View style={styles.rowHeaderView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backImage} resizeMode={'contain'} source={Images.leftArrow} />
          </TouchableOpacity>

          <AnimatedImage
            onPress={() => setLiked(!liked)}
            style={styles.bottomImages}
            source={liked ? Images.heart_fill : Images.heart}
          />
        </View>
        <Text style={styles.bigText}>{'Classroom Environment'}</Text>
        <View style={styles.profileView}>
          <Image
            source={{
              uri: item?.image
            }}
            style={styles.profileImage}
            resizeMode={'cover'}
          />
          <View>
            <Text style={styles.nameText}>{'Laxial Punch'}</Text>
            <Text style={styles.timeText}>{'Member since 11 june 2022'}</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }

  const renderBodyView = () => {
    return (
      <View style={styles.bodyView}>
        <Text style={styles.queText}>
          {'it has around a million congregational members worldwide with the towering majority?'}
        </Text>
        <Text style={styles.ansText}>
          {
            'No one has thought as long and hard about your study as you have. Systematically explain the meaning of the findings and why you believe they are important. After reading the discussion section, you want the reader to think about the results [“why hadn’t I thought of that?”]. You don’t want to force the reader to go through the paper multiple times to figure out what it all means. Begin this part of the section by repeating what you consider to be your most important finding first.'
          }
        </Text>
      </View>
    )
  }

  const renderCommentInputView = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.headerMainImageContainer}>
          <Image
            borderRadius={moderateScale(5)}
            resizeMode={'cover'}
            source={{uri: item?.image}}
            style={styles.profileImage1}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder={String(t('FD289'))}
            placeholderTextColor={Color.grey_Shade2}
            onChangeText={setComment}
            value={comment}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => {}}>
            <Image source={Images.send} resizeMode={'contain'} style={styles.sendBtnImage} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <AppContainer style={CommonStyles.flex}>
      {renderHeader()}
      {renderBodyView()}
      {renderCommentInputView()}
    </AppContainer>
  )
}

export default DiscussionDetailsScreen
