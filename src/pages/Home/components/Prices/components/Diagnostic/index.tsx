import { useEffect, useState } from 'react'
import { Select } from 'antd'

import { useAppStore } from '@/store'
import { ModelType, ProblemType } from '@/store/app/types'
import { Button } from '@/components'
import Result from '../Result'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

type ModelsProps = {
  models: ModelType[]
}

const cx = classNames.bind(styles)

const Models = ({ models }: ModelsProps) => {
  const [selectedProblem, setSelectedProblem] = useState<null | ProblemType>(
    null,
  )
  const [selectedModel, setSelectedModel] = useState<null | ModelType>(null)

  const [devices, setDevices] = useAppStore((state) => [
    state.devices,
    state.setDevices,
  ])

  const selectModelsOptions = models?.map((model) => ({
    value: model.id,
    label: model.name,
  }))

  const selectProblemOptions = selectedModel?.problems.map((problem) => ({
    value: problem.id,
    label: problem.title,
  }))

  const handleModelSelect = (id: number) => {
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

    const selectedModel = updatedDevices
      .filter((device) => device.active)[0]
      .models.filter((model) => model.active)[0]

    setDevices(updatedDevices)
    setSelectedModel(selectedModel)
    setSelectedProblem(null)
  }

  const handleProblemSelect = (id: number) => {
    const problem = selectedModel?.problems.find(
      (problem) => problem.id === id,
    ) as ProblemType

    setSelectedProblem(problem)
  }

  useEffect(() => {
    setSelectedModel(null)
    setSelectedProblem(null)

    console.log(models)
  }, [models])

  return (
    <div className={cx('diagnostic')}>
      <div className={cx('diagnostic__selects')}>
        <Select
          options={selectModelsOptions}
          placeholder='Выберите модель устройства'
          className={cx('diagnostic__select')}
          value={selectedModel?.id}
          size='large'
          onSelect={handleModelSelect}
        />

        {selectedModel && (
          <Select
            placeholder='Выберите проблему'
            className={cx('diagnostic__select')}
            size='large'
            value={selectedProblem?.id}
            options={selectProblemOptions}
            onSelect={handleProblemSelect}
          />
        )}
      </div>

      {selectedProblem && (
        <div className={cx('diagnostic__result')}>
          <Result problem={selectedProblem} />
          <Button className={cx('diagnostic__button')}>Оставить заявку</Button>
        </div>
      )}
    </div>
  )
}

export default Models
