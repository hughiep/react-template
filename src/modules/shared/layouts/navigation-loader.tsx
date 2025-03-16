import { useEffect } from 'react'
import { useNavigation } from 'react-router'
import { useLoadingBar } from 'react-top-loading-bar'

export default function NavigationLoader() {
  const navigation = useNavigation()
  const { start, complete } = useLoadingBar({
    height: 2,
  })

  useEffect(() => {
    if (navigation.state === 'loading' || navigation.state === 'submitting') {
      start()
    } else {
      complete()
    }
  }, [complete, navigation.state, start])

  return null
}
