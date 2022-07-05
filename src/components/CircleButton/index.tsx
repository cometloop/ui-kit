import { Box } from '@lib/components/Box'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React, { ReactNode } from 'react'
import { ButtonStyleProps, LayoutProps, SpaceProps } from 'styled-system'

export interface CircleButtonProps
  extends ButtonStyleProps,
    SpaceProps,
    LayoutProps {
  children: ReactNode
  onClick?: () => void
}

export const CircleButton: React.FC<CircleButtonProps> = (props) => {
  const { onClick } = props
  const { theme } = useUIKitTheme()
  return (
    <Box
      onClick={() => {
        onClick && onClick()
      }}
      bg={theme.colors.blue}
      color={theme.colors.white}
      theme={theme}
      __css={{
        border: 0,
        cursor: 'pointer'
      }}
      // padding={'2rem'}
      borderRadius={'50%'}
      as="button"
      {...(props as any)}
    />
  )
}
