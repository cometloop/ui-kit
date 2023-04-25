import type { Meta, StoryObj } from '@storybook/react'
import { BottomNavbar, BottomNavbarItem } from '.'
import { RiDashboardFill } from 'react-icons/ri'
import { FaChild } from 'react-icons/fa'
import { TiCalendarOutline } from 'react-icons/ti'
import { BsCalendar3 } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'
import { green } from '@mui/material/colors'
import AddIcon from '@mui/icons-material/Add'

const meta = {
  title: 'Components/BottomNavbar',
  component: BottomNavbar,
  tags: ['autodocs']
} satisfies Meta<typeof BottomNavbar>

export default meta
type Story = StoryObj<typeof meta>

const items: BottomNavbarItem[] = [
  {
    id: 'dashboard',
    icon: RiDashboardFill,
    label: 'Dashboard'
  },
  {
    id: 'students',
    icon: FaChild,
    label: 'Students'
  },
  {
    id: 'add',
    icon: {
      children: <AddIcon />
    }
  },
  {
    id: 'calendar',
    icon: BsCalendar3,
    label: 'Calendar'
  },
  {
    id: 'settings',
    icon: IoSettingsSharp,
    label: 'Settings'
  }
]

export const Default: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    items,
    onSelect(id, index) {
      console.log(id, index)
    }
  }
}
