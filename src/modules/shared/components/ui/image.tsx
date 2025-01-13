/**
 * Image component
 * ==============================
 */

import { useState, useEffect } from 'react'

import { cn } from '@/shared/lib/classnames'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
  showLoadingFallback?: boolean
}

function AppImage({
  src,
  fallback,
  showLoadingFallback,
  ...props
}: Readonly<ImageProps>) {
  const [internalSrc, setInternalSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = src ?? ''
    img.onload = () => {
      setInternalSrc(src)
      setIsLoading(false)
    }
    img.onerror = () => {
      setInternalSrc(fallback)
      setIsLoading(false)
    }
  }, [src, fallback])

  if (!isLoading && showLoadingFallback) {
    return (
      <div
        className={cn(
          'h-full w-full animate-pulse bg-slate-200',
          props.className,
        )}
      />
    )
  }

  return <img src={internalSrc} {...props} alt={props.alt ?? ''} />
}

export default AppImage

AppImage.displayName = 'Image'
