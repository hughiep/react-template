import './app.css'

import { QueryProvider } from './modules/shared/providers/query'
import { Web3Provider } from './modules/shared/providers/web3'
import { Router } from './router'

function App() {
  return (
    <QueryProvider>
      <Web3Provider>
        <Router />
      </Web3Provider>
    </QueryProvider>
  )
}

export default App
