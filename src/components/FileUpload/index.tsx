import { Box } from '@lib/components/Box'
import { FilesResult, UploadProps } from '@lib/components/FileUpload/interfaces'
import { Upload } from '@lib/components/FileUpload/Upload'
import { getFilesResult } from '@lib/components/FileUpload/utils'
import React, { useState } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

export interface FileUploadProps extends LayoutProps, SpaceProps {
  validateMimeTypes?: RegExp
  accept?: string
  maxFileSizeMegabytes?: number
  children?: (props: UploadProps) => JSX.Element
  onUploaded?: (files: FilesResult) => void
}

export const FileUpload: React.FC<FileUploadProps> = (props) => {
  const {
    children,
    accept,
    maxFileSizeMegabytes,
    validateMimeTypes,
    onUploaded
  } = props

  const [dragActive, setDragActive] = useState(false)
  const expression: RegExp = validateMimeTypes || /(.*)+/

  const handleDrag = function (e: React.FormEvent<any>) {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const { files } = e.dataTransfer
    if (files.length === 0) return
    onUploaded &&
      onUploaded(getFilesResult(files, expression, maxFileSizeMegabytes))
  }

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { files } = e.target
    if (files.length === 0) return
    onUploaded &&
      onUploaded(getFilesResult(files, expression, maxFileSizeMegabytes))
  }

  const Component = children || Upload

  return (
    <Box>
      <Box
        as="form"
        id="cometloop-file-upload"
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop as any}
        onSubmit={(e: any) => e.preventDefault()}
      >
        <input
          accept={accept}
          style={{ display: 'none' }}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          htmlFor="input-file-upload"
          style={{ display: 'block', position: 'relative' }}
        >
          <Component isDragging={dragActive} />
        </label>
      </Box>
    </Box>
  )
}
