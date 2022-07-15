import { Meta, Story } from '@storybook/react'
import { InputMultiLine } from '@lib/components/InputMultiLine'
import { DateTime } from 'luxon'
import { FormEvent } from 'react'
import { useForm } from '@lib/hooks/useForm'
import { notEmpty } from '@lib/validationRules'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/InputMultiLine',
  component: InputMultiLine
} as Meta<typeof InputMultiLine>

interface State {
  description: string
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => {
  const { onSubmit, register, errors, isValid } = useForm<State>({
    mode: 'change'
  })

  const props = register<string>('description', {
    errorMessage: 'Invalid description',
    validate: [notEmpty]
  })

  return <InputMultiLine {...args} {...props} />
}

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
