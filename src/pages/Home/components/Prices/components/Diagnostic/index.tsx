import { useCallback, useEffect, useState } from 'react'
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

  const [devices, setDevices, setIsOpenModal] = useAppStore((state) => [
    state.devices,
    state.setDevices,
    state.setIsOpenModal,
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

  const onClick = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  useEffect(() => {
    setSelectedModel(null)
    setSelectedProblem(null)
  }, [models])

  return (
    <div className={cx('diagnostic')}>
      <div className={cx('diagnostic__selects')}>
        <Select
          placeholder='Выберите модель устройства'
          className={cx('diagnostic__select')}
          size='large'
          value={selectedModel?.id}
          options={selectModelsOptions}
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
          <Button className={cx('diagnostic__button')} onClick={onClick}>
            Оставить заявку
          </Button>
        </div>
      )}
    </div>
  )
}

export default Models
