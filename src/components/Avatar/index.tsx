import { Image } from '@lib/components/Image'
import { ImageProps } from 'theme-ui'

export const Avatar: React.FC<ImageProps> = (props) => {
  return <Image {...props} variant="avatar" />
}
