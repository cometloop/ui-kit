import { Meta, Story } from '@storybook/react'
import { InputMultiLine } from '@lib/components/InputMultiLine'
import { FormEvent } from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/InputMultiLine',
  component: InputMultiLine
} as Meta<typeof InputMultiLine>

interface State {
  description: string
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => {
  return <InputMultiLine {...args} />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
  focus: true,
  sx: {
    width: '50%',
    height: '400px'
  },

  onChange: (v: FormEvent<HTMLInputElement>) => {
    console.log('did change', v.currentTarget.value)
  }
}

export const HasError = Template.bind({})
HasError.args = {
  placeholder: 'Placeholder',
  focus: true,
  sx: {
    width: '50%',
    height: '400px'
  },
  error: 'This field is required',

  onChange: (v: FormEvent<HTMLInputElement>) => {
    console.log('did change', v.currentTarget.value)
  }
}
