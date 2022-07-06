import { FontFamily } from '@lib/components/Text'
import { colors } from '@lib/themes/colors'
import { UIKitTheme } from '@lib/themes/interfaces'

export const darkTheme: UIKitTheme = {
  bgColor: '#000',
  borderRadius: '5px',
  header: {
    fontFamily: 'arial',
    color: '#fff',
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2.0rem',
      h4: '1.5rem'
    }
  },
  text: {
    fontFamily: 'arial, sans-serif',
    color: '#fff',
    size: '1.0rem'
  },
  fonts: {
    Arial: 'Arial, sans-serif',
    Roboto: 'Roboto, sans-serif',
    OpenSans: 'Open Sans, sans-serif',
    Poppins: 'Poppins, sans-serif',
    SourceSansPro: 'Source Sans Pro, sans-serif'
  },
  colors
}
