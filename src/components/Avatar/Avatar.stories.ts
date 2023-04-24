import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '.'
import blackImage from '../assets/comet-loop-logo-black.png'
import { green } from '@mui/material/colors'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944',
    sx: {
      width: 100,
      height: 100
    }
  }
}

export const Initials: Story = {
  args: {
    sizes: '10',
    children: 'BT',
    sx: {
      bgcolor: green[900],
      color: '#fff',
      fontSize: 50,
      width: 100,
      height: 100
    }
  }
}
