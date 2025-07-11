import { useQuery } from '@tanstack/react-query'

import SvgIcon from '@/shared/components/ui/svg'

import { getMeQuery } from '../services'

export default function Login() {
  const { data: me } = useQuery(getMeQuery())

  return (
    <div>
      <SvgIcon name="react" />
      <h1>Login Page</h1>
      <p>Me: {JSON.stringify(me)}</p>
    </div>
  )
}
