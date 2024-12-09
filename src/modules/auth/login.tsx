import { useQuery } from '@tanstack/react-query'
import { useFetcher } from 'react-router'
import { contactDetailQuery } from '@/router/router'

export default function LoginPage() {
  const fetcher = useFetcher()
  const { data: me } = useQuery(contactDetailQuery())

  console.log('me', fetcher)

  if (fetcher.state === 'loading') return <div>Loading...</div>

  return (
    <div>
      <h1>Login Page</h1>
      <p>Me: {JSON.stringify(me)}</p>
    </div>
  )
}
