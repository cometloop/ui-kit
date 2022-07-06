import { FontFamily } from '@lib/components/Text'
import { colors } from '@lib/themes/colors'
import { UIKitTheme } from '@lib/themes/interfaces'

export const lightTheme: UIKitTheme = {
  bgColor: '#fff',
  borderRadius: '5px',
  header: {
    fontFamily: 'arial',
    color: '#000',
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2.0rem',
      h4: '1.5rem'
    }
  },
  text: {
    fontFamily: 'arial, sans-serif',
    color: '#000',
    size: '1.0rem'
  },
  fonts: {
    Arial: 'Arial, sans-serif',
    Roboto: 'Roboto, sans-serif',
    OpenSans: 'Open Sans, sans-serif',
    Poppins: 'Poppins, sans-serif',
    SourceSansPro: 'Source Sans Pro, sans-serif'
  },
  buttons: {
    blue: {
      color: 'white',
      backgroundColor: 'blue'
    },
    green: {
      color: 'black',
      backgroundColor: 'green'
    }
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  colors
}
