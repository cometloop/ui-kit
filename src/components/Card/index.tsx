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

export type CardProps = SpaceProps &
  LayoutProps &
  ColorProps<UIKitTheme, ColorType>

export const Card = styled('div').withConfig<CardProps>({
  shouldForwardProp: (prop) => shouldForwardProp(prop)
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    padding: '20px',
    borderRadius: 10,
    boxShadow: '1px 0px 16px 0px rgba(0,0,0,0.3)'
  },
  compose(space, layout, color)
)
