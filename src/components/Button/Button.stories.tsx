import type { Meta, StoryObj } from '@storybook/react'
import { CLButton as Button } from '.'
import { useColorScheme } from '@mui/material'
import { useUIKit } from '../../themes/UIKitProvider'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: typeof Button) => {
  return (
    <div>
      <Button {...args}></Button>
    </div>
  )
}

export const Text = Template.bind({})

Text.args = {
  children: 'Test Button',
  variant: 'text'
}

export const Contained = Template.bind({})
Contained.args = {
  children: 'Test Button',
  variant: 'contained'
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Test Button',
  variant: 'outlined'
}
