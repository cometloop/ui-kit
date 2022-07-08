import { Box } from '@lib/components/Box'
import { Flex } from '@lib/components/Flex'
import { FontFamily, Text } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { BordersProps, FlexProps, LayoutProps, SpaceProps } from 'styled-system'
import { RequirementItemDto } from '@cometloop/myschoolfiles-openapi/build/v1/myschoolfiles'
import { FiImage, FiLink, FiTag } from 'react-icons/fi'
import { ReactNode } from 'react'
import { DateTime } from 'luxon'

export interface RequirementItemCardProps
  extends LayoutProps,
    SpaceProps,
    BordersProps,
    FlexProps {
  item: RequirementItemDto
  fontFamily?: string
  onClick?: (item: RequirementItemDto) => void
}

interface CountIconProps {
  count: number
  icon: ReactNode
}

const CountIcon: React.FC<CountIconProps> = ({ count, icon }) => {
  return (
    <Box
      p={'0.5rem 1rem'}
      mr="1rem"
      borderRadius="2rem"
      alignItems="center"
      justifyContent={'space-between'}
      bg="#efefef"
      display={'inline-flex'}
    >
      {icon}
      <Text
        ml={'0.5rem'}
        fontSize={'0.8rem'}
        fontWeight="bold"
        fontFamily={FontFamily.Arial}
      >
        {count}
      </Text>
    </Box>
  )
}

export const RequirementItemCard: React.FC<RequirementItemCardProps> = (
  props
) => {
  const { theme } = useUIKitTheme()
  const { onClick, item, fontFamily } = props

  const date = DateTime.fromISO(item.itemDate).toLocaleString(DateTime.DATE_MED)

  return (
    <Flex
      bg={theme.bgColor}
      p={3}
      width={[1]}
      alignItems="center"
      justifyContent="space-between"
      border={'solid 1px #dcdcdc'}
      __css={{
        cursor: 'pointer'
      }}
      {...props}
      onClick={() => onClick && onClick(item)}
    >
      <Flex flex="1" flexDirection={'column'}>
        <Box>
          <Text
            fontFamily={fontFamily || theme.text.fontFamily}
            color={theme.text.color}
          >
            <Text mb="0.3rem" as="p">
              {item.name}
            </Text>
            <Text color="#666" fontSize={'0.8rem'} as="p">
              {date}
            </Text>
          </Text>
        </Box>
        <Box m="0.5rem 0 0 0">
          <CountIcon icon={<FiTag />} count={item.tagCount} />
          <CountIcon icon={<FiLink />} count={item.urlCount} />
          <CountIcon icon={<FiImage />} count={item.photosCount} />
        </Box>
      </Flex>
      <Box ml={'1rem'}>
        <MdOutlineNavigateNext color={theme.text.color} size={'1.5rem'} />
      </Box>
    </Flex>
  )
}
