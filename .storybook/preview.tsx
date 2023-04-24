import type { Preview } from '@storybook/react'
import React from 'react'
import { UIKitThemeProvider } from '../src/themes/UIKitThemeProvider'
import { PaletteMode } from '@mui/material'

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
      console.log(mode)

      return (
        <>
          <UIKitThemeProvider mode={mode}>
            <Story />
          </UIKitThemeProvider>
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
