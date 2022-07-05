import { Box } from '@lib/components/Box'
import styled from 'styled-components'
import {
  BackgroundImageProps,
  BackgroundProps,
  LayoutProps
} from 'styled-system'

export interface CircleImageProps
  extends BackgroundProps,
    BackgroundImageProps,
    LayoutProps {
  src: string
  size?: string
  alt?: string
}

export const CircleImage: React.FC<CircleImageProps> = (props) => {
  const { src, alt, size } = props
  const imgSize = size || '200px'

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
