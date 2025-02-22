import { RouteObject } from 'react-router-dom'
import {
  Account,
  MainPage,
  NotFoundErrorPage,
} from '@pages'
import { Layout } from '@layouts'

const { Default, Full } = Layout

export const publicRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <Default>
        <MainPage />
      </Default>
    ),
  },
  {
    path: '/account',
    element: (
      <Default>
        <Account />
      </Default>
    ),
  },
  {
    path: '*',
    element: (
      <Full>
        <NotFoundErrorPage />
      </Full>
    ),
  },
]
