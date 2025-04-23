import { queryOptions } from '@tanstack/react-query'

import { getMe } from '~/mocks/auth'

import { authQueryKeys } from './query-keys'

export const getMeQuery = () =>
  queryOptions({
    queryKey: authQueryKeys.getMe,
    queryFn: getMe,
  })
