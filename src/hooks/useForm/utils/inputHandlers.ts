import { KeyCodes } from '@lib/hooks/useForm/keycodes'
import { ChangeEvent } from 'react'

export const onKeyDownClearOnEscape =
  (update: (value: any) => void) =>
  (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === KeyCodes.ESCAPE) {
      e.currentTarget.value = ''
      update(undefined)
    }
  }
// const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//   const { value } = e.currentTarget
//   const newValue = value.toLowerCase().replace(CATEGORY_EXRESSION, '')
//   setValue(newValue)
// }
