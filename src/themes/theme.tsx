import { PaletteMode, PaletteOptions, Theme, createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const getPaletteColorsBasedOnMode = (
  mode: PaletteMode
): PaletteOptions => {
  if (mode === 'light') {
    return {
      primary: {
        main: '#2488f6',
        dark: '#2a529f'
      },
      secondary: {
        main: '#2a529f'
      },
      error: {
        main: '#f44336'
      },
      warning: {
        main: '#f7b844'
      },
      success: {
        main: '#29c6c1'
      }
    }
  } else {
    return {
      primary: {
        main: '#2488f6',
        dark: '#2a529f'
      },
      secondary: {
        main: '#2a529f'
      },
      error: {
        main: '#f44336'
      },
      warning: {
        main: '#f7b844'
      },
      success: {
        main: '#29c6c1'
      },
      background: {
        default: grey[900],
        paper: grey[800]
      },
      text: {
        primary: '#fff',
        secondary: '#efefef',
        disabled: '#dcdcdc'
      }
    }
  }
}

export const getTheme = (mode: PaletteMode): Theme => {
  const theme = createTheme({
    palette: {
      mode,
      ...getPaletteColorsBasedOnMode(mode)
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        }
      }
    }
  })

  return theme
}
