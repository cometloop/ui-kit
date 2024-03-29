import React, { MouseEventHandler } from 'react'
import { CTACard, CTACardProps } from './CTACard'
import { TabCard, TabCardProps } from './TabCard'
import { ListItemCard, ListItemCardProps } from './ListItemCard'
import { SxProps } from '@mui/material'
import { ComposableCard, ComposableCardProps } from './ComposableCard'

export type UICardProps =
  | CTACardProps
  | TabCardProps
  | ListItemCardProps
  | ComposableCardProps

export interface SharedCardProps {
  sx?: SxProps
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const UICard: React.FC<UICardProps> = (props) => {
  const { variant } = props
  switch (variant) {
    case 'cta':
      return <CTACard {...props} />
    case 'tabs':
      return <TabCard {...props} />
    case 'action':
      return <ListItemCard {...props} />
    case 'composable':
      return <ComposableCard {...props} />
  }
}
