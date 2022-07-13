import { Meta, Story } from '@storybook/react'
import { InputMultiLine } from '@lib/components/InputMultiLine'
import { DateTime } from 'luxon'
import { FormEvent } from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/InputMultiLine',
  component: InputMultiLine
} as Meta<typeof InputMultiLine>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => <InputMultiLine {...args} />

export const InputMultiLineText = Template.bind({})
InputMultiLineText.args = {
  width: [1 / 2],
  placeholder: 'Placeholder',
  focus: true,
  error: 'This field is required',
  defaultValue: 'Example value',
  height: '400px',
  onChange: (v: FormEvent<HTMLInputElement>) => {
    console.log('did change', v.currentTarget.value)
  }
}
