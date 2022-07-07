import { Box } from '@lib/components/Box'
import { Flex } from '@lib/components/Flex'
import { FontFamily, Text } from '@lib/components/Text'
import { ColorType } from '@lib/themes/colors'
import { UIKitTheme } from '@lib/themes/interfaces'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { ReactNode } from 'react'
import { ColorProps, LayoutProps, SpaceProps } from 'styled-system'

export type ChipProps<T> = SpaceProps &
  LayoutProps &
  ColorProps<UIKitTheme, ColorType> & {
    children: string
    fontSize?: string
    icon?: ReactNode
    fontFamily?: FontFamily | string
    item?: T
    onClick?: (item: T) => void
  }

export const Chip: React.FC<ChipProps<any>> = (props) => {
  const { theme } = useUIKitTheme()
  const { onClick, item } = props
  const onDidClick = () => {
    onClick && onClick(item)
  }
  return (
    <Box
      display={'inline-flex'}
      alignItems="center"
      p="0.5rem 1rem"
      theme={theme}
      bg={'blue'}
      color="white"
      borderRadius={'1rem'}
      as="div"
      __css={{
        cursor: 'pointer',
        userSelect: 'none'
      }}
      {...(props as any)}
      onClick={onDidClick}
    >
      <Text
        fontFamily={props.fontFamily || FontFamily.Roboto}
        fontSize={props.fontSize}
      >
        {props.children}
      </Text>
      {props.icon !== undefined && (
        <Flex alignSelf={'center'} ml={'0.5rem'}>
          {props.icon}
        </Flex>
      )}
    </Box>
  )
}
