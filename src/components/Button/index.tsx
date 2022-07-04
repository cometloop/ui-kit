import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'

export interface ButtonProps {
  label: string
  rounded?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick } = props

  const clicked = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <StyledButton onClick={clicked} {...props}>
      {label}
    </StyledButton>
  )
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
`
