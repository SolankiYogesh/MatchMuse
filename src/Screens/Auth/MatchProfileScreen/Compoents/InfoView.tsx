import React, {useState} from 'react'
import {ScrollView, Text, TextInput, View} from 'react-native'
import {t} from 'i18next'

import {Color, CommonStyles} from '../../../../Helpers'
import {styles} from '../MatchProfileScreenStyle'
import {MathProfileTabViewProps} from './MathProfileTabView'

const InfoView = ({isAccount = false}: MathProfileTabViewProps) => {
  const [bio, setBio] = useState('')

  const renderInputView = () => {
    return (
      <View style={CommonStyles.flex}>
        <Text style={styles.biotext}>{t('FD123')}</Text>
        <View style={styles.textContainer}>
          <TextInput
            onChangeText={setBio}
            value={bio}
            multiline
            textAlignVertical={'top'}
            placeholder={String(t('FD124'))}
            numberOfLines={9}
            selectionColor={Color.Primary}
            style={styles.input}
          />
        </View>
      </View>
    )
  }

  const rendertextView = () => {
    return (
      <ScrollView nestedScrollEnabled contentContainerStyle={styles.infotextContainer}>
        <Text style={styles.infotextBig}>{'Rosa Buss (23)'}</Text>
        <Text style={styles.infotextParagraph}>
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
          }
          {
            "been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
          }
          {
            'a galley of type and scrambled it to make a type specimen book. It has survived not only'
          }
          {'five centuries, but also the leap into electronic typesetting, remaining essentially'}
          {
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
          }
          {'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus'}
          {
            'PageMaker including versions of Lorem Ipsum It is a long established fact that a reader'
          }
          {
            'will be distracted by the readable content of a page when looking at its layout. The point'
          }
          {'of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as'}
          {
            "opposed to using 'Content here, content here', making it look like readable English. Many"
          }
          {'desktop publishing packages and web page editors now use Lorem Ipsum as their default'}
          {"model text, and a search for 'lorem ipsum' will uncover many web sites still in their"}
          {
            'infancy. Various versions have evolved over the years, sometimes by accident, sometimes on'
          }
          {'purpose (injected humour and the like).'}
        </Text>
      </ScrollView>
    )
  }
  return (
    <View style={CommonStyles.fullView}>{isAccount ? rendertextView() : renderInputView()}</View>
  )
}

export default InfoView
