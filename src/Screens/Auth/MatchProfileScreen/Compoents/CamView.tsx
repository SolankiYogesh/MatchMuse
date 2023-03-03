import React, {useState} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import {createThumbnail} from 'react-native-create-thumbnail'
import ImageCropPicker from 'react-native-image-crop-picker'
import LinearGradient from 'react-native-linear-gradient'

import AppLoadingImage from '../../../../Components/AppLoadingImage'
import {POSTGIRLS} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images, Permission, Utility} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {styles} from '../MatchProfileScreenStyle'
import {MathProfileTabViewProps} from './MathProfileTabView'

const videoData = [
  {
    index: 0,
    imageUri: '',
    videoUri: ''
  },
  {
    index: 1,
    imageUri: '',
    videoUri: ''
  },
  {
    index: 2,
    imageUri: '',
    videoUri: ''
  }
]

const CamView = ({isAccount = false}: MathProfileTabViewProps) => {
  const [videoResp, setVideoResp] = useState(videoData)

  const StateUpdate = (i: number, imageUri: string, videoUri: string) => {
    const data = Utility.deepClone(videoResp)
    data[i] = {imageUri, videoUri}

    setVideoResp(data)
  }

  const renderItem = (item: any) => {
    return (
      <>
        {/* <Image
          source={{
            uri: item.item
          }}
          style={styles.postVideo}
          resizeMode={'cover'}
        /> */}
        <AppLoadingImage url={item.item} style={styles.postVideo} />
        <View style={styles.playBtnContainer}>
          <TouchableOpacity>
            <Image source={Images.play} resizeMode={'contain'} style={styles.playImages} />
          </TouchableOpacity>
          <Text style={styles.countText}>{'00'}</Text>
        </View>
      </>
    )
  }

  const renderPostList = () => {
    return (
      <FlatList
        data={POSTGIRLS}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        nestedScrollEnabled
        contentContainerStyle={styles.listContainer}
      />
    )
  }

  const generateImage = async (index: number) => {
    const isStorage = await Permission.getStoragePermission()
    if (isStorage) {
      ImageCropPicker.openPicker({
        // cropping: true,
        includeBase64: true,
        mediaType: 'video',
        minFiles: 1,
        maxFiles: 1,
        multiple: false
      })
        .then((media) => {
          createThumbnail({
            url: media?.path,
            timeStamp: 1000,
            format: 'jpeg',
            dirSize: 50,
            cacheName: `${Date.now()}+VideoCatcheImage`
          })
            .then((response) => {
              StateUpdate(index, response.path, media.path)
            })
            .catch((err) => {
              StateUpdate(index, '', media.path)
            })
        })
        .catch(() => {
          StateUpdate(index, '', '')
        })
    }
  }

  const renderVideoButton = () => {
    return (
      <View style={styles.gridCotianer}>
        <TouchableOpacity style={styles.touchableContainer} onPress={() => generateImage(0)}>
          {!videoResp[0]?.imageUri ? (
            <LinearGradient
              start={{x: 0.3, y: 0}}
              end={{x: 0.8, y: 1}}
              locations={[0.1865, 0.8077]}
              colors={[Color.pink_shade1, Color.red_shade1]}
              style={styles.tabIconBack}
            >
              <Image source={Images.plus} style={[styles.tabImage, styles.tintColorWhite]} />
            </LinearGradient>
          ) : (
            <Image
              source={{
                uri: videoResp[0]?.imageUri
              }}
              borderRadius={moderateScale(20)}
              style={styles.smallImageContainer}
              resizeMode={'cover'}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableContainer} onPress={() => generateImage(1)}>
          {!videoResp[1]?.imageUri ? (
            <LinearGradient
              start={{x: 0.3, y: 0}}
              end={{x: 0.8, y: 1}}
              locations={[0.1865, 0.8077]}
              colors={[Color.pink_shade1, Color.red_shade1]}
              style={styles.tabIconBack}
            >
              <Image source={Images.plus} style={[styles.tabImage, styles.tintColorWhite]} />
            </LinearGradient>
          ) : (
            <Image
              source={{
                uri: videoResp[1]?.imageUri
              }}
              borderRadius={moderateScale(20)}
              style={styles.smallImageContainer}
              resizeMode={'cover'}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableContainer} onPress={() => generateImage(2)}>
          {!videoResp[2]?.imageUri ? (
            <LinearGradient
              start={{x: 0.3, y: 0}}
              end={{x: 0.8, y: 1}}
              locations={[0.1865, 0.8077]}
              colors={[Color.pink_shade1, Color.red_shade1]}
              style={styles.tabIconBack}
            >
              <Image source={Images.plus} style={[styles.tabImage, styles.tintColorWhite]} />
            </LinearGradient>
          ) : (
            <Image
              source={{
                uri: videoResp[2]?.imageUri
              }}
              borderRadius={moderateScale(20)}
              style={styles.smallImageContainer}
              resizeMode={'cover'}
            />
          )}
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={CommonStyles.fullView}>{isAccount ? renderPostList() : renderVideoButton()}</View>
  )
}

export default CamView
