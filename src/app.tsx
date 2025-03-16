import './app.css'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { LoadingBarContainer } from 'react-top-loading-bar'

import { QueryProvider } from './modules/shared/contexts/query'
import { Web3Provider } from './modules/shared/contexts/web3'
import { Router } from './router'

function App() {
  return (
    <QueryProvider>
      <Web3Provider>
        <LoadingBarContainer>
          <Router />
        </LoadingBarContainer>
      </Web3Provider>
      <ReactQueryDevtools />
    </QueryProvider>
  )
}

export default App
