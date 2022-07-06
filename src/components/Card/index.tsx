import React, { Children, ReactNode } from 'react'
import styled from 'styled-components'
import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  compose,
  space,
  layout,
  color
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { UIKitTheme } from '@lib/themes/interfaces'
import { ColorType } from '@lib/themes/colors'
import { Box } from '@lib/components/Box'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'

export type CardProps = SpaceProps &
  LayoutProps &
  ColorProps<UIKitTheme, ColorType> & {
    children: ReactNode
  }

export const Card: React.FC<CardProps> = (props) => {
  const { theme } = useUIKitTheme()
  return (
    <Box
      overflowY="auto"
      width={[1]}
      theme={theme}
      bg={theme.bgColor}
      padding={'20px'}
      borderRadius={'10px'}
      border="solid 1px #dcdcdc"
      // boxShadow={'1px 0px 16px 0px rgba(0,0,0,0.3)'}
      as="div"
      {...(props as any)}
    />
  )
}
