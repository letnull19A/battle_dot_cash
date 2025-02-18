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
    login(_state, _action) {
      
    },
    logout(_state, _action) {
      
    },
  },
})

export const { login, logout } = appSlice.actions
export default appSlice.reducer
