import { Meta, Story } from '@storybook/react'
import { Input } from '@lib/components/Input'
import { DateTime } from 'luxon'
import { FormEvent, useEffect, useRef } from 'react'
import { notEmpty, name } from '@lib/validationRules'
import { useForm } from '@lib/hooks/useForm'
import { Button } from '@lib/components/Button'
import { Flex } from '@lib/components/Flex'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Input',
  component: Input
} as Meta<typeof Input>

interface State {
  name: string
  dob: string
  schoolYear: number
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => {
  const inputRef = useRef(undefined)
  console.log('render')

  const { onSubmit, register, errors, isValid } = useForm<State>({
    mode: 'submit'
  })

  // console.log('ERRORS', errors)

  const dobProps = register('dob', { defaultValue: '11/25/2000' })
  const schoolYearProps = register('schoolYear', { defaultValue: 2022 })

  const nameProps = register<string>('name', {
    defaultValue: 'Brian',
    errorMessage: 'Invalid name',
    validate: [notEmpty, name]
  })

  const submit = (data: State) => {
    console.log('submit', data)
  }

  useEffect(() => {
    // dobProps.setValue('11/25/1984')
    inputRef.current?.focus()
  }, [])

  console.log('form valid?', isValid)

  return (
    <Flex flexDirection={'column'}>
      <Input {...args} {...nameProps} ref={inputRef} />
      <Button onClick={onSubmit(submit)}>Submit</Button>
    </Flex>
  )
}

export const InputText = Template.bind({})
InputText.args = {
  width: [1 / 2],
  placeholder: 'Enter a value',
  focus: true
  // defaultValue: 'Example value',
  // onChange: (v: FormEvent<HTMLInputElement>) => {
  //   console.log('did change', v.currentTarget.value)
  // }
  // error: 'This field is required'
}
