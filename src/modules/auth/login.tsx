import { getMeQuery } from '@auth/services'
import { useQuery } from '@tanstack/react-query'

export default function LoginPage() {
  const { data: me } = useQuery(getMeQuery())

  return (
    <div>
      <h1>Login Page</h1>
      <p>Me: {JSON.stringify(me)}</p>
    </div>
  )
}
