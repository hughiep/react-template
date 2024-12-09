import {
  createBrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages'
import NotFoundPage from './not-found'
import { RootBoundary } from './error-boundary'

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRoute />,
    },
  ])

  return <RouterProvider router={router} />
}

const PrivateRoute = () => {
  const auth = null

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />
}
