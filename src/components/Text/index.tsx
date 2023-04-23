import { ReactNode } from 'react'
import { BoxProps, SxProp, Text as ThemeText } from 'theme-ui'

export enum FontFamily {
  Arial = 'Arial, sans-serif',
  Roboto = 'Roboto, sans-serif',
  OpenSans = 'Open Sans, sans-serif',
  Poppins = 'Poppins, sans-serif',
  SourceSansPro = 'Source Sans Pro, sans-serif'
}

export interface TextProps extends BoxProps {
  children: ReactNode
  ref?: any
}

export const Text: React.FC<TextProps> = (props) => {
  return (
    <ThemeText
      sx={{
        fontFamily: 'body',
        lineHeight: 'body',
        // color: props.sx?.color || 'text',
        ...props.sx
      }}
      ref={props.ref}
    >
      {props.children}
    </ThemeText>
  )
}
