import { PaletteMode, PaletteOptions, Theme, createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    bottomNavBar: {
      borderColor: string
      iconColor: string
      activeIconColor: string
    }
  }

  interface PaletteOptions {
    bottomNavBar: {
      borderColor: string
      iconColor: string
      activeIconColor: string
    }
  }
}

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
      },
      bottomNavBar: {
        borderColor: '#2488f6',
        activeIconColor: '#2488f6',
        iconColor: '#aaa'
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
        default: '#000',
        paper: grey[900]
      },
      text: {
        primary: '#fff',
        secondary: '#efefef',
        disabled: '#dcdcdc'
      },
      bottomNavBar: {
        borderColor: '#fff',
        activeIconColor: '#2488f6',
        iconColor: '#aaa'
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
