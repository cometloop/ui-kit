import { InputError } from '@lib/components/InputError'
import { FontFamily } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { forwardRef } from 'react'
import { Box, Input as ThemeInput } from 'theme-ui'

export interface InputProps {
  placeholder?: string
  error?: string
  defaultValue?: any
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error } = props
  const borderColor = error ? 'red' : '#ddd'

  const { theme, colorMode } = useUIKitTheme()

  return (
    <Box>
      <ThemeInput
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
          }
        }}
        {...props}
        ref={ref}
      />
      <InputError>{error}</InputError>
    </Box>
  )
})
