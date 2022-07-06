import { FontFamily, Text, TextProps } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React from 'react'

export const Header: React.FC<TextProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Text
      as="h1"
      fontFamily={FontFamily.OpenSans}
      fontSize={theme.header.sizes.h1}
      {...props}
    />
  )
}

export const Header2: React.FC<TextProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Text
      as="h2"
      fontFamily={FontFamily.OpenSans}
      fontSize={theme.header.sizes.h2}
      {...props}
    />
  )
}

export const Header3: React.FC<TextProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Text
      as="h3"
      fontFamily={FontFamily.OpenSans}
      fontSize={theme.header.sizes.h3}
      {...props}
    />
  )
}

export const Header4: React.FC<TextProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Text
      as="h4"
      fontFamily={FontFamily.OpenSans}
      fontSize={theme.header.sizes.h4}
      {...props}
    />
  )
}
