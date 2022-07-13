import { Box } from '@lib/components/Box'
import { InputError } from '@lib/components/InputError'
import { FontFamily } from '@lib/components/Text'
import css from '@styled-system/css'
import { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  LayoutProps,
  SpaceProps,
  typography,
  space,
  color,
  layout,
  BorderProps,
  border
} from 'styled-system'

export interface InputMultiLineProps
  extends LayoutProps,
    BorderProps,
    SpaceProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string
  error?: string
}

export const InputMultiLine: React.FC<InputMultiLineProps> = (props) => {
  const { error, value } = props
  const borderColor = error ? 'red' : '#ddd'

  // const [val, setVal] = useState<any>(value)
  // const _internalOnChange = (
  //   e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setVal(e.currentTarget.value)
  // }
  return (
    <Box>
      <TextArea {...(props as any)} borderColor={borderColor}>
        {value}
      </TextArea>
      <InputError>{error}</InputError>
    </Box>
  )
}

const TextArea = styled.textarea<InputMultiLineProps>(
  css({
    resize: 'none',
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    margin: 0,
    border: 'solid 1px #ddd',
    borderRadius: '10px',
    lineHeight: '1rem',
    padding: '0.75rem',
    fontFamily: FontFamily.OpenSans,
    fontSize: 'm',
    color: 'text',
    backgroundColor: '#fff',
    boxShadow: 'none',

    '&:focus': {
      outline: 0,
      borderColor: 'accent'
    },

    '&:disabled': {
      opacity: 0.6,
      filter: 'saturate(60%)'
    }
  }),
  layout,
  border,
  typography,
  space,
  color
)
