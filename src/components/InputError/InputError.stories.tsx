import { Meta, Story } from '@storybook/react'
import { InputError } from '@lib/components/InputError'
import { DateTime } from 'luxon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/InputError',
  component: InputError
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => <InputError {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'You must specify a value'
}
