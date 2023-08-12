import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Reducers/loginReducer'
import signupReducer from './Reducers/signupReducer'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    singup: signupReducer
  }
})
