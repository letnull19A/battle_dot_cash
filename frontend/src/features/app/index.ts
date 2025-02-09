import { createSlice } from '@reduxjs/toolkit'

export type TAppState = {
 isAuth: boolean
 login: () => null
 logout: () => null
}

const appSlice = createSlice({
  name: 'app',
  initialState: [],
  reducers: {
    login(state, action) {
      
    },
    logout(state, action) {
      
    },
  },
})

export const { login, logout } = appSlice.actions
export default appSlice.reducer
