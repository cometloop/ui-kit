import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CalendarCountCard } from '@lib/components/CalendarCountCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/CalendarCountCard',
  component: CalendarCountCard
} as ComponentMeta<typeof CalendarCountCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CalendarCountCard> = (args) => (
  <CalendarCountCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: '2020-2021 School Year',
  week: {
    school: 1,
    coop: 2,
    fieldTrip: 3
  },
  schoolYear: {
    school: 40,
    coop: 5,
    fieldTrip: 9
  },
  onClick: () => {
    // alert('test')
  }
}
