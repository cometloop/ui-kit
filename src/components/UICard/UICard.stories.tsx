import type { Meta, StoryObj } from '@storybook/react'
import { UICard, UICardProps } from '.'
import { TabCardContent } from './TabCard'
import { Typography } from '@mui/material'
import { ListItemCardProps } from './ListItemCard'
import { HiArrowRightCircle } from 'react-icons/hi2'

const meta = {
  title: 'Components/UICard',
  component: UICard,
  tags: ['autodocs']
} satisfies Meta<typeof UICard>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: UICardProps) => {
  if (args.variant === 'tabs') {
    return (
      <UICard {...args}>
        <TabCardContent tabId="This Week">
          <Typography>Here is this weeks' stuff</Typography>
        </TabCardContent>
        <TabCardContent tabId="2023-2024">
          <Typography>Here is 2021-2022's stuff</Typography>
        </TabCardContent>
      </UICard>
    )
  }

  return <UICard {...args} />
}

export const TabsCard = Template.bind({})
TabsCard.args = {
  variant: 'tabs',
  tabs: ['This Week', '2023-2024']
}

export const ListItemCardAll = Template.bind({})
const listItemCardProps: ListItemCardProps = {
  variant: 'action',
  title: 'Emily Smith',
  description: 'This is some copy underneath the title',
  avatarProps: {
    src: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944',
    children: 'BT'
  },
  onClick: () => {
    console.log('clicked me')
  },
  action: <HiArrowRightCircle size={30} />
}

ListItemCardAll.args = listItemCardProps

export const ListItemCardNoAvatar = Template.bind({})
ListItemCardNoAvatar.args = {
  variant: 'action',
  title: 'Emily Smith',
  description: 'This is some copy underneath the title',

  onClick: () => {
    console.log('clicked me')
  },
  action: <HiArrowRightCircle size={30} />
}

export const ListItemCardNoAvatarNoAction = Template.bind({})
ListItemCardNoAvatarNoAction.args = {
  variant: 'action',
  title: 'Emily Smith',
  description: 'This is some copy underneath the title',

  onClick: () => {
    console.log('clicked me')
  }
}

export const ComposableCard = Template.bind({})
ComposableCard.args = {
  variant: 'composable',
  left: (
    <img
      width="20px"
      src="https://myschoolfiles.com/static/cd25ebe52a1bef0c798a5f77296a827f/b4c9d/app-icon.webp"
    />
  ),
  body: <Typography>Emily Smith</Typography>,
  action: <HiArrowRightCircle size={30} />,

  onClick: () => {
    console.log('clicked me')
  }
}

export const CallToActionCard = Template.bind({})
CallToActionCard.args = {
  variant: 'cta',
  ctaButton: {
    variant: 'contained',
    children: 'SHARE'
  },
  caption:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, reprehenderit. Ut, ab facilis dolor veritatis officia ipsum voluptatem similique, quo ducimus maxime ad sunt enim fugit praesentium, temporibus animi quas?'
}
