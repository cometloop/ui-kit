import React from 'react'
import { CTACard, CTACardProps } from './CTACard'
import { TabCard, TabCardProps } from './TabCard'

export type CardProps = CTACardProps | TabCardProps

export const Card: React.FC<CardProps> = (props) => {
  const { variant } = props
  switch (variant) {
    case 'cta':
      return <CTACard {...props} />
    case 'tabs':
      return <TabCard {...props} />
  }
}
