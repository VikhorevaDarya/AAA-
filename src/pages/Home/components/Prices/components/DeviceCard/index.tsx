import { SvgIcon } from '@/components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

import { DeviceType } from '@/store/app/types'

const cx = classNames.bind(styles)

type DeviceCardProps = {
  device: DeviceType

  handleClick: (id: number) => void
}

const DeviceCard = ({ device, handleClick }: DeviceCardProps) => {
  const { title, iconName, active, id } = device

  return (
    <div
      className={cx(['device-card', { 'device-card_active': active }])}
      onClick={() => handleClick(id)}
    >
      <SvgIcon name={iconName} className={cx('device-card__icon')} />
      <span className={cx('device-card__title')}>{title}</span>
    </div>
  )
}

export default DeviceCard
