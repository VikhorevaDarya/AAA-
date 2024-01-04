export type AppState = {
  devices: DeviceType[]

  setDevices: (updatedDevices: DeviceType[]) => void
}

export type PriceType = {
  id: number
  title: string
  count: string
}

export type ModelType = {
  id: number
  name: string
  active: boolean
  prices: PriceType[]
}

export type DeviceType = {
  id: number
  title: string
  iconName: string
  active: boolean
  models: ModelType[]
}
