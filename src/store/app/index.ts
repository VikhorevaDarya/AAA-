import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { devices } from '@/prices/devices'

import { AppState, DeviceType } from './types'

const useAppStore = create<AppState>()(
  devtools((set) => ({
    devices: devices,

    setDevices: (updatedDevices: DeviceType[]) => {
      set(() => ({
        devices: updatedDevices,
      }))
    },
  })),
)

export default useAppStore
