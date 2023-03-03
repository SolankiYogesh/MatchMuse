import React, {forwardRef, useImperativeHandle, useMemo, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils'
import BottomSheet from '@gorhom/bottom-sheet'

import {Color} from '../../Helpers'
import ProfileComponent from './ProfileComponent'

export interface ProfileBottomSheetProps {
  onClose?: () => void
}

const ProfileBottomSheet = forwardRef((_, ref) => {
  const snapPoints = useMemo(() => ['100%'], [])
  const [item, setItem] = useState<any>(null)

  useImperativeHandle(ref, () => ({
    OpenProfile
  }))

  const OpenProfile = (data: any) => {
    setItem(data)
  }

  const BottomSheetBackground = ({style}: ViewProps) => {
    return <View style={[styles.bottomSheetBack, style]} />
  }

  return (
    !!item && (
      <BottomSheet
        onClose={() => setItem(null)}
        enablePanDownToClose
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        backgroundComponent={(props) => <BottomSheetBackground {...props} />}
      >
        <ProfileComponent />
      </BottomSheet>
    )
  )
})

export default ProfileBottomSheet

const styles = StyleSheet.create({
  bottomSheetBack: {
    borderRadius: 0,
    backgroundColor: Color.white
  },

  handleIndicatorStyle: {
    backgroundColor: Color.lightGrey,
    width: '15%'
  }
})
