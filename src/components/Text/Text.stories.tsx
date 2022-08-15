import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FontFamily, Text } from '@lib/components/Text'
import { lorem } from '@lib/constants'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { type: 'string' },
    fontFamily: { type: 'string' },
    fontSize: { type: 'string' }
  }
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: lorem
}

export const OpenSans = Template.bind({})
OpenSans.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.OpenSans
  }
}

export const Arial = Template.bind({})
Arial.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.Arial
  }
}

export const Poppins = Template.bind({})
Poppins.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.Poppins
  }
}

export const Roboto = Template.bind({})
Roboto.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.Roboto
  }
}

export const SourceSansPro = Template.bind({})
SourceSansPro.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.SourceSansPro
  }
}
