import React from 'react'
import { ComponentStory, ComponentMeta, Meta, Story } from '@storybook/react'
import { Scrollable, ScrollableProps } from '@lib/components/Scrollable'
import { Text } from '@lib/components/Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Scrollable',
  component: Scrollable
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ScrollableProps> = (args) => (
  <Scrollable {...args} width={[1]} />
)

const getElements = (amount = 50) => {
  const items = []
  for (let i = 0; i <= amount; i++) {
    items.push(<Text as={'p'}>This is sample text</Text>)
  }
  return items
}

export const Default = Template.bind({})
Default.args = {
  bg: '#888',
  children: getElements()
}
