import './app.css'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryProvider } from './modules/shared/providers/query'
import { Web3Provider } from './modules/shared/providers/web3'
import { Router } from './router'

function App() {
  return (
    <QueryProvider>
      <Web3Provider>
        <Router />
      </Web3Provider>
      <ReactQueryDevtools />
    </QueryProvider>
  )
}

export default App
