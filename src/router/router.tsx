import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import RootLayout from '@/shared/layouts/root'

import { moduleRoutes } from './routes'
import PrivateRoute from './private-route'
import NotFoundPage from './not-found'
import ErrorBoundary from './error'

export const Router = () => {
  const appRoutes: RouteObject[] = [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '/',
          element: <PrivateRoute />,
        },
        ...moduleRoutes,
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]

  const router = createBrowserRouter(appRoutes)
  return <RouterProvider router={router} />
}
