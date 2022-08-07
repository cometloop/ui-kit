import { theme } from '@lib/themes/theme'
import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui'

// export type UIKitTheme = typeof theme
// export type UIKitTheme = typeof theme
export interface UIKitTheme extends Theme {}

interface UIKitThemeContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: UIKitTheme
}

export const useTheme = useThemeUI as unknown as () => UIKitThemeContextValue
