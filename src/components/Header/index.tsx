import { BoxProps, Heading, SxProp } from 'theme-ui'

import React, { ReactNode } from 'react'

export interface HeaderProps extends BoxProps {
  children: ReactNode
  as?: any
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Heading
      as={props.as ? props.as : 'h1'}
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        color: 'text',
        ...props.sx
      }}
    >
      {props.children}
    </Heading>
  )
}
