import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { publicRouter } from './public'
import { unAuthRouter } from './unauth'

export const RouterApp = () => {
  const router = createBrowserRouter([...publicRouter, ...unAuthRouter])

  return <RouterProvider router={router}></RouterProvider>
}
