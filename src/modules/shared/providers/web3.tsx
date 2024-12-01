import { WagmiProvider } from 'wagmi'
import { config } from '@/modules/shared/lib/wagmi'

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>
}
