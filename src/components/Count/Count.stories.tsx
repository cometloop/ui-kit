import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Count } from '@lib/components/Count'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Count',
  component: Count
} as ComponentMeta<typeof Count>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Count> = (args) => <Count {...args} />

export const Default = Template.bind({})
Default.args = {
  // bg: 'yellow',

  children: 23
}
export const DifferentTextColor = Template.bind({})
DifferentTextColor.args = {
  // bg: 'yellow',
  color: '#000',
  children: 23
}
