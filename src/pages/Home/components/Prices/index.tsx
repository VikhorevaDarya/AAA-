import { useAppStore } from '@/store'
import { DeviceCard, Diagnostic } from './components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Prices = () => {
  const [devices, setDevices] = useAppStore((state) => [
    state.devices,
    state.setDevices,
  ])

  const onDeviceCardClick = (id: number) => {
    const updatedDevices = devices.map((device) =>
      device.id === id
        ? { ...device, active: true }
        : { ...device, active: false },
    )

    setDevices(updatedDevices)
  }
  return (
    <div className={cx('prices')}>
      <div className={cx('prices__list')}>
        {devices.map((device) => (
          <div key={device.id} className={cx('prices__item')}>
            <DeviceCard device={device} handleClick={onDeviceCardClick} />

            <div className={cx('prices__diagnostic_mobile')}>
              {device.active && <Diagnostic models={device.models} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prices
