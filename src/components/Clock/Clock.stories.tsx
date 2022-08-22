import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Clock } from '@lib/components/Clock'

// More on default Image: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Clock',
  component: Clock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { type: 'string' }
  }
} as ComponentMeta<typeof Clock>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />

export const Default = Template.bind({})
Default.args = {
  // width: '100px',
  src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80'
}
