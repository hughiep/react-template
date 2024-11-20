import { http, createConfig } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'

const SUPPORTED_CHAIN =
  import.meta.env.VITE_APP_MODE === 'production' ? bsc : bscTestnet

// https://viem.sh/docs/clients/transports/http
const transports: Record<number, ReturnType<typeof http>> = {
  [SUPPORTED_CHAIN.id]: http(import.meta.env.VITE_APP_RPC_URL),
}

export const config = createConfig({
  chains: [SUPPORTED_CHAIN],
  transports,
})
