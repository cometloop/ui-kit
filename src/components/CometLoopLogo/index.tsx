import { Box, Button, styled } from '@mui/material'
import React from 'react'

import whiteImage from '../assets/comet-loop-logo-white.png'
import blackImage from '../assets/comet-loop-logo-black.png'

const DEFAULT_SIZE = 100

type LogoVariant = 'white' | 'black'

export interface LogoProps {
  size?: number
  variant?: LogoVariant
}

export const CometLoopLogo: React.FC<LogoProps> = ({
  variant = 'white',
  size = DEFAULT_SIZE
}) => {
  const img = variant === 'white' ? whiteImage : blackImage
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${img})`,
        width: `${size}px`,
        height: `${size}px`
      }}
    ></Box>
  )
}
