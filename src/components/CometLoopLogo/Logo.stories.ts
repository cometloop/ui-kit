import type { Meta, StoryObj } from '@storybook/react'
import { CometLoopLogo } from '.'

const meta = {
  title: 'Components/CometLoopLogo',
  component: CometLoopLogo,
  tags: ['autodocs']
} satisfies Meta<typeof CometLoopLogo>

export default meta
type Story = StoryObj<typeof meta>

export const White: Story = {
  args: {
    variant: 'white'
  }
}

export const Black: Story = {
  args: {
    variant: 'black'
  }
}
