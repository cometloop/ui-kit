import type { Meta, StoryObj } from '@storybook/react'
import { CLButton as Button } from './'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    children: 'Test Button',
    variant: 'text'
  }
}

export const Contained: Story = {
  args: {
    children: 'Test Button',
    variant: 'contained'
  }
}

export const Outlined: Story = {
  args: {
    children: 'Test Button',
    variant: 'outlined'
  }
}
