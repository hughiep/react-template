import { useQuery } from '@tanstack/react-query'

import { getMeQuery } from '@/auth/services'

export default function Login() {
  const { data: me } = useQuery(getMeQuery())

  return (
    <div>
      <h1>Login Page</h1>
      <p>Me: {JSON.stringify(me)}</p>
    </div>
  )
}
