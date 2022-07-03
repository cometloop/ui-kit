import React from 'react'
import { UIKitThemeProvider } from '../src/themes/UIKitThemeProvider'
import { Themes } from '../src/themes'
import { DefaultTheme, createGlobalStyle } from 'styled-components'

// Function to obtain the intended theme
const getTheme = (themeName): DefaultTheme => {
  return Themes[themeName]
}

const getGlobalStyle = (theme: any) => {
  return createGlobalStyle`
    body {
      background: ${theme?.bgColor}
    }
  `
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme) as any
  const StoryGlobalStyle = getGlobalStyle(theme)
  return (
    <>
      <StoryGlobalStyle />
      <UIKitThemeProvider theme={theme}>
        <Story />
      </UIKitThemeProvider>
    </>
  )
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
