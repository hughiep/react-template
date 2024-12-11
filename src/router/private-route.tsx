import { Navigate, Outlet } from 'react-router'

export default function PrivateRoute() {
  const auth = null

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />
}
