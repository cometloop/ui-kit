import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FontFamily, Text } from '@lib/components/Text'

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
  children: 'This is some sample text.'
}

export const OpenSans = Template.bind({})
OpenSans.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.OpenSans,
  fontSize: '1rem'
}

export const Arial = Template.bind({})
Arial.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.Arial,
  fontSize: '1rem'
}

export const Poppins = Template.bind({})
Poppins.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.Poppins,
  fontSize: '1rem'
}

export const Roboto = Template.bind({})
Roboto.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.Roboto,
  fontSize: '1rem'
}

export const SourceSansPro = Template.bind({})
SourceSansPro.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.SourceSansPro,
  fontSize: '1rem'
}
