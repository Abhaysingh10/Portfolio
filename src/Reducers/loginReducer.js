import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  pwd: null
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      console.log(action.payload)
    }
  }
})

export const { loginReducer } = loginSlice.actions
export default loginSlice.reducer
