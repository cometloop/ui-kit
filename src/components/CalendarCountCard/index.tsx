import { Box } from '@lib/components/Box'
import { Button } from '@lib/components/Button'
import { FontFamily, Text } from '@lib/components/Text'
import { Card } from '@lib/components/Card'
import { Count } from '@lib/components/Count'
import { Flex } from '@lib/components/Flex'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import React from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'
import { ButtonStyleProps, opacity, StylesProps } from 'styled-system'
import { ColorType } from '@lib/themes/colors'

export interface ICalendarCount {
  school: number
  coop: number
  fieldTrip: number
}

export type CalendarCountActive = 'week' | 'year'

export interface CalendarCountCardProps {
  count: ICalendarCount
  label: string
}

interface CountItemProps {
  label: string
  count: string | number
  bg: ColorType
}

const CountItem: React.FC<CountItemProps> = (props) => {
  const { label, count, bg } = props
  return (
    <Flex flexDirection={'column'} textAlign="center" alignItems={'center'}>
      <Count bg={bg}>{count}</Count>
      <Text fontFamily={FontFamily.Arial} fontWeight="bold" pt="10px">
        {label}
      </Text>
    </Flex>
  )
}

export const CalendarCountCard: React.FC<CalendarCountCardProps> = (props) => {
  const { count, label } = props
  const total = count.coop + count.fieldTrip + count.school
  return (
    <Card width={'450px'}>
      <Flex>
        <Text
          fontFamily={FontFamily.SourceSansPro}
          fontSize={4}
          color="black"
          width={[1]}
        >
          {label || 'This week'}
        </Text>
        {/* <Button width={'200px'}>{schoolYearLabel}</Button> */}
      </Flex>
      <Flex
        pt={'2rem'}
        flexDirection={'row'}
        justifyContent="space-evenly"
        alignItems={'center'}
      >
        <CountItem bg="blue" label="SCHOOL" count={count.school} />
        <CountItem bg="yellow" label="CO-OP" count={count.coop} />
        <CountItem bg="pink" label="FIELD TRIP" count={count.fieldTrip} />
        <CountItem bg="green" label="TOTAL" count={total} />
      </Flex>
    </Card>
  )
}
