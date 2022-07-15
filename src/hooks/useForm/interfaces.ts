export type FormValidationMode = 'submit' | 'change' | 'blur'

export interface FieldConfig<T, C> {
  defaultValue?: T
  validate?: ValidateFunc<T, C>[]
  errorMessage?: string
}

export type ValidateFunc<T, C> = (value: T, context: C) => boolean

export interface InternalRegisterState {
  validate?: ValidateFunc<any, any>
  errorMessage?: string
}
