/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_MODE: string
  readonly VITE_APP_RPC_URL: string
  readonly VITE_APP_WC_PROJECT_ID: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_SOCKET_URL: string

  readonly VITE_CHAIN_ID: string
  readonly VITE_CHAIN_NAME: string
  readonly VITE_NATIVE_CURRENCY: string
  readonly VITE_RPC_URL: string
  readonly VITE_BLOCK_EXPLORER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
