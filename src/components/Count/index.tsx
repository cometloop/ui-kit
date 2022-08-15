import { FontFamily, Text } from '@lib/components/Text'
import { colors, ColorType } from '@lib/themes/colors'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React, { ReactNode } from 'react'

import { Box, BoxProps } from 'theme-ui'

export interface CountProps extends BoxProps {
  children: ReactNode
  bg?: ColorType
  color?: string
  fontFamily?: FontFamily
}

const circleSize = 60
export const Count: React.FC<CountProps> = (props) => {
  const { theme } = useUIKitTheme()
  const fontFamily = props.fontFamily || FontFamily.Poppins
  const color = props.color || '#fff'
  return (
    <Box
      sx={{
        width: circleSize,
        height: circleSize,
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0,
        bg: props.bg || 'primary',
        borderRadius: '50%',
        fontFamily: fontFamily
      }}
      as="div"
    >
      <Text sx={{ fontSize: 3, color }}>{props.children}</Text>
    </Box>
  )
}
