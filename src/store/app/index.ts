import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { devices } from '@/prices/devices'
import { http } from '@/utils'

import { AppState, DeviceType } from './types'

const token = '6838884347:AAHskGd9RhHGLBRX06a2c9PzoqH4R75YPK0'
const url = `https://api.telegram.org/bot${token}/sendMessage`
const CHAT_ID = '-1002035910572'
const THREAD_ID = 24

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

    sendMessage(message: string) {
      return http().post(url, {
        chat_id: CHAT_ID,
        message_thread_id: THREAD_ID,
        parse_mode: 'html',
        text: message,
      })
    },
  })),
)

export default useAppStore
