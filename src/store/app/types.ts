export type AppState = {
  devices: DeviceType[]

  setDevices: (updatedDevices: DeviceType[]) => void
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
