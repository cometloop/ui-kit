import { Box } from '@lib/components/Box'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { ElementType, forwardRef, ReactNode } from 'react'
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'

export enum FontFamily {
  Arial = 'Arial, sans-serif',
  Roboto = 'Roboto, sans-serif',
  OpenSans = 'Open Sans, sans-serif',
  Poppins = 'Poppins, sans-serif',
  SourceSansPro = 'Source Sans Pro, sans-serif'
}

export interface TextProps
  extends TypographyProps,
    SpaceProps,
    LayoutProps,
    ColorProps {
  children: ReactNode
  htmlFor?: string
  fontFamily?: FontFamily | string
  as?: ElementType
}

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const { theme } = useUIKitTheme()

  return <Box theme={theme} as="span" ref={ref} tx="text" {...props} />
})
