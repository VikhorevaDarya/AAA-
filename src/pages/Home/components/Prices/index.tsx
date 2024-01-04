import { useAppStore } from '@/store'
import { DeviceCard, Models } from './components'

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
      {devices.map((device) => (
        <div key={device.id}>
          <DeviceCard device={device} handleClick={onDeviceCardClick} />

          {device.active && <Models models={device.models} />}
        </div>
      ))}
    </div>
  )
}

export default Prices
