import { Meta, Story } from '@storybook/react'
import { DatePicker, DatePickerProps } from '@lib/components/DatePicker'
import { DateTime } from 'luxon'
import { useForm } from '@lib/hooks/useForm'
import { useEffect, useState } from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/DatePicker',
  component: DatePicker
} as Meta<typeof DatePicker>

interface FormState {
  date: string
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DatePickerProps> = (args) => {
  const { formState, onSubmit, register, errors, isValid } =
    useForm<FormState>()
  const { setValue } = register('date', { defaultValue: args.selected })

  const onSelected = (day: DateTime) => {
    const val = day.toFormat('yyyy-MM-dd')
    setValue(val)
    console.log('val updated', val)
  }

  console.log('render')

  return (
    <DatePicker {...args} selected={formState.date} onSelected={onSelected} />
  )
}

const props: DatePickerProps = {
  minDate: DateTime.now().minus({ month: 1 }).toFormat('yyyy-MM-dd'),
  selected: undefined,
  maxDate: DateTime.now().plus({ month: 1 }).toFormat('yyyy-MM-dd')
}

const onSelected = (day: DateTime) => {
  console.log(day.toString())
}

export const Default = Template.bind({})
Default.args = {
  onSelected,
  ...props
}

export const Selected = Template.bind({})
Selected.args = {
  onSelected,
  ...props,
  selected: DateTime.now().minus({ days: 3 }).toFormat('yyyy-MM-dd')
}
