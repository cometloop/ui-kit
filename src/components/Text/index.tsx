import { ReactNode } from 'react'
import { SxProp, Text as ThemeText } from 'theme-ui'

export enum FontFamily {
  Arial = 'Arial, sans-serif',
  Roboto = 'Roboto, sans-serif',
  OpenSans = 'Open Sans, sans-serif',
  Poppins = 'Poppins, sans-serif',
  SourceSansPro = 'Source Sans Pro, sans-serif'
}

export interface TextProps extends SxProp {
  children: ReactNode
}

export const Text: React.FC<TextProps> = (props) => {
  return (
    <ThemeText
      sx={{
        fontFamily: FontFamily.OpenSans,
        lineHeight: 'body',
        color: 'text'
      }}
      {...props}
    >
      {props.children}
    </ThemeText>
  )
}
