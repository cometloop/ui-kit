import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { ReactNode } from 'react'
import { getTheme } from './theme'
import React from 'react'
import { grey } from '@mui/material/colors'

export interface UIKitThemeProviderProps {
  mode?: PaletteMode
  children: ReactNode
}

export const UIKitThemeProvider: React.FC<UIKitThemeProviderProps> = ({
  mode,
  children
}) => {
  const theme = getTheme(mode)
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
