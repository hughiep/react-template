import type React from 'react'

import * as svgIcons from '@/assets/icons'

type SVGIconName = keyof typeof svgIcons
interface Props extends React.SVGProps<SVGElement> {
  name: SVGIconName
  size?: number | `${number}`
  color?: string
}

export default function SvgIcon(props: Props) {
  const { name, size, width = 24, height = 24 } = props

  const Comp = svgIcons[name as SVGIconName] as React.FC<
    React.SVGProps<SVGElement>
  >

  return (
    <Comp
      aria-label={name}
      role="img"
      height={size ?? height}
      width={size ?? width}
      {...props}
    />
  )
}
