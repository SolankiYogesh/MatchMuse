import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = {...(state?.user ?? {}), ...action.payload}
    },
    logOut: (state) => {
      state.user = null
    }
  }
})
export const {logOut, setUserData} = UserSlice.actions
export default UserSlice.reducer
