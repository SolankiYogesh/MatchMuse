import React, {useState} from 'react'
import {View} from 'react-native'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'

import AppContainer from '../../../Components/AppContainer'
import {Screen} from '../../../Helpers'
import AboutYouView from './Components/AboutYouView'
import InterestView from './Components/InterestView'
import MoreAboutYouView from './Components/MoreAboutYouView'
import SelectTypeView from './Components/SelectTypeView'
import {styles} from './UserDetailsScreenStyle'

const UserDetailsScreen = () => {
  const navigation: any = useNavigation()
  const user = useSelector((state: any) => state?.user?.user)
  const initialIndex = user?.isFirstComplete
    ? 2
    : user?.isSecondComplete
    ? 3
    : user?.isThirdComplete
    ? 4
    : 1
  const [index, setIndex] = useState(initialIndex)

  const renderFirstView = () => {
    return <AboutYouView onIndexChange={setIndex} />
  }

  const renderSecondView = () => {
    return <MoreAboutYouView onIndexChange={setIndex} />
  }

  const renderThirdView = () => {
    return <InterestView onIndexChange={setIndex} />
  }

  const renderFourthView = () => {
    return <SelectTypeView onPressContinueEnd={onPressContinue} />
  }

  const onPressContinue = () => {
    navigation.replace(Screen.MatchProfileScreen)
  }

  return (
    <AppContainer isGradient>
      <View style={styles.container}>
        {index === 1
          ? renderFirstView()
          : index === 2
          ? renderSecondView()
          : index === 3
          ? renderThirdView()
          : renderFourthView()}
      </View>
    </AppContainer>
  )
}

export default UserDetailsScreen
