import {
  Card as MUCard,
  CardContent,
  CardMedia,
  Typography,
  ButtonProps,
  Button,
  Box
} from '@mui/material'
import React, { PropsWithChildren, ReactNode } from 'react'

export type CardProps = CTACardProps | TabCardProps

export interface CTACardProps {
  variant: 'cta'
  caption: string
  ctaButton?: ButtonProps
}

export interface TabCardProps {
  variant: 'tabs'
  tabs?: string[]
  children?: ReactNode
}

export interface TabCardContentProps {
  tabId: string
}

export const TabCardContent: React.FC<TabCardContentProps> = ({ tabId }) => {
  return (
    <Box>
      <Typography>Tab goes here: {tabId}</Typography>
    </Box>
  )
}

export const Card: React.FC<CardProps> = (props) => {
  const { variant } = props
  switch (variant) {
    case 'cta':
      return <CTACard {...props} />
    case 'tabs':
      return <TabCard {...props} />
  }
}

const TabCard: React.FC<TabCardProps> = (props) => {
  const { tabs, children } = props
  return (
    <MUCard sx={{ maxWidth: 500 }}>
      <CardContent>
        {tabs.map((item, i) => {
          return (
            <Typography key={i} variant="subtitle1">
              {item}
            </Typography>
          )
        })}
        {children}
      </CardContent>
    </MUCard>
  )
}

const CTACard: React.FC<CTACardProps> = (props) => {
  const { caption, ctaButton } = props

  return (
    <MUCard sx={{ maxWidth: 500 }}>
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
