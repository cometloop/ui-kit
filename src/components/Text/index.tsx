import { useTheme } from '@lib/themes/UIKitThemeProvider'
import React from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'

export enum FontFamily {
  Arial = 'Arial, sans-serif',
  Roboto = 'Roboto, sans-serif',
  OpenSans = 'Open Sans, sans-serif',
  Poppins = 'Poppins, sans-serif',
  SourceSansPro = 'Source Sans Pro, sans-serif'
}

export interface TextProps {
  children: string
  fontFamily?: FontFamily
  fontSize?: string | number
}

export const Text: React.FC<TextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
}

const StyledText = styled.p<TextProps>`
  font-family: ${(p) => p.fontFamily || p.theme.text.fontFamily};
  font-size: ${(p) => p.fontSize || p.theme.text.size};
  color: ${(p) => p.theme.text.color};
`
