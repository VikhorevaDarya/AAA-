/// <reference types="vite/client" />

import { ThemeEnum } from './store/themes/types'

interface ImportMetaEnv {
  readonly VITE_DEV_SERVER_PORT: string
  readonly VITE_JSON_SERVER_PORT: string
  readonly VITE_THEME_DEFAULT: ThemeEnum
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
