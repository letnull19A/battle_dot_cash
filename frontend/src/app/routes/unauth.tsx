import { RouteObject } from 'react-router-dom'
import {
  LoginPage,
  RegistrationPage,
  RefsPage,
} from '@pages'
import { Layout } from '@layouts'

const { Full, Default } = Layout

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
  {
    path: '/refs',
    element: (
      <Default>
        <RefsPage />
      </Default>
    ),
  },
]
