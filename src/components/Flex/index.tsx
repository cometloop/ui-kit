import { Box } from '@lib/components/Box'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React, { ReactNode } from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'

export interface FlexProps {
  children: ReactNode
}

export const Flex = styled(Box)<FlexProps>({
  display: 'flex'
})
