import {
  iPhoneModels,
  iPadModels,
  iWatchModels,
  airpodsModels,
  macbookModels,
} from './models'

export const devices = [
  {
    id: 1,
    name: 'IPhone',
    title: 'Ремонт IPhone',
    iconName: 'phone',
    active: false,
    models: iPhoneModels,
  },
  {
    id: 2,
    name: 'IPad',
    title: 'Ремонт IPad',
    iconName: 'ipad',
    active: false,
    models: iPadModels,
  },
  {
    id: 3,
    name: 'AirPods',
    title: 'Ремонт AirPods',
    iconName: 'airpods',
    active: false,
    models: airpodsModels,
  },
  {
    id: 4,
    name: 'Mac',
    title: 'Ремонт Mac',
    iconName: 'mac',
    active: false,
    models: macbookModels,
  },
  {
    id: 5,
    name: 'Apple Watch',
    title: 'Ремонт Apple Watch',
    iconName: 'iwatch',
    active: false,
    models: iWatchModels,
  },
]
