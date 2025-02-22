import { RouteObject } from 'react-router-dom'
import {
  LoginPage,
  RegistrationPage,
} from '@pages'
import { Layout } from '@layouts'

const { Full } = Layout

export const unAuthRouter: RouteObject[] = [
  {
    path: '/login',
    element: (
      <Full>
        <LoginPage />
      </Full>
    ),
  },
  {
    path: '/registration',
    element: (
      <Full>
        <RegistrationPage />
      </Full>
    ),
  },
]
