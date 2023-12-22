import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <div className={cx('header')}>header</div>
  )
}

export default Header
