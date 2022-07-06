import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { Link } from '@lib/components/Link'
import { FaPlus } from 'react-icons/fa'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Link',
  component: Link
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  url: '',
  label: 'Example link'
}
