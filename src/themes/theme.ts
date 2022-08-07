import { FontFamily } from '@lib/components/Text'
import { UIKitTheme } from '@lib/themes/interfaces'
import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui'

// const makeTheme = <T extends Theme>(t: T) => t

export const theme: UIKitTheme = {
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: false
  },
  fonts: {
    body: FontFamily.Arial,
    heading: FontFamily.SourceSansPro
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  lineHeights: {
    body: 1.5,
    heading: 1.75,
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
    progressBarColor: '#bbdefb',
    progressOverlayColor: '#42a5f5',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        progressBarColor: '#444',
        progressOverlayColor: '#fff'
      }
    }
  },
  images: {
    avatar: {
      aspectRatio: 'auto',
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  },
  styles: {}
}
