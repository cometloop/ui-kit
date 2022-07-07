import React from 'react'
import { ComponentStory, ComponentMeta, Meta, Story } from '@storybook/react'
import { Chip, ChipProps } from '@lib/components/Chip'
import { Text } from '@lib/components/Text'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Chip',
  component: Chip
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChipProps<any>> = (args) => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Educational Activity Log',
  fontSize: '1rem',
  item: {
    category: 'edu',
    id: 1
  },
  onClick: (x: any) => {
    alert(JSON.stringify(x))
  }
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Educational Activity Log',
  fontSize: '1rem',
  item: {
    category: 'edu',
    id: 1
  },
  onClick: (x: any) => {
    alert(JSON.stringify(x))
  },
  icon: <IoIosArrowDropdownCircle />
}
