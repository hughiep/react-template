import { Outlet } from 'react-router'

import { NavigationLoader } from '~/router/navigation-loader'

export default function RootLayout() {
  return (
    <main>
      <Outlet />
      <NavigationLoader />
    </main>
  )
}
