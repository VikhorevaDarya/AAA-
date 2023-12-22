import createSelectors from '@/store/createSelectors'
import { useThemeStore } from '@/store'

const themeSelector = createSelectors(useThemeStore)

export default themeSelector
