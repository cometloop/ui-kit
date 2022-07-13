import { Meta, Story } from '@storybook/react'
import { FileUpload } from '@lib/components/FileUpload'
import { DateTime } from 'luxon'
import { FormEvent } from 'react'
import { FilesResult } from '@lib/components/FileUpload/utils'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/FileUpload',
  component: FileUpload
} as Meta<typeof FileUpload>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => <FileUpload {...args} />

export const FileUploadText = Template.bind({})
FileUploadText.args = {
  width: [1 / 2],
  // label: 'Drop here',
  // activeLabel: 'drop it',
  // buttonLabel: 'Upload Images',
  // validateMimeTypes: /\/pdf/,
  onUploaded: (files: FilesResult) => {
    console.log('on uploaded', files)
  }
}
