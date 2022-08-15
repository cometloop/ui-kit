import { Meta, Story } from '@storybook/react'
import { Input } from '@lib/components/Input'
import { FormEvent, useEffect, useRef } from 'react'
import { Flex } from 'theme-ui'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
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
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Input {...args} ref={inputRef} />
    </Flex>
  )
}

export const Default = Template.bind({})
Default.args = {
  width: [1 / 2],
  placeholder: 'Enter a value',
  focus: true,
  // defaultValue: 'Example value',
  onChange: (v: FormEvent<HTMLInputElement>) => {
    console.log('did change', v.currentTarget.value)
  }
}

export const HasError = Template.bind({})
HasError.args = {
  width: [1 / 2],
  placeholder: 'Enter a value',
  focus: true,
  // defaultValue: 'Example value',
  onChange: (v: FormEvent<HTMLInputElement>) => {
    console.log('did change', v.currentTarget.value)
  },
  error: 'This field is required'
}
