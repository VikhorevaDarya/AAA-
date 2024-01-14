import { useState } from 'react'

import { useAppStore } from '@/store'
import { DeviceType } from '@/store/app/types'
import { DeviceCard, Diagnostic } from './components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Prices = () => {
  const [selectedDevice, setSelectedDevice] = useState<null | DeviceType>(null)
  const [devices, setDevices] = useAppStore((state) => [
    state.devices,
    state.setDevices,
  ])

  const onDeviceCardClick = (id: number) => {
    const device = devices.filter((device) => device.id === id)[0] as DeviceType

    const updatedDevices = devices.map((device) =>
      device.id === id
        ? { ...device, active: true }
        : { ...device, active: false },
    )

    setDevices(updatedDevices)
    setSelectedDevice({ ...device, active: true })
  }
  return (
    <div className={cx('prices')} id='#prices'>
      <div className={cx('prices__list')}>
        {devices.map((device) => (
          <div key={device.id} className={cx('prices__item')}>
            <DeviceCard device={device} handleClick={onDeviceCardClick} />

            <div className={cx('prices__diagnostic_mobile')}>
              {selectedDevice && device.active && (
                <Diagnostic models={selectedDevice.models} />
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedDevice && (
        <div
          className={cx(['prices__diagnostic', 'prices__diagnostic_desktop'])}
        >
          <h3 className={cx('prices__diagnostic-title')}>
            Выберите модель {selectedDevice?.name} и неисправность:
          </h3>
          {selectedDevice && <Diagnostic models={selectedDevice.models} />}
        </div>
      )}
    </div>
  )
}

export default Prices
