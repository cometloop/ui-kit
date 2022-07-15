import { ValidateFunc } from '@lib/hooks/useForm/interfaces'

export const notEmpty: ValidateFunc<any, any> = (value: string) => {
  if (!value) {
    return false
  }
  if (value.trim().length === 0) {
    return false
  }
  return true
}
