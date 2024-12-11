import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { loginPageLoaders } from '@auth/loaders'

import RootLayout from './root-layout'
import NotFoundPage from './not-found'
import ErrorBoundary from './error-boundary'
import PrivateRoute from './private-route'

export const Router = () => {
  const queryClient = useQueryClient()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />} errorElement={<ErrorBoundary />}>
        <Route path="/" element={<PrivateRoute />} />
        <Route
          path="/login"
          lazy={() => import('@auth')}
          loader={loginPageLoaders(queryClient)}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}
