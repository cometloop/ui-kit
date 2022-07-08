import { Marking } from '@lib/components/Calendar/interfaces'
import { Flex } from '@lib/components/Flex'
import { Text } from '@lib/components/Text'
import { DateTime } from 'luxon'
import { ReactNode } from 'react'

const size = '3rem'

export interface DayProps {
  day: DateTime
  dayBelongsToTargetMonth: boolean
  dayInRange: boolean
  isToday: boolean
  onDayClick?: (day: DateTime) => void
  marking?: Marking
}

interface TodayTextProps {
  day: DateTime
  marking?: Marking
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
  const size = '3rem'

  return (
    <Flex
      // border="solid 1px #efefef"
      minHeight="100px"
      justifyContent={'center'}
      alignItems="center"
      width={'calc(100% / 7)'}
    >
      <div />
    </Flex>
  )
}

export const StandardDayText: React.FC<TodayTextProps> = ({ day, marking }) => {
  if (marking) {
    return (
      <Flex
        bg={marking.dots[0].color}
        borderRadius={'100%'}
        width={size}
        height={size}
        justifyContent="center"
        alignItems={'center'}
      >
        <Text color={'#fff'}>{day.toFormat('d')}</Text>
      </Flex>
    )
  }
  return <Text color={'#222'}>{day.toFormat('d')}</Text>
}

export const OutOfRangeText: React.FC<TodayTextProps> = ({ day }) => {
  return <Text color={'#ddd'}>{day.toFormat('d')}</Text>
}

export const Day: React.FC<DayProps> = (props) => {
  const { dayBelongsToTargetMonth, dayInRange, isToday, marking } = props

  if (!dayBelongsToTargetMonth) {
    return <EmptyDay />
  }

  if (!dayInRange) {
    return (
      <DayWrap {...props} onDayClick={undefined} disabled={true}>
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

  // return (
  //   <Flex
  //     onClick={() => onDayClick && onDayClick(day)}
  //     __css={{
  //       cursor: 'pointer'
  //     }}
  //     // border="solid 1px #efefef"
  //     minHeight="100px"
  //     justifyContent={'center'}
  //     alignItems="center"
  //     width={'calc(100% / 7)'}
  //   >
  //     {isToday ? <TodayText day={day} /> : <StandardDayText day={day} />}
  //   </Flex>
  // )
}

export interface DayWrapProps extends DayProps {
  children?: ReactNode
  disabled?: boolean
}

const DayWrap: React.FC<DayWrapProps> = (props) => {
  const { day, onDayClick, children, disabled, marking } = props
  return (
    <Flex
      onClick={() => onDayClick && onDayClick(day)}
      __css={{
        cursor: disabled ? 'default' : 'pointer'
      }}
      // border="solid 1px #efefef"
      minHeight="100px"
      justifyContent={'center'}
      alignItems="center"
      width={'calc(100% / 7)'}
    >
      {children}
    </Flex>
  )
}
