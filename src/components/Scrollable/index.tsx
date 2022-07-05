import { Box } from '@lib/components/Box'
import { ColorType } from '@lib/themes/colors'
import { UIKitTheme } from '@lib/themes/interfaces'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React, { forwardRef, ReactNode } from 'react'
import { LayoutProps, SpaceProps, ColorProps, ShadowProps } from 'styled-system'

export interface ScrollableProps
  extends LayoutProps,
    SpaceProps,
    ShadowProps,
    ColorProps<UIKitTheme, ColorType> {
  children: ReactNode
}

export const Scrollable: React.FC<ScrollableProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Box
      overflowY="auto"
      width={[1 / 2]}
      height={'100vh'}
      theme={theme}
      as="div"
      {...(props as any)}
    />
  )
}
