import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from '@lib/components/Header'
import { FontFamily } from '@lib/components/Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { type: 'string' },
    fontFamily: { type: 'string' },
    fontSize: { type: 'string' }
  }
} as ComponentMeta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

const fontSize = '3rem'

export const Default = Template.bind({})
Default.args = {
  children: 'This is some sample text.'
}

export const OpenSans = Template.bind({})
OpenSans.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.OpenSans,
  fontSize
}

export const Arial = Template.bind({})
Arial.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.Arial,
  fontSize
}

export const Poppins = Template.bind({})
Poppins.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.Poppins,
  fontSize
}

export const Roboto = Template.bind({})
Roboto.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.Roboto,
  fontSize
}

export const SourceSansPro = Template.bind({})
SourceSansPro.args = {
  children: 'This is some sample text.',
  fontFamily: FontFamily.SourceSansPro,
  fontSize
}
