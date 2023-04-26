import {
  Card as MUCard,
  CardContent,
  Typography,
  ButtonProps,
  Box,
  AvatarProps,
  Avatar,
  CardActionArea
} from '@mui/material'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { SharedCardProps } from '.'

export type Action = ButtonProps | IconType

export interface ListItemCardProps extends SharedCardProps {
  variant: 'action'
  title: string
  description?: string
  avatarProps?: AvatarProps
  action?: ReactNode
}

export const ListItemCard: React.FC<ListItemCardProps> = (props) => {
  const { avatarProps, action, title, description, sx, onClick } = props

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
            {avatarProps && <Avatar {...avatarProps} />}
            <Box
              sx={{
                pl: avatarProps ? 2 : 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  textOverflow: 'ellipsis',
                  whiteSpace: 'no-wrap'
                }}
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  sx={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'no-wrap'
                  }}
                  variant="subtitle2"
                >
                  {description}
                </Typography>
              )}
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
