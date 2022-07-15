import {
  FieldConfig,
  FormValidationMode,
  InternalRegisterState,
  ValidateFunc
} from '@lib/hooks/useForm/interfaces'
import { onKeyDownClearOnEscape } from '@lib/hooks/useForm/utils/inputHandlers'

import { ChangeEvent, useEffect, useRef, useState } from 'react'

export interface FormProps {
  mode?: FormValidationMode
}

const defaultProps: FormProps = {
  mode: 'change'
}

export const useForm = <TState>(props: FormProps = defaultProps) => {
  const { mode } = props

  const [formState, setFormState] = useState<Record<string, any>>({})
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})

  const registerState = useRef<Record<string, InternalRegisterState>>({})

  // const getState = () => formState as TState

  const onSubmit = (handler: (data: TState) => void) => {
    return () => {
      const errorState: Record<string, string | undefined> = {}
      let anyErrors = false
      for (const [key, internal] of Object.entries(registerState.current)) {
        const isValid = internal.validate?.(formState[key], formState)
        if (!isValid) {
          anyErrors = true
        }
        errorState[key] = isValid ? undefined : internal.errorMessage
      }
      setErrors(errorState)
      if (!anyErrors) {
        handler(formState as TState)
      }
    }
  }

  const register = <T>(name: string, config: FieldConfig<T, any>) => {
    const { defaultValue, errorMessage, validate } = config

    if (formState[name] === undefined) {
      formState[name] = defaultValue || undefined
    }

    const setValue = (value: T) => {
      setFormState({
        ...formState,
        [name]: value
      })
    }

    registerState.current[name] = {
      errorMessage,
      validate: (value: T, context: any): boolean => {
        if (!validate) return true
        return validate
          .map((x) => {
            return x(value, context)
          })
          .every((x) => x)
      }
    }

    return {
      onKeyUp: onKeyDownClearOnEscape(setValue),
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        if (mode === 'change') {
          const isValid = registerState.current[name]?.validate?.(
            value as unknown as T,
            formState
          )

          setErrors({
            ...errors,
            [name]: isValid ? undefined : errorMessage
          })
        }
        setValue(value as any)
      },
      defaultValue: formState[name],
      error: errors[name],
      setValue
    }
  }

  const isValid = Object.values(errors).every((x) => x === undefined)

  return {
    register,
    // getState,
    formState,
    isValid,
    errors,
    onSubmit
  }
}
