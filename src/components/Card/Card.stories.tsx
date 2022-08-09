import { Meta, Story } from '@storybook/react'
import { Card, CardProps } from '@lib/components/Card'
import { Text } from '@lib/components/Text'
import { lorem } from '@lib/constants'
import { Header } from '@lib/components/Header'
import { Box } from 'theme-ui'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardProps> = (args) => <Card {...args} />

const children = (
  <Box>
    <Header as="h1">Breaking News</Header>
    <Text>{lorem}</Text>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  children
}

export const Large = Template.bind({})
Large.args = {
  children,
  variant: 'large'
}
