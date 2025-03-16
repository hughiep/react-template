import { useQuery } from '@tanstack/react-query'

import { getMeQuery } from '@/auth/services'
import SvgIcon from '@/shared/components/ui/svg-icon'

export default function Login() {
  const { data: me } = useQuery(getMeQuery())

  return (
    <div>
      <SvgIcon name="ReactIcon" />
      <h1 className="font-bold">Login Page</h1>
      <p>Me: {JSON.stringify(me)}</p>
    </div>
  )
}
