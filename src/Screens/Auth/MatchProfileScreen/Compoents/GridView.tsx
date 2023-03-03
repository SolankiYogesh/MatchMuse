import React, {useState} from 'react'
import {FlatList, Image, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import AppLoadingImage from '../../../../Components/AppLoadingImage'
import MediaPicker from '../../../../Components/MediaPicker'
import {POSTGIRLS} from '../../../../DummyData/MatchingProfileFeeds'
import {Color, CommonStyles, Images} from '../../../../Helpers'
import {moderateScale} from '../../../../Helpers/Responsive'
import {styles} from '../MatchProfileScreenStyle'
import {MathProfileTabViewProps} from './MathProfileTabView'

const GridView = ({isAccount = false}: MathProfileTabViewProps) => {
  const [isFirstPicker, setISFirstPicker] = useState({
    isPicker: false,
    uri: ''
  })
  const [isSecondPicker, setISSecondPicker] = useState({
    isPicker: false,
    uri: ''
  })

  const renderButtons = () => {
    return (
      <View style={styles.gridCotianer}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() =>
            setISFirstPicker({
              isPicker: true,
              uri: isFirstPicker.uri
            })
          }
        >
          {!isFirstPicker?.uri ? (
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
                uri: isFirstPicker?.uri
              }}
              borderRadius={moderateScale(20)}
              style={styles.smallImageContainer}
              resizeMode={'cover'}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setISSecondPicker({
              isPicker: true,
              uri: isSecondPicker.uri
            })
          }
          style={styles.touchableContainer}
        >
          {!isSecondPicker?.uri ? (
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
                uri: isSecondPicker?.uri
              }}
              borderRadius={moderateScale(20)}
              style={styles.smallImageContainer}
              resizeMode={'cover'}
            />
          )}
        </TouchableOpacity>
        {isFirstPicker.isPicker && (
          <MediaPicker
            onClose={() =>
              setISFirstPicker({
                isPicker: false,
                uri: isFirstPicker.uri
              })
            }
            onPickImage={(image) => {
              setISFirstPicker({
                isPicker: false,
                uri: image.path
              })
            }}
            isVisible={isFirstPicker.isPicker}
          />
        )}
        {isSecondPicker.isPicker && (
          <MediaPicker
            onClose={() =>
              setISSecondPicker({
                isPicker: false,
                uri: isSecondPicker.uri
              })
            }
            onPickImage={(image) => {
              setISSecondPicker({
                isPicker: false,
                uri: image.path
              })
            }}
            isVisible={isSecondPicker.isPicker}
          />
        )}
      </View>
    )
  }

  const renderItem = (item: any) => {
    return <AppLoadingImage url={item.item} style={styles.postImage} />
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

  return <View style={CommonStyles.fullView}>{isAccount ? renderPostList() : renderButtons()}</View>
}

export default GridView
