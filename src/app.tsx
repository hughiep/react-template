import './app.css'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { LoadingBarContainer } from 'react-top-loading-bar'

import { QueryProvider } from './modules/shared/contexts/query'
import { Router } from './router'

function App() {
  return (
    <QueryProvider>
      <LoadingBarContainer>
        <Router />
      </LoadingBarContainer>
      <ReactQueryDevtools />
    </QueryProvider>
  )
}

export default App
