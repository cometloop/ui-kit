import { Box } from '@lib/components/Box'
import { ColorType } from '@lib/themes/colors'
import { UIKitTheme } from '@lib/themes/interfaces'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React, { ReactNode } from 'react'
import {
  ButtonStyleProps,
  ColorProps,
  LayoutProps,
  SpaceProps
} from 'styled-system'

export interface ButtonProps
  extends ButtonStyleProps,
    SpaceProps,
    LayoutProps,
    ColorProps<UIKitTheme, ColorType> {
  children: ReactNode
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Box
      // bg={theme.colors.blue}

      theme={theme}
      disabled={props.disabled}
      __css={{
        color: props.disabled ? '#999' : '#fff',
        backgroundColor: props.disabled ? '#dcdcdc' : theme.colors.blue,
        border: 0,
        cursor: props.disabled ? 'default' : 'pointer',
        textTransform: 'uppercase',
        fontWeight: 'bold'
      }}
      padding={'10px 20px'}
      borderRadius={'50px'}
      as="button"
      {...(props as any)}
      onClick={props.disabled ? undefined : props.onClick}
    />
  )
}
