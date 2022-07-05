import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CircleImage, CircleImageProps } from '@lib/components/CircleImage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CircleImage',
  component: CircleImage
} as ComponentMeta<typeof CircleImage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleImage> = (args) => (
  <CircleImage {...args} />
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80',
  onClick: () => {
    // alert('test')
  }
}
