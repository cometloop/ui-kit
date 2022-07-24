import { Meta, Story } from '@storybook/react'
import { DragAndDrop } from '@lib/components/DragAndDrop'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/DragAndDrop',
  component: DragAndDrop
} as Meta<typeof DragAndDrop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => <DragAndDrop {...args} />

export const Default = Template.bind({})
Default.args = {}
