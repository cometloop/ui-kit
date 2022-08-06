import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FontFamily, Text } from '@lib/components/Text'

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat egestas scelerisque. Nam placerat massa quis urna mollis, vitae ultrices massa blandit. Vivamus id tempus nibh. Suspendisse rhoncus tellus sem, in sodales leo gravida ac. Aenean at convallis nisl. Praesent rhoncus ultrices efficitur. Quisque in turpis non neque laoreet vehicula non posuere augue. Phasellus venenatis et magna a pellentesque. Maecenas suscipit dolor in orci lobortis imperdiet. Pellentesque et sem quam. Nulla facilisi. Ut sit amet metus mi.

Nam sed eros in est dignissim maximus. Quisque fringilla, leo at ultrices dignissim, mauris nisl tincidunt leo, iaculis porta sapien mauris sed mauris. Donec enim metus, interdum at risus eget, volutpat condimentum arcu. Nullam posuere sagittis risus id mollis. Nunc vitae orci cursus velit dignissim finibus. Nam convallis tincidunt sollicitudin. Nunc venenatis ante a ligula venenatis, nec tristique libero porttitor. Donec congue aliquam dolor quis efficitur.

Vivamus urna arcu, pellentesque in congue in, blandit a nunc. Nullam in euismod elit. Mauris pellentesque rhoncus nisi, ac ornare nisl tristique eu. Vivamus ante metus, bibendum vitae mi nec, blandit suscipit mauris. In consectetur, quam elementum suscipit vulputate, turpis massa consectetur neque, vel vehicula leo justo et ligula. Suspendisse id bibendum ante. Donec tincidunt purus quis lobortis ullamcorper. Maecenas diam magna, tristique quis urna vitae, ultrices dignissim nunc. Vestibulum pulvinar erat porta, pellentesque nisi eu, sagittis quam. Suspendisse fermentum, sapien in tristique consectetur, nisi dolor tristique magna, sit amet congue nibh dolor eu justo. Vivamus hendrerit sem a pretium consequat. Pellentesque massa libero, mattis et iaculis non, blandit id velit. Nullam pretium sit amet nibh eget ultrices. Proin rutrum mauris ex, a porta mauris lobortis at. Proin ex urna, varius faucibus posuere vitae, pulvinar a tellus.  

`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { type: 'string' },
    fontFamily: { type: 'string' },
    fontSize: { type: 'string' }
  }
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: lorem
}

export const OpenSans = Template.bind({})
OpenSans.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.OpenSans
  }
}

export const Arial = Template.bind({})
Arial.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.Arial
  }
}

export const Poppins = Template.bind({})
Poppins.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.Poppins
  }
}

export const Roboto = Template.bind({})
Roboto.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.Roboto
  }
}

export const SourceSansPro = Template.bind({})
SourceSansPro.args = {
  children: lorem,
  sx: {
    fontFamily: FontFamily.SourceSansPro
  }
}
