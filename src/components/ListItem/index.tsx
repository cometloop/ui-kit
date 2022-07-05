import { Avatar } from '@lib/components/Avatar'
import { Box } from '@lib/components/Box'
import { Flex } from '@lib/components/Flex'
import { Text } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { MdOutlineNavigateNext } from 'react-icons/md'

export interface ListItemProps<T> {
  label: string
  imgUrl?: string
  initials?: string
  fontFamily?: string
  onClick?: (item: T) => void
  item?: T
}

export const ListItem: React.FC<ListItemProps<any>> = (props) => {
  const { theme } = useUIKitTheme()
  const { label, imgUrl, initials, fontFamily, onClick, item } = props
  return (
    <Flex
      onClick={() => onClick && onClick(item)}
      bg={theme.bgColor}
      p={3}
      width={[1 / 2]}
      alignItems="center"
      justifyContent="space-between"
      border={'solid 1px #dcdcdc'}
      __css={{
        cursor: 'pointer'
      }}
    >
      <Box marginRight={'1rem'}>
        <Avatar
          size={'3rem'}
          fontSize={'1.5rem'}
          initials={initials || ''}
          src={imgUrl}
        />
      </Box>
      <Flex flex="1">
        <Text
          fontFamily={fontFamily || theme.text.fontFamily}
          color={theme.text.color}
        >
          {label}
        </Text>
      </Flex>
      <Box ml={'1rem'}>
        <MdOutlineNavigateNext color={theme.text.color} size={'1.5rem'} />
      </Box>
    </Flex>
  )
}
