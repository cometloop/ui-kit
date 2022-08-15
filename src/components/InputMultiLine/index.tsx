import { InputError } from '@lib/components/InputError'
import { FontFamily } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { forwardRef, TextareaHTMLAttributes } from 'react'

import { Box, Textarea, TextareaProps } from 'theme-ui'

export interface InputMultiLineProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextareaProps {
  placeholder?: string
  error?: string
}

export const InputMultiLine = forwardRef<
  HTMLTextAreaElement,
  InputMultiLineProps
>((props, ref) => {
  const { error, value } = props
  const { theme, colorMode } = useUIKitTheme()
  const borderColor = error ? 'red' : '#ddd'
  return (
    <Box>
      <Textarea
        sx={{
          boxSizing: 'border-box',
          display: 'block',
          width: '100%',
          margin: 0,
          border: 'solid 1px #ddd',
          borderRadius: 4,
          lineHeight: '1rem',
          padding: '0.75rem',
          fontFamily: FontFamily.OpenSans,
          fontSize: 1,
          color: 'text',
          backgroundColor: colorMode === 'light' ? 'white' : '#333',
          boxShadow: 'none',
          borderColor: borderColor,
          '&:focus': {
            outline: 0
            // borderColor: 'accent'
          },

          '&:disabled': {
            opacity: 0.6,
            filter: 'saturate(60%)'
          },
          ...props.sx
        }}
      />
      <InputError>{error}</InputError>
    </Box>
  )
})
