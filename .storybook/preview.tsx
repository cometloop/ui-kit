import type { Preview } from '@storybook/react'
import React, { ReactNode, useEffect } from 'react'
import { UIKitProvider, useUIKit } from '../src/themes/UIKitProvider'
import { UIKitThemeProvider } from '../src/themes/UIKitThemeProvider'
import { PaletteMode } from '@mui/material'

interface StoryComponentProps {
  mode: PaletteMode
  children: ReactNode
}

const StoryComponent: React.FC<StoryComponentProps> = ({ mode, children }) => {
  const { toggleMode, mode: currentMode } = useUIKit()

  useEffect(() => {
    if (mode !== currentMode) toggleMode()
  }, [mode])

  return <>{children}</>
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.theme as PaletteMode
      return (
        <>
          <UIKitProvider mode={mode}>
            <UIKitThemeProvider>
              <StoryComponent mode={mode}>
                <Story />
              </StoryComponent>
            </UIKitThemeProvider>
          </UIKitProvider>
        </>
      )
    }
  ]
}

export const globalTypes = {
  theme: {
    title: 'Mode',
    description: 'Color mode for UIKit',
    defaultValue: 'dark',
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

export default preview
