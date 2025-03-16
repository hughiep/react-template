import { Outlet } from 'react-router'

import NavigationLoader from './navigation-loader'

export default function RootLayout() {
  return (
    <>
      <NavigationLoader />
      <main>
        <Outlet />
      </main>
    </>
  )
}
