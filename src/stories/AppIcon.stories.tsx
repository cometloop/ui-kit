import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppIcon } from '@lib/components/AppIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/App Icon',
  component: AppIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { type: 'string' }
  }
} as ComponentMeta<typeof AppIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppIcon> = (args) => <AppIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 200
}
