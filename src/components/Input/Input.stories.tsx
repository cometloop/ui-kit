import { Meta, Story } from '@storybook/react'
import { Input } from '@lib/components/Input'
import { DateTime } from 'luxon'
import { FormEvent } from 'react'

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
  defaultValue: 'Example value',
  onChange: (v: FormEvent<HTMLInputElement>) => {
    console.log('did change', v.currentTarget.value)
  },
  error: 'This field is required'
}