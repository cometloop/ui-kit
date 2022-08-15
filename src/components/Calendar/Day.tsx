import { Marking } from '@lib/components/Calendar/interfaces'
import { Text } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { DateTime } from 'luxon'
import { ReactNode } from 'react'
import { Flex } from 'theme-ui'

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
  const { theme } = useUIKitTheme()

  return (
    <Flex
      id="calendar-today"
      sx={{
        background: 'calendarTodayCircleColor',
        borderRadius: '100%',
        width: theme.calendar.dayCircleSize,
        height: theme.calendar.dayCircleSize,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        sx={{
          color: 'calendarTodayTextColor',
          fontSize: theme.calendar.dayFontSize
        }}
      >
        {day.toFormat('d')}
      </Text>
    </Flex>
  )
}

export const EmptyDay: React.FC = () => {
  return (
    <Flex
      sx={{
        minHeight: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100% / 7)'
      }}
    >
      <div />
    </Flex>
  )
}

export const StandardDayText: React.FC<TodayTextProps> = ({ day, marking }) => {
  const { theme } = useUIKitTheme()
  if (marking) {
    return (
      <Flex
        sx={{
          background: marking.dots[0].color,
          borderRadius: '100%',
          width: theme.calendar.dayCircleSize,
          height: theme.calendar.dayCircleSize,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text sx={{ color: 'text', fontSize: theme.calendar.dayFontSize }}>
          {day.toFormat('d')}
        </Text>
      </Flex>
    )
  }
  return (
    <Text
      sx={{
        color: 'calendarDayTextColor',
        fontSize: theme.calendar.dayFontSize
      }}
    >
      {day.toFormat('d')}
    </Text>
  )
}

export const OutOfRangeText: React.FC<TodayTextProps> = ({ day }) => {
  const { theme } = useUIKitTheme()
  return (
    <Text sx={{ color: '#ddd', fontSize: theme.calendar.dayFontSize }}>
      {day.toFormat('d')}
    </Text>
  )
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
      sx={{
        cursor: disabled ? 'default' : 'pointer',
        minHeight: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100% / 7)'
      }}
    >
      {children}
    </Flex>
  )
}
