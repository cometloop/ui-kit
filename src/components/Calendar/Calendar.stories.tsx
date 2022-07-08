import { Meta, Story } from '@storybook/react'
import { Calendar, CalendarProps } from '@lib/components/Calendar'
import { DateTime } from 'luxon'

import agendaItems from './agendaItems.json'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/Calendar',
  component: Calendar
} as Meta<typeof Calendar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CalendarProps> = (args) => <Calendar {...args} />

const props = {
  markedDates: agendaItems,
  minDate: '2021-08-16',
  current: DateTime.now().toFormat('yyyy-MM-dd'),
  maxDate: '2022-08-16'
}

const onDayClick = (day: DateTime) => {
  console.log(day.toString())
}

export const Default = Template.bind({})
Default.args = {
  scrollToToday: true,
  onDayClick,
  ...props
}
