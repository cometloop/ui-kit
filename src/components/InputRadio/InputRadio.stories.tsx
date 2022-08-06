import { Meta, Story } from '@storybook/react'
import { InputRadio } from '@lib/components/InputRadio'
import { DateTime } from 'luxon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/InputRadio',
  component: InputRadio
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => <InputRadio {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'transactionType',
  options: ['Income', 'Expense']
  // children: 'You must specify a value'
}
