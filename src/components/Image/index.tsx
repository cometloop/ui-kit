import { ImageProps, Image as ThemeImage } from 'theme-ui'

export const Image: React.FC<ImageProps> = (props) => {
  return (
    <ThemeImage {...props} css={{ width: props.width, height: props.height }} />
  )
}
