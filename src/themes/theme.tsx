import {
  PaletteMode,
  PaletteOptions,
  Theme,
  createTheme,
  responsiveFontSizes
} from '@mui/material'
import { grey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    bottomNavBar: {
      borderColor: string
      iconColor: string
      activeIconColor: string
    }
    cards: {
      tabCard: {
        bgColor: string
        activeBgColor: string
        color: string
        activeColor: string
      }
    }
  }

  interface PaletteOptions {
    bottomNavBar: {
      borderColor: string
      iconColor: string
      activeIconColor: string
    }
    cards: {
      tabCard: {
        bgColor: string
        activeBgColor: string
        color: string
        activeColor: string
      }
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
      background: {
        default: '#fff',
        paper: '#fff'
      },
      bottomNavBar: {
        borderColor: '#2488f6',
        activeIconColor: '#2488f6',
        iconColor: '#aaa'
      },
      cards: {
        tabCard: {
          bgColor: 'transparent',
          activeBgColor: '#2488f6',
          color: '#000',
          activeColor: '#fff'
        }
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
      },
      cards: {
        tabCard: {
          bgColor: 'transparent',
          activeBgColor: '#2488f6',
          color: '#fff',
          activeColor: '#fff'
        }
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

  return responsiveFontSizes(theme, {
    factor: 1
  })
}
