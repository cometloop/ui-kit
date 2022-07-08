import { Flex } from '@lib/components/Flex'
import { Text } from '@lib/components/Text'
import { DateTime } from 'luxon'
import { ReactNode } from 'react'

const size = '2rem'
const minHeight = '60px'

export interface DayProps {
  day: DateTime
  dayBelongsToTargetMonth: boolean
  dayInRange: boolean
  isToday: boolean
  isSelected: boolean
  onSelected?: (day: DateTime) => void
}

interface TodayTextProps {
  day: DateTime
}

export const SelectedText: React.FC<TodayTextProps> = ({ day }) => {
  return (
    <Flex
      id="calendar-today"
      bg="green"
      borderRadius={'100%'}
      width={size}
      height={size}
      justifyContent="center"
      alignItems={'center'}
    >
      <Text color={'white'}>{day.toFormat('d')}</Text>
    </Flex>
  )
}

export const TodayText: React.FC<TodayTextProps> = ({ day }) => {
  return (
    <Flex
      id="calendar-today"
      bg="blue"
      borderRadius={'100%'}
      width={size}
      height={size}
      justifyContent="center"
      alignItems={'center'}
    >
      <Text color={'white'}>{day.toFormat('d')}</Text>
    </Flex>
  )
}

export const EmptyDay: React.FC = () => {
  return (
    <Flex
      minHeight={minHeight}
      justifyContent={'center'}
      alignItems="center"
      width={'calc(100% / 7)'}
    >
      <div />
    </Flex>
  )
}

export const StandardDayText: React.FC<TodayTextProps> = ({ day }) => {
  return <Text color={'#222'}>{day.toFormat('d')}</Text>
}

export const OutOfRangeText: React.FC<TodayTextProps> = ({ day }) => {
  return <Text color={'#ddd'}>{day.toFormat('d')}</Text>
}

export const Day: React.FC<DayProps> = (props) => {
  const { dayBelongsToTargetMonth, dayInRange, isToday, isSelected } = props

  if (!dayBelongsToTargetMonth) {
    return <EmptyDay />
  }

  if (isSelected) {
    return (
      <DayWrap {...props}>
        <SelectedText {...props} />
      </DayWrap>
    )
  }

  if (!dayInRange) {
    return (
      <DayWrap {...props} onSelected={undefined} disabled={true}>
        <OutOfRangeText {...props} />
      </DayWrap>
    )
  }

  if (isToday) {
    return (
      <DayWrap {...props}>
        <TodayText {...props} />
      </DayWrap>
    )
  }

  if (dayInRange) {
    return (
      <DayWrap {...props}>
        <StandardDayText {...props} />
      </DayWrap>
    )
  }
}

export interface DayWrapProps extends DayProps {
  children?: ReactNode
  disabled?: boolean
}

const DayWrap: React.FC<DayWrapProps> = (props) => {
  const { day, onSelected, children, disabled } = props
  return (
    <Flex
      onClick={() => onSelected && onSelected(day)}
      __css={{
        cursor: disabled ? 'default' : 'pointer'
      }}
      // border="solid 1px #efefef"
      minHeight={minHeight}
      justifyContent={'center'}
      alignItems="center"
      width={'calc(100% / 7)'}
    >
      {children}
    </Flex>
  )
}
