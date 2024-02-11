import { useState } from 'react'
import { PhoneOutlined } from '@ant-design/icons'

import { Menu } from './components'
import Logo from '@/assets/icons/logo.gif'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { ContactLinks } from '@/components'

const cx = classNames.bind(styles)

const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)

  const onOpenMenu = () => {
    setIsOpenedMenu(!isOpenedMenu)
  }

  return (
    <header className={cx('header', { header_active: isOpenedMenu })}>
      <div className={cx('header__inner')}>
        <div className={cx('header__content')}>
          <img src={Logo} className={cx('header__logo')} />
          <a className={cx('header__phone')} href='tel:+7 (995) 955 2201'>
            <PhoneOutlined />
            +7 (995) 955 2201
          </a>

          <span className={cx('header__links')}>
            <ContactLinks />
          </span>

          <span
            className={cx('header__menu-trigger', {
              // 'header__menu-trigger_white': isScrolled,
            })}
            onClick={onOpenMenu}
          >
            <span className={cx('header__menu-trigger_left')} />
            <span className={cx('header__menu-trigger_right')} />
          </span>
        </div>

        <div className={cx('header__menu')}>
          <Menu active={isOpenedMenu} setIsOpened={setIsOpenedMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
