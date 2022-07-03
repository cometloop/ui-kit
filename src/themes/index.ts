import { FontFamily } from '@lib/components/Text'
import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  bgColor: '#fff',
  borderRadius: '5px',
  header: {
    fontFamily: FontFamily.Poppins,
    color: '#000',
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2.0rem'
    }
  },
  text: {
    fontFamily: FontFamily.OpenSans,
    color: '#000',
    size: '1.0rem'
  },
  colors: {
    main: 'cyan',
    secondary: 'magenta'
  }
}

export const darkTheme: DefaultTheme = {
  bgColor: '#000',
  borderRadius: '5px',
  header: {
    fontFamily: FontFamily.Poppins,
    color: '#fff',
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2.0rem'
    }
  },
  text: {
    fontFamily: FontFamily.OpenSans,
    color: '#fff',
    size: '1.0rem'
  },
  colors: {
    main: 'cyan',
    secondary: 'magenta'
  }
}

export type Theme = 'light' | 'dark'

export const Themes: Record<Theme, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme
}
