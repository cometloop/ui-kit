// import original module declarations
import { FontFamily } from '@lib/components/Text'
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    bgColor: string
    header: {
      color: string
      fontFamily: FontFamily
      sizes: {
        h1: string
        h2: string
        h3: string
      }
    }
    text: {
      color: string
      fontFamily: FontFamily
      size: string
    }
    colors: {
      main: string
      secondary: string
    }
  }
}
