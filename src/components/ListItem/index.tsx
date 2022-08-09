import { Avatar } from '@lib/components/Avatar'
import { Text } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { BordersProps, FlexProps, LayoutProps, SpaceProps } from 'styled-system'
import { Box, Flex } from 'theme-ui'

export interface ListItemProps<T>
  extends LayoutProps,
    SpaceProps,
    BordersProps,
    FlexProps {
  label: string
  imgUrl?: string
  initials?: string
  fontFamily?: string
  onClick?: (item: T) => void
  hideAvatar?: boolean
  item?: T
}

export const ListItem: React.FC<ListItemProps<any>> = (props) => {
  const { colorMode } = useUIKitTheme()
  const { label, imgUrl, initials, fontFamily, onClick, item, hideAvatar } =
    props
  return (
    <Flex
      onClick={() => onClick && onClick(item)}
      sx={{
        bg: colorMode === 'light' ? '#fff' : '#333',
        p: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 'solid 1px #dcdcdc',
        cursor: 'pointer'
      }}
    >
      {!hideAvatar && (
        <Box marginRight={'1rem'}>
          <Avatar width={'3rem'} height={'3rem'} src={imgUrl} />
        </Box>
      )}

      <Flex sx={{ flex: '1' }}>
        <Text>{label}</Text>
      </Flex>
      <Box ml={'1rem'}>
        <MdOutlineNavigateNext color={'text'} size={'1.5rem'} />
      </Box>
    </Flex>
  )
}
