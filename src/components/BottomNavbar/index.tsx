import { BorderColor } from '@mui/icons-material'
import { Box, Fab, FabProps, Typography, useTheme } from '@mui/material'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface BottomNavbarItem {
  id: string
  label?: string
  icon: IconType | FabProps
}

export interface BottomNavbarProps {
  items: BottomNavbarItem[]
  show?: boolean
  iconSize?: number
  selected?: number
  onSelect?: (id: string, index: number) => void
}

export const BottomNavbar: React.FC<BottomNavbarProps> = (props) => {
  const { items, onSelect, selected = 0, iconSize = 18, show = true } = props

  const { palette } = useTheme()

  if (!show) return

  return (
    <Box
      sx={{
        display: 'flex',
        bottom: 0,
        left: 0,
        width: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        py: 2,
        border: 1,
        borderColor: 'transparent',
        borderTopColor: 'bottomNavBar.borderColor',
        boxShadow: 7
      }}
    >
      {items.map((item, i) => {
        const iconColor =
          i === selected
            ? palette.bottomNavBar.activeIconColor
            : palette.bottomNavBar.iconColor

        if ('children' in item.icon) {
          const fabProps = item.icon as FabProps
          return (
            <Box
              key={i}
              sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Fab
                size="small"
                color="primary"
                {...fabProps}
                onClick={() => onSelect(item.id, i)}
              >
                {fabProps.children}
              </Fab>
            </Box>
          )
        } else {
          const Icon = item.icon as IconType
          return (
            <Box
              key={i}
              onClick={() => onSelect(item.id, i)}
              sx={{
                display: 'flex',
                cursor: 'pointer',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icon size={iconSize} color={iconColor} />
              {/* <Typography variant="body1">{item.label}</Typography> */}
            </Box>
          )
        }
      })}
    </Box>
  )
}
