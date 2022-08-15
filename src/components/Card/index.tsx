import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React, { ReactNode } from 'react'
import { Card as ThemeCard, BoxProps } from 'theme-ui'

export interface CardProps {
  children: ReactNode
}

export const Card: React.FC<BoxProps> = (props) => {
  const { variant } = props
  const { colorMode } = useUIKitTheme()
  const bgColor = colorMode === 'light' ? '#fff' : '#333'
  return (
    <ThemeCard
      variant={variant || 'default'}
      {...props}
      css={{ backgroundColor: bgColor }}
    />
  )
}
