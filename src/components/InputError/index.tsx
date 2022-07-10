import { FontFamily, Text } from '@lib/components/Text'

interface InputErrorProps {
  children: string
}

export const InputError: React.FC<InputErrorProps> = ({ children }) => {
  return (
    <Text
      as="p"
      p={'0.5rem 0.8rem'}
      height={'2rem'}
      fontSize={'0.8rem'}
      fontFamily={FontFamily.Roboto}
      color={'red'}
    >
      {children}
    </Text>
  )
}
