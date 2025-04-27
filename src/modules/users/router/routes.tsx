/**
 * Users module routes
 */

import type { RouteObject } from 'react-router'

import CreateUser from '~/modules/users/create/create-user'
import ListUser from '~/modules/users/list/user-list'

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
