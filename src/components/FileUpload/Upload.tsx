import { UploadProps } from '@lib/components/FileUpload/interfaces'
import { Text } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { Box, Button, Flex } from 'theme-ui'

export const Upload: React.FC<UploadProps> = (props) => {
  const { isDragging } = props
  const inActiveText = 'Drag and drop your files here.'
  const activeText = 'Drop files'
  const dragAreaCopy = isDragging ? activeText : inActiveText
  const { colorMode } = useUIKitTheme()
  const bgColor = colorMode === 'light' ? '#efefef' : '#333'
  return (
    <Flex
      sx={{
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        bg: bgColor,
        padding: '2rem'
      }}
    >
      <Text
        sx={{
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        {dragAreaCopy}
      </Text>
      <Box sx={{ alignSelf: 'center' }}>
        <Button variant="primary" sx={{ pointerEvents: 'none' }}>
          Upload
        </Button>
      </Box>
    </Flex>
  )
}
