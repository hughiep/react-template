/**
 * Users module routes
 */

import type { RouteObject } from 'react-router'

import CreateUser from '~/modules/users/create/CreateUser'
import ListUser from '~/modules/users/list/ListUser'

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
