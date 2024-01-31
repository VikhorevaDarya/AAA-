import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { devices } from '@/prices/devices'

import { AppState, DeviceType } from './types'

const useAppStore = create<AppState>()(
  devtools((set) => ({
    devices: devices,
    isOpenModal: false,

    setDevices: (updatedDevices: DeviceType[]) => {
      set(() => ({
        devices: updatedDevices,
      }))
    },

    setIsOpenModal: (updatedValue: boolean) => {
      set(() => ({
        isOpenModal: updatedValue,
      }))
    },
  })),
)

export default useAppStore
