import type { RouteObject } from 'react-router-dom'

import { authRoutes } from '@/auth'
// import { walletRoutes } from '@/wallet/router/routes'

// Combine all module routes here
export const moduleRoutes: RouteObject[] = [
  ...authRoutes,
  // ...walletRoutes,
  // ...other module routes
]
