import {
  Card as MUCard,
  CardContent,
  CardMedia,
  Typography,
  ButtonProps,
  Button,
  Box,
  SxProps
} from '@mui/material'
import React from 'react'

export interface CTACardProps {
  variant: 'cta'
  caption: string
  ctaButton?: ButtonProps
  sx?: SxProps
}

export const CTACard: React.FC<CTACardProps> = (props) => {
  const { caption, ctaButton, sx } = props

  return (
    <MUCard sx={{ width: 1, ...sx }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://picsum.photos/500/300"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="subtitle1">{caption}</Typography>
      </CardContent>
      {ctaButton && (
        <Box
          sx={{
            mx: 2,
            mb: 2
          }}
        >
          <Button
            size="large"
            sx={{
              // p: 2,
              width: 1
            }}
            {...ctaButton}
          />
        </Box>
      )}
    </MUCard>
  )
}
