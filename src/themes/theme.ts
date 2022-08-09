import { FontFamily } from '@lib/components/Text'
import { colors } from '@lib/themes/colors'
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
    primary: colors.blue,
    secondary: 'red',
    accent: 'purple',
    highlight: 'yellow',
    muted: '#dcdcdc',
    progressBarColor: '#bbdefb',
    progressOverlayColor: '#42a5f5',
    calendarTodayCircleColor: colors.blue,
    calendarTodayTextColor: colors.white,
    calendarDayTextColor: '#333',
    green: colors.green,
    red: colors.red,
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
  buttons: {
    primary: {
      color: 'white',
      fontFamily: 'body',
      textTransform: 'uppercase',
      bg: 'primary'
    },
    secondary: {
      color: 'background',
      bg: 'secondary'
    }
  },
  calendar: {
    dayCircleSize: '2rem',
    dayFontSize: '0.8rem'
  },
  cards: {
    default: {
      padding: 3,
      borderRadius: 4,
      backgroundColor: 'background',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)'
    },
    large: {
      padding: 4,
      borderRadius: 4,
      backgroundColor: 'background',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)'
    }
  },
  styles: {}
}
