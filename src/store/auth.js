import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 0,
  },
  reducers: {
    changeValue: (state, action) => {
      console.log(action.payload)
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValue } = authSlice.actions

export default authSlice.reducer