import { WagmiProvider } from 'wagmi'

import { config } from '@/shared/lib/wagmi'

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider reconnectOnMount config={config}>
      {children}
    </WagmiProvider>
  )
}
