import { MouseEventHandler, ReactNode } from 'react'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = {
  children: ReactNode

  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const Button = ({
  children,
  className,
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button className={cx(['button', className])} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
