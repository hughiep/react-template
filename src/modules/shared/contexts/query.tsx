import { QueryClientProvider } from '@tanstack/react-query'

import { appQueryClient } from '../lib/query-client'

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
