import { getMeQuery } from '@auth/services'
import type { QueryClient } from '@tanstack/react-query'

// Pattern: https://tkdodo.eu/blog/react-query-meets-react-router
export const loginPageLoaders = (queryClient: QueryClient) => {
  return () => {
    return queryClient.ensureQueryData(getMeQuery())
  }
}
