import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: null,
  email: null,
  country: null
}

export const signupSlice = createSlice({
  name: 'singup',
  initialState,
  reducers: {
    signupReducer: (state, action) => {}
  }
})
export const { signupReducer } = signupSlice.actions
export default signupSlice.reducer
