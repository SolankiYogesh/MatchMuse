import React, {forwardRef, useImperativeHandle, useMemo, useState} from 'react'
import {StyleSheet} from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

import {Color, CommonStyles} from '../../Helpers'
import {moderateScale, scale, verticalScale, W_HEIGHT} from '../../Helpers/Responsive'
import VideoDetailsConainer from './Components/VideoDetailsConainer'

const LiveStreamVideoModel = forwardRef((_, ref) => {
  const snapPoints = useMemo(() => [W_HEIGHT], [])
  const [item, setItem] = useState<any>(null)
  const [key, setKey] = useState(Math.random())
  const [isLive, setISLive] = useState(true)

  useImperativeHandle(ref, () => ({
    PlayVideo
  }))

  const PlayVideo = (data: any) => {
    setKey(Math.random())
    setISLive(!isLive)
    setItem(data)
  }

  return (
    !!item && (
      <BottomSheet
        onClose={() => setItem(null)}
        handleComponent={null}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <VideoDetailsConainer isLive={isLive} key={key} />
      </BottomSheet>
    )
  )
})

export default LiveStreamVideoModel

export const styles = StyleSheet.create({
  inputView: {
    ...CommonStyles.row,
    paddingHorizontal: scale(10),
    borderWidth: 1,
    borderColor: Color.grey_Shade2,
    flex: 1,
    borderRadius: moderateScale(10),
    padding: scale(5)
  },
  input: {
    flex: 1
  },
  sendBtnImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    marginLeft: scale(10)
  },
  footerContainer: {
    ...CommonStyles.row,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: Color.deepGrey
  }
})
