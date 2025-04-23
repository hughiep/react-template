import type { QueryClient } from '@tanstack/react-query'

import { getMeQuery } from '../services'

// Pattern: https://tkdodo.eu/blog/react-query-meets-react-router
export const loginPageLoaders = (queryClient: QueryClient) => {
  return () => {
    return queryClient.ensureQueryData(getMeQuery())
  }
}
