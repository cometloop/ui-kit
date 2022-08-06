import { GlobalStyles } from '@lib/styles/GlobalStyles'
import { UIKitTheme } from '@lib/themes/interfaces'
import { theme as defaultTheme } from '@lib/themes/theme'
import { ThemeProvider } from 'theme-ui'
import React, { ReactNode } from 'react'

import '@fontsource/open-sans'
import '@fontsource/poppins'
import '@fontsource/source-sans-pro'
import '@fontsource/roboto'

interface Props {
  theme?: UIKitTheme
  children: ReactNode
}

export const UIKitThemeProvider: React.FC<Props> = ({ theme, children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
    </>
  )
}
