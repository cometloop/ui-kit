import { FontFamily } from '@lib/components/Text'
import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui'

// const makeTheme = <T extends Theme>(t: T) => t

export const theme = {
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: false
  },
  fonts: {
    body: FontFamily.Arial
  },
  lineHeights: {
    body: 1.5,
    heading: 2,
    test: 5
  },
  colors: {
    text: '#333',
    background: '#fff',
    primary: 'orange',
    secondary: 'red',
    accent: 'purple',
    highlight: 'yellow',
    muted: '#dcdcdc',
    modes: {
      dark: {
        text: '#fff',
        background: '#000'
      }
    }
  },
  styles: {}
}
