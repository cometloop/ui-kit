import React from 'react'
import { ComponentStory, ComponentMeta, Meta, Story } from '@storybook/react'
import { Card, CardProps } from '@lib/components/Card'
import { Text } from '@lib/components/Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardProps> = (args) => <Card {...args} width={[1]} />

export const Default = Template.bind({})
Default.args = {
  children: <Text>This is some sample text</Text>
}
