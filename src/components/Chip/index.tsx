import { FontFamily, Text } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { ReactNode } from 'react'
import { Box, Flex } from 'theme-ui'

export type ChipProps<T> = {
  children: string
  fontSize?: string
  icon?: ReactNode
  fontFamily?: FontFamily | string
  item?: T
  onClick?: (item: T) => void
}

export const Chip: React.FC<ChipProps<any>> = (props) => {
  const { onClick, item } = props
  const onDidClick = () => {
    onClick && onClick(item)
  }
  return (
    <Box
      as="div"
      {...(props as any)}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        p: '0.5rem 1rem',
        background: 'primary',
        color: 'white',
        borderRadius: '1rem',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      onClick={onDidClick}
    >
      <Text
        sx={{
          fontFamily: props.fontFamily || FontFamily.Roboto,
          fontSize: props.fontSize,
          color: '#fff'
        }}
      >
        {props.children}
      </Text>
      {props.icon !== undefined && (
        <Flex sx={{ alignSelf: 'center', marginLeft: '0.5rem' }}>
          {props.icon}
        </Flex>
      )}
    </Box>
  )
}
