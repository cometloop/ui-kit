import { Box } from '@lib/components/Box'
import { Button } from '@lib/components/Button'
import { FilesResult, getFilesResult } from '@lib/components/FileUpload/utils'
import { Flex } from '@lib/components/Flex'
import { Text } from '@lib/components/Text'
import React, { useState } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface FileUploadProps extends LayoutProps, SpaceProps {
  activeLabel?: string
  label?: string
  buttonLabel?: string
  validateMimeTypes: RegExp
  accept?: string
  maxFileSize?: number
  onUploaded?: (files: FilesResult) => void
}

export const FileUpload: React.FC<FileUploadProps> = (props) => {
  const {
    accept,
    validateMimeTypes,
    activeLabel,
    label,
    buttonLabel,
    onUploaded
  } = props

  const [dragActive, setDragActive] = useState(false)
  const expression: RegExp = validateMimeTypes || /(.*)+/

  // handle drag events
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
    onUploaded(getFilesResult(files, expression))
  }

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { files } = e.target
    if (files.length === 0) return
    onUploaded(getFilesResult(files, expression))
  }

  const inActiveText = label || 'Drag and drop your files here.'
  const activeText = activeLabel || 'Drop files'

  const dragAreaCopy = dragActive ? activeText : inActiveText

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
          id="label-file-upload"
          htmlFor="input-file-upload"
          style={{ display: 'block', position: 'relative' }}
        >
          {/* {dragActive && (
            <Box
              width={'100%'}
              height={'100%'}
              top={0}
              left={0}
              position="absolute"
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop as any}
            ></Box>
          )} */}

          <Flex
            __css={{
              cursor: 'pointer'
            }}
            justifyContent={'center'}
            align-items="center"
            width={[1]}
            flexDirection={'column'}
            bg="#efefef"
            p="2rem"
          >
            <Text p="2rem" textAlign={'center'} as="p">
              {dragAreaCopy}
            </Text>
            <Box alignSelf={'center'}>
              <Button pointerEvents={'none'}>{buttonLabel || 'Upload'}</Button>
            </Box>
          </Flex>

          {/* <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button">Upload a file</button>
          </div> */}
        </label>
      </Box>
    </Box>
  )
}
