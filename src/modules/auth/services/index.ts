import { queryOptions } from '@tanstack/react-query'

import { authQueryKeys } from './query-keys'

import { getMe } from '~/mocks/auth'

export const getMeQuery = () =>
  queryOptions({
    queryKey: authQueryKeys.getMe,
    queryFn: getMe,
  })
