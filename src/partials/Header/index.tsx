import { useState } from 'react'

import { Menu } from './components'
import Logo from '@/assets/icons/logo.gif'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)

  const onOpenMenu = () => {
    setIsOpenedMenu(!isOpenedMenu)
  }

  return (
    <header className={cx('header', { header_active: isOpenedMenu })}>
      <img src={Logo} className={cx('header__logo')} />
      <span className={cx('header__phone')}>+7 (993) 003 1456</span>
      <span
        className={cx('header__menu-trigger', {
          // 'header__menu-trigger_white': isScrolled,
        })}
        onClick={onOpenMenu}
      >
        <span className={cx('header__menu-trigger_left')} />
        <span className={cx('header__menu-trigger_right')} />
      </span>
      <div className={cx('header__menu')}>
        <Menu active={isOpenedMenu} setIsOpened={setIsOpenedMenu} />
      </div>
    </header>
  )
}

export default Header
