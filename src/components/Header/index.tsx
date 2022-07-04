import { TextProps } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'

export const Header: React.FC<TextProps> = (props) => {
  return <StyledHeader {...props}>{props.children}</StyledHeader>
}

const StyledHeader = styled.h1<TextProps>`
  font-family: ${(p) => p.theme.header.fontFamily};
  font-size: ${(p) => p.theme.header.sizes.h1};
  color: ${(p) => p.theme.text.color};
`
