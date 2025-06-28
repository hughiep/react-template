/**
 * Module routes
 * ==============================
 * Every module should have its own routes file.
 * This file should be named like `routes.tsx` and should export a function that returns an array of routes.
 */

import type { RouteObject } from 'react-router-dom'

import FallbackElement from '~/router/fallback'

export const authPaths = {
  login: '/login',
}

export const authRoutes: RouteObject[] = [
  {
    path: authPaths.login,
    HydrateFallback: FallbackElement,
    lazy: () =>
      import('./page').then((module) => ({ Component: module.default })),
  },
  // other auth routes...
]
