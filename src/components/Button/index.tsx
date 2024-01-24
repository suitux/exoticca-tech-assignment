import { HTMLAttributes, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './button.module.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'lg' | 'sm'
}

const Button = ({ children, size = 'lg', className, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={classNames(className, styles.button, styles[size])} {...props}>
      {children}
    </button>
  )
}

export default Button
