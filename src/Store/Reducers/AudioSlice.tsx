import {createSlice} from '@reduxjs/toolkit'

const AudioSlice = createSlice({
  name: 'audioList',
  initialState: {
    audioList: []
  },
  reducers: {
    setAudioList: (state, action) => {
      state.audioList = action.payload
    }
  }
})
export const {setAudioList} = AudioSlice.actions
export default AudioSlice.reducer
