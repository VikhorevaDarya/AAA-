export type AppState = {
  devices: DeviceType[]
  isOpenModal: boolean

  setDevices: (updatedDevices: DeviceType[]) => void
  setIsOpenModal: (updatedValue: boolean) => void
  sendMessage: (message: string) => void
}

export type ProblemType = {
  id: number
  title: string
  count: string
  time: string
}

export type ModelType = {
  id: number
  name: string
  active: boolean
  problems: ProblemType[]
}

export type DeviceType = {
  id: number
  title: string
  name: string
  iconName: string
  active: boolean
  models: ModelType[]
}
