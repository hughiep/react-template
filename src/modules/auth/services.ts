import type { Query } from '@shared/types/query'
import { getMe } from '@/mocks/auth'

export const getMeQuery = (): Query => ({
  queryKey: ['me'],
  queryFn: getMe,
})
