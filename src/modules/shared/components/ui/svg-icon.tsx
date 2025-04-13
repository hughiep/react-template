import type React from 'react'
import * as icons from 'assets/icons'

type SVGIconName = keyof typeof icons

interface Props extends React.SVGProps<SVGElement> {
  name: SVGIconName
  size?: number | `${number}`
  color?: string
}

export default function SvgIcon(props: Props) {
  const { name, size, width = 24, height = 24, ...rest } = props

  const Comp = icons[name as SVGIconName] as React.FC<
    React.SVGProps<SVGElement>
  >

  return (
    <Comp
      aria-label={name}
      role="img"
      height={size ?? height}
      width={size ?? width}
      {...rest}
    />
  )
}
