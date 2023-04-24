import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  useColorScheme
} from '@mui/material'
import { ReactNode } from 'react'
import { getTheme } from './theme'
import React from 'react'
import { grey } from '@mui/material/colors'
import { useUIKit } from './UIKitProvider'

export interface UIKitThemeProviderProps {
  children: ReactNode
}

export const UIKitThemeProvider: React.FC<UIKitThemeProviderProps> = ({
  children
}) => {
  const { mode } = useUIKit()
  const theme = getTheme(mode)
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
