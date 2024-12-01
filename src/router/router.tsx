import { Navigate, Outlet, Route, Routes } from 'react-router'
import { LoginPage } from './pages'
import { RootBoundary } from './error-boundary'
import { BrowserRouter } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<RootBoundary />}>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<div>home</div>} />
          </Route>
          <Route path="/login" element={<LoginPage />} />

          {/**
           * Add more routes here
           */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const PrivateRoute = () => {
  const auth = null

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />
}
