/**
 * Users module routes
 */

import type { RouteObject } from 'react-router'

import CreateUser from '../create/create-user'
import ListUser from '../list/user-list'

export const usersRoutes: RouteObject[] = [
  {
    path: '/users',
    element: <ListUser />,
  },
  {
    path: '/users/create',
    element: <CreateUser />,
  },
]
