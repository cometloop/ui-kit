import React, { ReactNode, useEffect } from 'react'
import { UIKitThemeProvider } from '../src/themes/UIKitThemeProvider'
import { useColorMode } from 'theme-ui'

const withThemeProvider = (Story, context) => {
  return (
    <UIKitThemeProvider theme={undefined}>
      <StorybookTheme theme={context.globals.theme}>
        <Story />
      </StorybookTheme>
    </UIKitThemeProvider>
  )
}

const StorybookTheme: React.FC<{ theme: string; children: ReactNode }> = ({
  theme,
  children
}) => {
  const [_, setColorMode] = useColorMode()
  useEffect(() => {
    setColorMode(theme)
  }, [theme])

  return <>{children}</>
}

export const decorators = [withThemeProvider]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'globe',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true
    }
  }
}
