import { DeviceCard } from './components'
import { devices } from '@/prices/devices'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Devices = () => {
  return (
    <div className={cx('devices')}>
      {devices.map((device) => (
        <DeviceCard
          key={device.id}
          title={device.title}
          iconName={device.iconName}
          active={device.active}
        />
      ))}
    </div>
  )
}

export default Devices
