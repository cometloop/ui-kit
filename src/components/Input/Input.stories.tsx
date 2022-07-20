import { Meta, Story } from '@storybook/react'
import { Input } from '@lib/components/Input'
import { FormEvent, useEffect, useRef } from 'react'
import { Flex } from '@lib/components/Flex'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Input',
  component: Input
} as Meta<typeof Input>

interface State {
  name?: string
  dob?: string
  schoolYear?: number
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => {
  const inputRef = useRef(undefined)
  console.log('render')

  useEffect(() => {
    // dobProps.setValue('11/25/1984')
    inputRef.current?.focus()
  }, [])

  return (
    <Flex flexDirection={'column'}>
      <Input {...args} ref={inputRef} />
    </Flex>
  )
}

export const InputText = Template.bind({})
InputText.args = {
  width: [1 / 2],
  placeholder: 'Enter a value',
  focus: true,
  defaultValue: 'Example value',
  onChange: (v: FormEvent<HTMLInputElement>) => {
    console.log('did change', v.currentTarget.value)
  },
  error: 'This field is required'
}
