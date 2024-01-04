import { Select } from 'antd'

import { useAppStore } from '@/store'
import { ModelType } from '@/store/app/types'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

type ModelsProps = {
  models: ModelType[]
}

const cx = classNames.bind(styles)

const Models = ({ models }: ModelsProps) => {
  const [devices, setDevices] = useAppStore((state) => [
    state.devices,
    state.setDevices,
  ])

  const selectOptions = models?.map((model) => ({
    value: model.id,
    label: model.name,
  }))

  const handleSelect = (id: number) => {
    const updatedDevices = devices.map((device) =>
      device.active
        ? {
            ...device,
            models: device.models.map((model) =>
              model.id === id
                ? { ...model, active: true }
                : { ...model, active: false },
            ),
          }
        : device,
    )

    setDevices(updatedDevices)
  }

  return (
    <div className={cx('models')}>
      <Select
        options={selectOptions}
        placeholder='Выберите модель устройства'
        className={cx('models__select')}
        size='large'
        onSelect={handleSelect}
      />

      {models.map(
        (model) => model.active && <div key={model.id}>{model.name}</div>,
      )}
    </div>
  )
}

export default Models
