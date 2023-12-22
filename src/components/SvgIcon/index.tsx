import { SVGAttributes } from 'react'

export type SvgIconProps = {
  name: string
  color?: string
} & SVGAttributes<SVGElement>

const SvgIcon: React.FC<SvgIconProps> = ({ name, color, ...props }) => {
  const symbolId = `#icon-${name}`

  return (
    <svg {...props} aria-hidden='true'>
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
