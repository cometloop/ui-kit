import { theme } from '@lib/themes/theme'
import { ThemeUIContextValue, useThemeUI } from 'theme-ui'

export type UIKitTheme = typeof theme

interface UIKitThemeContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: UIKitTheme
}

export const useTheme = useThemeUI as unknown as () => UIKitThemeContextValue
