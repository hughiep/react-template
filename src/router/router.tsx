import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from '@/shared/layouts/root'

import ErrorBoundary from './error'
import NotFoundPage from './not-found'
import PrivateRoute from './private-route'
import { moduleRoutes } from './routes'

export const Router = () => {
  const appRoutes: RouteObject[] = [
    {
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
