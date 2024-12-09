import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { useQueryClient, type QueryClient } from '@tanstack/react-query'
import { jwtMeMock } from '../../.mock/auth'
import { LoginPage } from './pages'
import NotFoundPage from './not-found'
import ErrorBoundary from './error-boundary'

export const contactDetailQuery = () => ({
  queryKey: ['me'],
  queryFn: async () => jwtMeMock(),
})

const loader = (queryClient: QueryClient) => async () => {
  const query = contactDetailQuery() // ⬇️ return data or fetch it

  const data = await queryClient.fetchQuery(query)
  return data
}

export const Router = () => {
  const queryClient = useQueryClient()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorBoundary />}>
        <Route path="/" element={<PrivateRoute />} />
        <Route
          path="/login"
          element={<LoginPage />}
          loader={loader(queryClient)}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

const PrivateRoute = () => {
  const auth = null

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />
}
