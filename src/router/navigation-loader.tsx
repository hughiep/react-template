import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useNavigation } from 'react-router-dom'

export function NavigationLoader() {
  const navigation = useNavigation()

  const [progress, setProgress] = useState(0)
  const [style, setStyle] = useState<CSSProperties>({})
  const isActive = useRef(false)

  const setStart = () => {
    setProgress(50)
    setStyle({ opacity: 1, transition: 'width 0.8s' })
  }

  const setComplete = () => {
    isActive.current = true
    setProgress(100)
    setStyle({ opacity: 0, transition: 'opacity 0.5s' })
  }

  console.log('navigation.state', navigation.state, progress)

  useEffect(() => {
    if (navigation.state === 'loading' || navigation.state === 'submitting') {
      if (isActive.current) {
        setStyle({ opacity: 0, transition: 'width 0.8s' })
        setProgress(0)
      }
      setStart()
    }

    if (navigation.state === 'idle') {
      setComplete()
    }
  }, [navigation.state])

  return (
    <div
      className="bg-blue-500 shadow-md shadow-blue-500"
      style={{
        position: 'fixed',
        boxShadow: '0 0 8px #3b82f6, 0 0 8px #3b82f6',
        zIndex: 999999,
        top: 0,
        width: `${progress}%`,
        height: '2px',
        transition: 'width 0.8s',
        ...style,
      }}
    />
  )
}
