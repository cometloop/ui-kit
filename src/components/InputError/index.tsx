import { FontFamily, Text } from '@lib/components/Text'
import { Box } from 'theme-ui'

interface InputErrorProps {
  children: string
}

export const InputError: React.FC<InputErrorProps> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: '0.5rem 0.8rem'
      }}
    >
      <Text
        sx={{
          height: '2rem',
          fontSize: '0.8rem',
          fontFamily: FontFamily.Roboto,
          color: 'red'
        }}
      >
        {children}
      </Text>
    </Box>
  )
}
