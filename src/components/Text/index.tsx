import { HTMLAttributes } from 'react'
import classNames from 'classnames'

export type TextSizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const TextSizes: { [key in TextSizeTypes]: number } = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24
}

type TextColorTypes = 'primary' | 'grey' | 'dark-grey'

const TextColors: { [key in TextColorTypes]: string } = {
  primary: '#121212',
  grey: '#717171',
  'dark-grey': '#2A2A2A'
}

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: TextSizeTypes
  color?: TextColorTypes
  block?: boolean
  bold?: boolean
  lineThrough?: boolean
}

const Text = ({
  children,
  className,
  size = 'md',
  color = 'primary',
  block,
  bold,
  lineThrough,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  return (
    <span
      {...props}
      style={{
        fontSize: TextSizes[size],
        color: TextColors[color],
        display: block ? 'block' : 'inline',
        fontWeight: bold ? 'bold' : 'normal',
        textDecoration: lineThrough ? 'line-through' : 'none',
        ...props.style
      }}>
      {children}
    </span>
  )
}

export default Text
