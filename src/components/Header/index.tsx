import { Heading, SxProp } from 'theme-ui'

import React from 'react'

export interface HeaderProps extends SxProp {
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
        color: 'text'
      }}
      {...props}
    />
  )
}
