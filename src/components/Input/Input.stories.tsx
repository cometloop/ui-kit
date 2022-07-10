import { Meta, Story } from '@storybook/react'
import { Input } from '@lib/components/Input'
import { DateTime } from 'luxon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Input',
  component: Input
} as Meta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => <Input {...args} />

export const InputText = Template.bind({})
InputText.args = {
  width: [1 / 2],
  placeholder: 'Placeholder',
  focus: true,
  error: 'This field is required'
}

export const TextArea = Template.bind({})
TextArea.args = {
  variant: 'textarea',
  width: [1 / 2],
  resize: 'none',
  height: '500px',
  placeholder: 'Placeholder',
  focus: true,
  error: 'This field is required'
}
