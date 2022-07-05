import { Box } from '@lib/components/Box'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React, { ReactNode } from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'
import {
  ButtonStyleProps,
  FlexboxProps,
  LayoutProps,
  opacity,
  SpaceProps,
  StylesProps
} from 'styled-system'

export interface ButtonProps extends ButtonStyleProps, SpaceProps, LayoutProps {
  children: ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Box
      bg={theme.colors.blue}
      color={theme.colors.white}
      theme={theme}
      __css={{
        border: 0,
        cursor: 'pointer'
      }}
      padding={'10px 20px'}
      borderRadius={'50px'}
      as="button"
      {...(props as any)}
    />
  )
}
