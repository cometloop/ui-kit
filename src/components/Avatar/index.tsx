import { Box } from '@lib/components/Box'
import { CircleImageProps } from '@lib/components/CircleImage'
import { Text } from '@lib/components/Text'
import { Count } from '@lib/components/Count'

export interface AvatarProps extends Omit<CircleImageProps, 'src'> {
  initials: string
  src?: string
  fontSize?: string
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, size, initials, fontSize } = props
  const imgSize = size || '200px'
  const actualfontSize = fontSize || '100px'

  if (!src) {
    return (
      <Count size={imgSize} bg="blue">
        <Text fontSize={actualfontSize}>{initials}</Text>
      </Count>
    )
  }

  return (
    <Box
      borderRadius={'50%'}
      width={imgSize}
      height={imgSize}
      background={`url('${src}') no-repeat center`}
      backgroundSize="cover"
      {...props}
      as="div"
    />
  )
}
