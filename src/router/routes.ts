import type { RouteObject } from 'react-router-dom'

import { authRoutes } from '@/auth'

// Combine all module routes here
export const moduleRoutes: RouteObject[] = [
  ...authRoutes,
  /**
   * * Add your module routes here
   */
]
