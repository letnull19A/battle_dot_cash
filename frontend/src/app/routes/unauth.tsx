import { RouteObject } from 'react-router-dom'
import { LoginPage,  NotFoundErrorPage } from '@pages'
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
  }
]
