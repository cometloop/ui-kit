import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Image } from '@lib/components/Image'

// More on default Image: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Image',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { type: 'string' }
  }
} as ComponentMeta<typeof Image>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Avatar = Template.bind({})
Avatar.args = {
  width: '100px',
  height: '100px',
  src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80',
  variant: 'avatar'
}

export const Default = Template.bind({})
Default.args = {
  // width: '100px',
  src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80'
}
