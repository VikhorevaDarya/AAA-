import classNames from 'classnames/bind'
import SvgIcon from '../SvgIcon'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const links = [
  {
    href: 'https://telegram.me/aaaplus_trade',
    iconName: 'tg',
    label: 'Telegram',
  },
  {
    href: 'https://api.whatsapp.com/send/?phone=79939552201&text&type=phone_number&app_absent=0',
    iconName: 'wa',
    label: 'WhatsApp',
  },
  {
    href: 'https://www.avito.ru/user/23689da72dcf0d61d42929e9d3f98eb4/profile',
    iconName: 'avito',
    label: 'Avito',
  },
]

const ContactLinks = () => {
  return (
    <div className={cx('links')}>
      {links.map((link) => (
        <a className={cx('links__item')} href={link.href}>
          <SvgIcon name={link.iconName} className={cx('links__icon')} />
          {/* {link.label} */}
        </a>
      ))}
    </div>
  )
}

export default ContactLinks
