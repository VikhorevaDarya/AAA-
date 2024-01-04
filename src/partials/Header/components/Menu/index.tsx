import { menuItems } from './config'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

type MenuItemType = {
  title: string
  target: string | number
}

interface MenuProps {
  active: boolean
  setIsOpened: (value: boolean) => void
}

const cx = classNames.bind(styles)

const Menu = ({ active, setIsOpened }: MenuProps) => {
  const onMenuItemClick = () => {
    setIsOpened(false)
  }

  return (
    <div className={cx('menu', { menu_active: active })}>
      <ul className={cx('menu__list')}>
        {menuItems.map((item: MenuItemType, index: number) => (
          <li
            key={index}
            className={cx('menu__item')}
            onClick={() => onMenuItemClick(String(item.target))}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
