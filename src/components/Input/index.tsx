import { Box } from '@lib/components/Box'
import { InputError } from '@lib/components/InputError'
import { FontFamily } from '@lib/components/Text'
import { ColorType } from '@lib/themes/colors'
import { UIKitTheme } from '@lib/themes/interfaces'
import css from '@styled-system/css'
import { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  typography,
  space,
  color,
  layout,
  borderRadius,
  BorderProps,
  border
} from 'styled-system'

export type InputVariant = 'text' | 'textarea'

export interface InputProps
  extends LayoutProps,
    BorderProps,
    SpaceProps,
    ColorProps<UIKitTheme, ColorType> {
  placeholder?: string
  error?: string
  variant?: InputVariant
}

export const Input: React.FC<InputProps> = (props) => {
  const { variant, error } = props
  const borderColor = error ? 'red' : '#ddd'

  if (variant === 'textarea') {
    return (
      <Box>
        <TextArea {...(props as any)} borderColor={borderColor} />
        <InputError>{error}</InputError>
      </Box>
    )
  }

  return (
    <Box>
      <TextInput {...(props as any)} borderColor={borderColor} />
      <InputError>{error}</InputError>
    </Box>
  )
}

const TextInput = styled.input<InputProps>(
  css({
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    margin: 0,
    border: 'solid 1px #ddd',
    borderRadius: '10px',
    lineHeight: '1rem',
    padding: '0.75rem',
    fontFamily: FontFamily.OpenSans,
    fontSize: 'm',
    color: 'text',
    backgroundColor: '#fff',
    boxShadow: 'none',

    '&:focus': {
      outline: 0,
      borderColor: 'accent'
    },

    '&:disabled': {
      opacity: 0.6,
      filter: 'saturate(60%)'
    }
  }),
  layout,
  border,
  typography,
  space,
  color
)

const TextArea = styled.textarea<InputProps>(
  css({
    resize: 'none',
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    margin: 0,
    border: 'solid 1px #ddd',
    borderRadius: '10px',
    lineHeight: '1rem',
    padding: '0.75rem',
    fontFamily: FontFamily.OpenSans,
    fontSize: 'm',
    color: 'text',
    backgroundColor: '#fff',
    boxShadow: 'none',

    '&:focus': {
      outline: 0,
      borderColor: 'accent'
    },

    '&:disabled': {
      opacity: 0.6,
      filter: 'saturate(60%)'
    }
  }),
  layout,
  border,
  typography,
  space,
  color
)
