import { InputError } from '@lib/components/InputError'
import { FontFamily } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { forwardRef } from 'react'
import { Box, Input as ThemeInput, ThemeUIStyleObject } from 'theme-ui'

export interface InputProps {
  placeholder?: string
  error?: string
  defaultValue?: any
  sx?: ThemeUIStyleObject
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, sx } = props
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
          lineHeight: '100%',
          padding: '0.75rem',
          fontFamily: FontFamily.OpenSans,
          fontSize: 1,
          color: theme.input.textColor,
          backgroundColor: theme.input.bgColor,
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
          ...sx
        }}
        {...props}
        ref={ref}
      />
      <InputError>{error}</InputError>
    </Box>
  )
})
