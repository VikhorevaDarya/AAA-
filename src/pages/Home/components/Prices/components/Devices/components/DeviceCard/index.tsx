import { SvgIcon } from '@/components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type DeviceCardProps = {
  title: string
  iconName: string
  active: boolean
}

const DeviceCard = ({ title, iconName, active }: DeviceCardProps) => {
  return (
    <div className={cx(['device-card', { 'device-card_active': active }])}>
      <SvgIcon name={iconName} className={cx('device-card__icon')} />
      <span className={cx('device-card__title')}>{title}</span>
    </div>
  )
}

export default DeviceCard
