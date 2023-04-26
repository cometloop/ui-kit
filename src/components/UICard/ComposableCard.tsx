import {
  Card as MUCard,
  CardContent,
  ButtonProps,
  Box,
  CardActionArea
} from '@mui/material'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { SharedCardProps } from '.'

export type Action = ButtonProps | IconType

export interface ComposableCardProps extends SharedCardProps {
  variant: 'composable'
  body: ReactNode
  left?: ReactNode
  action?: ReactNode
}

export const ComposableCard: React.FC<ComposableCardProps> = (props) => {
  const { body, left, action, sx, onClick } = props

  return (
    <MUCard
      onClick={onClick}
      sx={{ width: 1, cursor: 'pointer', userSelect: 'none', ...sx }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
            // p: 1
          }}
        >
          <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            {left}
            <Box
              sx={{
                pl: left ? 2 : 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {body}
            </Box>
          </Box>

          {action && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                pl: 2
              }}
            >
              {action}
            </Box>
          )}
        </Box>
      </CardContent>
      <CardActionArea />
    </MUCard>
  )
}
