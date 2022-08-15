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
}

export const Text: React.FC<TextProps> = (props) => {
  return (
    <ThemeText
      sx={{
        fontFamily: FontFamily.OpenSans,
        lineHeight: 'body',
        // color: props.sx?.color || 'text',
        ...props.sx
      }}
    >
      {props.children}
    </ThemeText>
  )
}
