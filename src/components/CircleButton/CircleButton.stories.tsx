import React from 'react'
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react'
import { CircleButton } from '@lib/components/CircleButton'
import { FaPlus } from 'react-icons/fa'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CircleButton',
  component: CircleButton
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleButton> = (args) => (
  <CircleButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  p: 3,
  children: <FaPlus size={50} />
}
