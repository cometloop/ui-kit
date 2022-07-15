import { Meta, Story } from '@storybook/react'
import { FileUpload } from '@lib/components/FileUpload'
import { Upload } from '@lib/components/FileUpload/Upload'
import { FilesResult, UploadProps } from '@lib/components/FileUpload/interfaces'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/FileUpload',
  component: FileUpload
} as Meta<typeof FileUpload>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<any> = (args) => <FileUpload {...args} />

export const FileUploadText = Template.bind({})
FileUploadText.args = {
  accept: 'image/*',
  maxFileSizeMegabytes: 0,
  validateMimeTypes: /image\/.*/,
  onUploaded: (files: FilesResult) => {
    console.log('on uploaded', files)
  }
}
