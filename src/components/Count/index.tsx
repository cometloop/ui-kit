import { Box } from '@lib/components/Box'
import { FontFamily, Text } from '@lib/components/Text'
import { ColorType } from '@lib/themes/colors'
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

export interface CountProps extends ButtonStyleProps, SpaceProps, LayoutProps {
  children: ReactNode
  bg: ColorType
  fontFamily?: FontFamily
}

const circleSize = 60
export const Count: React.FC<CountProps> = (props) => {
  const { theme } = useUIKitTheme()
  const fontFamily = props.fontFamily || FontFamily.Poppins
  return (
    <Box
      bg={theme.colors[props.bg]}
      color={theme.colors.white}
      fontFamily={fontFamily}
      theme={theme}
      __css={{
        width: circleSize,
        height: circleSize,
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0
        // padding: '10px'
      }}
      // padding={'10px 20px'}
      borderRadius={'50%'}
      as="div"
      {...(props as any)}
    >
      <Text fontSize={3}>{props.children}</Text>
    </Box>
  )
}
