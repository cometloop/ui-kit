import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '.'
import { TabCardContent } from './TabCard'
import { Typography } from '@mui/material'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: CardProps) => {
  if (args.variant === 'cta') {
    return <Card {...args} />
  }

  return (
    <Card {...args}>
      <TabCardContent tabId="This Week">
        <Typography>Here is this weeks' stuff</Typography>
      </TabCardContent>
      <TabCardContent tabId="2023-2024">
        <Typography>Here is 2021-2022's stuff</Typography>
      </TabCardContent>
    </Card>
  )
}

export const CallToActionCard = Template.bind({})
CallToActionCard.args = {
  variant: 'cta',
  ctaButton: {
    variant: 'contained',
    children: 'SHARE'
  },
  caption:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, reprehenderit. Ut, ab facilis dolor veritatis officia ipsum voluptatem similique, quo ducimus maxime ad sunt enim fugit praesentium, temporibus animi quas?'
}

export const TabsCard = Template.bind({})
TabsCard.args = {
  variant: 'tabs',
  tabs: ['This Week', '2023-2024']
}
