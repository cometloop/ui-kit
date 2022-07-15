import { Box } from '@lib/components/Box'
import { InputError } from '@lib/components/InputError'
import { FontFamily } from '@lib/components/Text'
import css from '@styled-system/css'
import { forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  SpaceProps,
  typography,
  space,
  color,
  layout,
  BorderProps,
  border
} from 'styled-system'

export interface InputProps
  extends BorderProps,
    SpaceProps,
    InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  error?: string
  defaultValue?: any
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error } = props
  const borderColor = error ? 'red' : '#ddd'

  // console.log('Input render')

  return (
    <Box>
      <TextInput {...props} ref={ref} borderColor={borderColor} />
      <InputError>{error}</InputError>
    </Box>
  )
})

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
