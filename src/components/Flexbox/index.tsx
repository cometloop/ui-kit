import { useTheme } from '@lib/themes/UIKitThemeProvider'
import React, { ReactNode } from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'

export interface FlexBoxProps {
  children: ReactNode
}

export const FlexBox: React.FC<FlexBoxProps> = ({ children }) => {
  return <Box>{children}</Box>
}

const Box = styled.div`
  display: flex;
`
