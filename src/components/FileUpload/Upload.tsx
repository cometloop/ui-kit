import { Box } from '@lib/components/Box'
import { Button } from '@lib/components/Button'
import { UploadProps } from '@lib/components/FileUpload/interfaces'
import { Flex } from '@lib/components/Flex'
import { Text } from '@lib/components/Text'

export const Upload: React.FC<UploadProps> = (props) => {
  const { isDragging } = props

  const inActiveText = 'Drag and drop your files here.'
  const activeText = 'Drop files'

  const dragAreaCopy = isDragging ? activeText : inActiveText

  return (
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
        <Button pointerEvents={'none'}>Upload</Button>
      </Box>
    </Flex>
  )
}
