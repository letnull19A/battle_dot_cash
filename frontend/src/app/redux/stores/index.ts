import { configureStore } from '@reduxjs/toolkit'
import {appReducer} from '@features'

export const app = configureStore({
  reducer: {
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof app.getState>
export type AppDispatch = typeof app.dispatch
