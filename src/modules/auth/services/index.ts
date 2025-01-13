import { authQueryKeys } from '@/auth/services/query-keys'
import type { Query } from '@/shared/types/query'

import { getMe } from '~/mocks/auth'

export const getMeQuery = (): Query => ({
  queryKey: authQueryKeys.getMe,
  queryFn: getMe,
})
