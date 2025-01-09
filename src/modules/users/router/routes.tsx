/**
 * Users module routes
 */

import CreateUser from '~/modules/users/create/CreateUser'
import ListUser from '~/modules/users/list/ListUser'
import { registerModuleRoutes } from '~/router/register'

export const usersRoutes = registerModuleRoutes([
  {
    path: '/users',
    element: <ListUser />,
  },
  {
    path: '/users/create',
    element: <CreateUser />,
  },
])
