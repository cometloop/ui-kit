import type { Meta, StoryObj } from '@storybook/react'
import { Card, TabCardContent } from '.'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CallToActionCard: Story = {
  args: {
    variant: 'cta',
    ctaButton: {
      variant: 'contained',
      children: 'SHARE'
    },
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, reprehenderit. Ut, ab facilis dolor veritatis officia ipsum voluptatem similique, quo ducimus maxime ad sunt enim fugit praesentium, temporibus animi quas?'
  }
}

export const TabsCard: Story = {
  args: {
    variant: 'tabs',
    tabs: ['This Week', '2023-2024'],
    children: (
      <>
        <TabCardContent tabId="This week" />
        <TabCardContent tabId="2023-2024" />
      </>
    )
    // ch
  }
}
