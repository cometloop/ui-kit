import { Box } from '@lib/components/Box'
import { Flex } from '@lib/components/Flex'
import { FontFamily, Text } from '@lib/components/Text'

type Layout = 'horizontal' | 'vertical'

export interface InputRadioProps {
  layout?: Layout
  name: string
  options: string[]
}

export const InputRadio: React.FC<InputRadioProps> = (props) => {
  const layout = props.layout || 'horizontal'
  const { options, name } = props

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }

  return (
    <Flex flexDirection={layout === 'horizontal' ? 'row' : 'column'}>
      {options.map((i) => {
        return (
          <Box m={layout === 'horizontal' ? '0.5rem' : '0.5rem'} key={i}>
            <input
              onValueChange={onChange}
              id={i}
              type="radio"
              name={name}
              value={i}
            />
            <Text
              fontFamily={FontFamily.SourceSansPro}
              pl="0.5rem"
              as="label"
              htmlFor={i}
            >
              {i}
            </Text>
          </Box>
        )
      })}
    </Flex>
  )
}
