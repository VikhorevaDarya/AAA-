import { menuItems } from './config'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

type MenuItemType = {
  title: string
  target: string
}

interface MenuProps {
  active: boolean
  setIsOpened: (value: boolean) => void
}

const cx = classNames.bind(styles)

const Menu = ({ active, setIsOpened }: MenuProps) => {
  const onMenuItemClick = (target: string) => {
    setIsOpened(false)

    const HTMLTarget = document.getElementById(target) as HTMLElement

    HTMLTarget.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className={cx('menu', { menu_active: active })}>
      <ul className={cx('menu__list')}>
        {menuItems.map((item: MenuItemType, index: number) => (
          <li
            key={index}
            className={cx('menu__item')}
            onClick={() => onMenuItemClick(item.target)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
