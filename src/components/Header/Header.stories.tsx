import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { Header } from '@lib/components/Header'
import { FontFamily } from '@lib/components/Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: Header
} as Meta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

const headerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat egestas scelerisque. Nam placerat massa quis urna mollis, vitae ultrices massa blandit.`

export const Default = Template.bind({})
Default.args = {
  children: headerText,
  sx: {
    // fontSize: 4
  },
  as: 'h1'
}
