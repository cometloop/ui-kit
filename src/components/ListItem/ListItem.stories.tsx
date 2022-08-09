import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { ListItem } from '@lib/components/ListItem'
import { FaPlus } from 'react-icons/fa'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ListItem',
  component: ListItem
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
)

const item = {
  name: 'Jen Barber'
}

const onClick = (data: any) => {
  alert(JSON.stringify(data))
}

export const Default = Template.bind({})
Default.args = {
  label: 'Jen Barber',
  imgUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80',
  initials: 'JB',
  item,
  onClick
}

export const Initials = Template.bind({})
Initials.args = {
  label: 'Jen Barber',
  initials: 'JB',
  item,
  onClick
}

export const HideAvatar = Template.bind({})
HideAvatar.args = {
  label: 'Jen Barber',
  initials: 'JB',
  item,
  hideAvatar: true,
  onClick
}
