import React from 'react'
import appIcon from '../../assets/images/myschoolfiles-logo.png'
import { Image, ImageProps, useColorMode } from 'theme-ui'
import { useTheme } from '@lib/themes/interfaces'

export interface AppIconProps extends ImageProps {
  size?: string | number
  lightIcon?: string
  darkIcon?: string
}

export const AppIcon: React.FC<AppIconProps> = (props) => {
  const [colorMode] = useColorMode()
  const { size, lightIcon, darkIcon } = props
  const src = colorMode === 'light' ? lightIcon : darkIcon
  return (
    <div style={{ width: size || 100 }}>
      <Image alt="app-icon" {...props} src={src} />
    </div>
  )
}
