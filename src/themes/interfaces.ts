import { colors, ColorType } from '@lib/themes/colors'
import { FontFamily } from '@lib/components/Text'
import { darkTheme } from '@lib/themes/darkTheme'
import { lightTheme } from '@lib/themes/lightTheme'
import { Theme as StyledSystemTheme } from 'styled-system'

export interface UIKitTheme extends StyledSystemTheme {
  bgColor: string
  borderRadius: string
  header: {
    color: string
    fontFamily: FontFamily | string
    sizes: {
      h1: string
      h2: string
      h3: string
    }
  }
  text: {
    color: string
    fontFamily: FontFamily | string
    size: string
  }
  colors: Record<ColorType, string>
}

export type Theme = 'light' | 'dark'

export const Themes: Record<Theme, UIKitTheme> = {
  light: lightTheme,
  dark: darkTheme
}
