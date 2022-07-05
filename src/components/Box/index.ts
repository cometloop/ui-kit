import { ElementType, ReactNode } from 'react'
import styled from 'styled-components'
import {
  compose,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
  borders,
  BordersProps,
  borderWidth,
  BorderWidthProps,
  borderRadius,
  BorderRadiusProps,
  position,
  PositionProps,
  shadow
} from 'styled-system'
import css, { CSSObject, get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { ColorType } from '@lib/themes/colors'
import { UIKitTheme } from '@lib/themes/interfaces'

export type BoxVariantName = 'default'

export type BoxProps = ColorProps<UIKitTheme, ColorType> &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  FlexboxProps &
  BackgroundProps &
  BordersProps &
  BorderWidthProps &
  BorderRadiusProps &
  PositionProps & {
    as?: ElementType
    tx?: string
    sx?: CSSObject
    __css?: CSSObject
    variant?: any
    theme?: UIKitTheme
    children?: ReactNode
  }

const sx = (props: any) => css(props.sx)(props.theme)
const base = (props: any) => css(props.__css)(props.theme)
const variantFn = ({ theme = {}, variant = 'default', tx = 'variants' }) => {
  const style = css(get(theme, `${tx}.${variant}`, get(theme, variant)))(theme)

  return style
}

export const Box = styled.div.withConfig<BoxProps>({
  shouldForwardProp: (prop) => shouldForwardProp(prop)
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  base,
  variantFn,
  sx,
  compose(
    space,
    layout,
    color,
    typography,
    flexbox,
    background,
    borders,
    borderWidth,
    borderRadius,
    shadow,
    position
  )
)
