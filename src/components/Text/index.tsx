import { HTMLAttributes } from 'react'
import classNames from 'classnames'

type TextSizeTypes = 'sm' | 'md' | 'lg'

const TextSizes: { [key in TextSizeTypes]: number } = {
  sm: 14,
  md: 16,
  lg: 20
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
}

const Text = ({
  children,
  className,
  size = 'md',
  color = 'primary',
  block,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  return (
    <span
      {...props}
      style={{
        fontSize: TextSizes[size],
        color: TextColors[color],
        display: block ? 'block' : 'inline',
        ...props.style
      }}>
      {children}
    </span>
  )
}

export default Text
