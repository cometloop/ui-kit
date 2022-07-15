import { ValidateFunc } from '@lib/hooks/useForm/interfaces'

const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

export const name: ValidateFunc<string, any> = (value: string) => {
  return nameRegex.test(value)
}
