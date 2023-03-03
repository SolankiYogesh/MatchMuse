import {StyleSheet} from 'react-native'

import Color from './Color'
import {W_HEIGHT, W_WIDTH} from './Responsive'

const CommonStyles = StyleSheet.create({
  shadow: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bodyStyle: {
    backgroundColor: Color.offWhite
  },
  fullView: {
    height: W_HEIGHT,
    width: W_WIDTH
  },
  viewFull: {
    height: '100%',
    width: '100%'
  },
  modalStyle: {
    padding: 0,
    margin: 0
  },
  noShadow: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
  redShadow: {
    shadowColor: Color.Primary,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 40,
    elevation: 24
  }
})

export default CommonStyles
