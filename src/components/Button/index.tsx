import { HTMLAttributes } from 'react'
import classNames from 'classnames'

type ButtonProps = HTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classNames(className, `bg-black text-white px-4 py-[18px] rounded-full hover:bg-gray-600 text-base`)}
      {...props}>
      {children}
    </button>
  )
}

export default Button
