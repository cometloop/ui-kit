import React, { useContext } from 'react'
import styled, { ThemeContext, ThemeProps } from 'styled-components'
import appIcon from '../../assets/images/myschoolfiles-logo.png'

export interface AppIconProps {
  size?: string | number
}

export const AppIcon: React.FC<AppIconProps> = (props) => {
  const themeContext = useContext(ThemeContext)
  console.log(themeContext)
  const { size } = props
  return (
    <div style={{ width: size || 100 }}>
      <Img src={appIcon} alt="app-icon" />
    </div>
  )
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`
