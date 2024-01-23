import { HTMLAttributes, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './button.module.scss'

type ButtonProps = HTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={classNames(className, styles.button)} {...props}>
      {children}
    </button>
  )
}

export default Button
