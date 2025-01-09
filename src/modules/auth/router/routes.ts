/**
 * Module routes
 * ==============================
 * Every module should have its own routes file.
 * This file should be named like `routes.tsx` and should export a function that returns an array of routes.
 */

import type { RouteObject } from 'react-router-dom'

import { authPaths } from '@/auth/router/paths'

export const authRoutes: RouteObject[] = [
  {
    path: authPaths.login,
    lazy: () =>
      import('./page').then((module) => ({ Component: module.default })),
  },
  // other auth routes...
]
