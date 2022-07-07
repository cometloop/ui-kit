import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { RequirementItemDto } from '@cometloop/myschoolfiles-openapi/build/v1/myschoolfiles'

import { FaPlus } from 'react-icons/fa'
import { RequirementItemCard } from '@lib/components/RequirementItemCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/RequirementItemCard',
  component: RequirementItemCard
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RequirementItemCard> = (args) => (
  <RequirementItemCard {...args} />
)

const item: RequirementItemDto = {
  name: 'School item',
  documentCount: 1,
  id: 3,
  itemDate: new Date().toISOString(),
  photosCount: 2,
  tagCount: 3,
  description: '',
  studentIds: [],
  documents: [],
  photos: [],
  schoolYearId: 1,
  schoolYearLabel: '2022',
  urlCount: 4,
  urls: [],
  tags: []
}

const onSelect = (data: any) => {
  alert(JSON.stringify(data))
}

export const Default = Template.bind({})
Default.args = {
  item,
  onClick: onSelect
}
