import { Box } from '@lib/components/Box'
import { Flex } from '@lib/components/Flex'
import {
  ALWAYS_ALLOWED_KEYS,
  ALLOWED_KEYS,
  DECIMAL_KEYS,
  MINUS_KEYS
} from '@lib/components/InputCurrency/utils'
import { InputError } from '@lib/components/InputError'
import { FontFamily, Text } from '@lib/components/Text'

import css from '@styled-system/css'
import currency from 'currency.js'
import React, { forwardRef, InputHTMLAttributes, useState } from 'react'
import styled from 'styled-components'
import {
  SpaceProps,
  typography,
  space,
  color,
  layout,
  BorderProps,
  border
} from 'styled-system'

export interface InputCurrencyOnChange {
  value: number
  valueString: string
}

export interface InputCurrencyProps extends BorderProps, SpaceProps {
  placeholder?: string
  error?: string
  defaultValue?: any
  onValueChange: (e: InputCurrencyOnChange) => void
}

export const InputCurrency = forwardRef<HTMLInputElement, InputCurrencyProps>(
  (props, ref) => {
    const { error, defaultValue, placeholder, onValueChange } = props
    const borderColor = error ? 'red' : '#ddd'

    const [value, setValue] = useState<string>(defaultValue || '')

    const internalOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.currentTarget.value

      if (/^[0-9\-].+\-/.test(e.currentTarget.value)) {
        console.log('remove the mispalced -')
        newValue = newValue.replace('-', '')
      }
      setValue(newValue)

      onValueChange({
        value: currency(newValue).value,
        valueString: currency(newValue).format()
      })

      // const precision = /[0-9]+\.[0-9]{1,2}$/.test(e.currentTarget.value)
      //   ? 2
      //   : 0

      // if (/^-/.test(e.currentTarget.value)) {
      //   setValue(e.currentTarget.value)
      //   return
      // }

      // const cents = e.currentTarget.value.split('.')[1]
      // if (cents?.length >= 0) {
      //   setValue(e.currentTarget.value)
      //   onChange &&
      //     onChange({
      //       value: currency(e.currentTarget.value).value,
      //       valueString: e.currentTarget.value
      //     })
      // } else {
      //   const newValue = currency(e.currentTarget.value, { precision }).format({
      //     symbol: '',
      //     separator: ','
      //   })
      //   setValue(newValue)
      //   onChange &&
      //     onChange({
      //       value: currency(newValue).value,
      //       valueString: newValue
      //     })
      // }
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
      console.log(e.code)
      if (ALWAYS_ALLOWED_KEYS.findIndex((x) => x === e.code) >= 0) {
        return
      }

      const index = ALLOWED_KEYS.findIndex((x) => x === e.code)
      if (index === -1) {
        return e.preventDefault()
      }

      if (
        DECIMAL_KEYS.findIndex((x) => x === e.code) >= 0 &&
        /\./.test(value)
      ) {
        return e.preventDefault()
      }

      if (MINUS_KEYS.findIndex((x) => x === e.code) >= 0 && /^\-/.test(value)) {
        console.log('block -')
        return e.preventDefault()
      }

      if (/([0-9]+)?\.[0-9]{2}$/.test(value)) {
        // return e.preventDefault()
      }
      // console.log('no prob')
    }

    const onKeyUp = (e: React.KeyboardEvent) => {
      if (e.code === 'Escape') {
        setValue('')
      }
      // setValue(currency(e.currentTarget.value, { precision: 2 }))
    }

    const onBlur = () => {
      if (value) {
        setValue(currency(value).format({ separator: '', symbol: '' }))
        // setValue(currency(value).format({ symbol: '', separator: ',' }))
      }
    }

    return (
      <Box
        __css={{
          position: 'relative'
        }}
      >
        <Box
          __css={{
            pointerEvents: 'none',
            position: 'absolute',
            top: '0.75rem',
            left: '0.5rem'
          }}
        >
          <Text color="#666">$</Text>
        </Box>

        <Box width={[1]}>
          <TextInput
            p={'0.5rem 1.25rem'}
            placeholder={placeholder}
            maxLength={15}
            onChange={internalOnChange as any}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            type="text"
            value={value}
            ref={ref}
            borderColor={borderColor}
          />
        </Box>

        <InputError>{error}</InputError>
      </Box>
    )
  }
)

const TextInput = styled.input<any>(
  css({
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
    WebkitAppearance: 'none',
    '&:focus': {
      outline: 0,
      borderColor: 'accent'
    },
    '::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    '::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
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
