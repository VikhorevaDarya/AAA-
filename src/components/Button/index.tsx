import { ReactNode } from 'react'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = {
  children: ReactNode
  className?: string
}

const Button = ({ children, className }: ButtonProps) => {
  return <button className={cx(['button', className])}>{children}</button>
}

export default Button
