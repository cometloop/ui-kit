import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ButtonProps } from '@lib/components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Download',
  onClick: () => {
    alert('test')
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Download',
  disabled: true,
  onClick: () => {
    alert('test')
  }
}
