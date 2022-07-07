import React from 'react'
import { ComponentStory, ComponentMeta, Meta, Story } from '@storybook/react'
import { ProgressBar, ProgressBarProps } from '@lib/components/ProgressBar'
import { Text } from '@lib/components/Text'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ProgressBar',
  component: ProgressBar
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  show: true

  // height: number
  // duration: number
  // overlayColor: string
  // overlayWidth: number
  // barColor: string
  // show: boolean
  // animate: boolean
}
