import { Text } from '@lib/components/Text'
import { useUIKitTheme } from '@lib/themes/UIKitThemeProvider'
import { DateTime } from 'luxon'
import { ReactNode } from 'react'
import { Flex } from 'theme-ui'

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
  const { theme } = useUIKitTheme()
  return (
    <Flex
      sx={{
        background: 'green',
        borderRadius: '100%',
        width: theme.calendar.dayCircleSize,
        height: theme.calendar.dayCircleSize,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      id="calendar-today"
    >
      <Text sx={{ color: 'white', fontSize: theme.calendar.dayFontSize }}>
        {day.toFormat('d')}
      </Text>
    </Flex>
  )
}

export const TodayText: React.FC<TodayTextProps> = ({ day }) => {
  const { theme } = useUIKitTheme()
  return (
    <Flex
      id="calendar-today"
      sx={{
        bg: 'calendarTodayCircleColor',
        borderRadius: '100%',
        width: theme.calendar.dayCircleSize,
        height: theme.calendar.dayCircleSize,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text sx={{ color: 'white', fontSize: theme.calendar.dayFontSize }}>
        {day.toFormat('d')}
      </Text>
    </Flex>
  )
}

export const EmptyDay: React.FC = () => {
  return (
    <Flex
      sx={{
        minHeight,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100% / 7)'
      }}
    >
      <div />
    </Flex>
  )
}

export const StandardDayText: React.FC<TodayTextProps> = ({ day }) => {
  const { theme } = useUIKitTheme()
  return (
    <Text sx={{ color: 'text', fontSize: theme.calendar.dayFontSize }}>
      {day.toFormat('d')}
    </Text>
  )
}

export const OutOfRangeText: React.FC<TodayTextProps> = ({ day }) => {
  const { theme } = useUIKitTheme()
  return (
    <Text sx={{ color: '#222', fontSize: theme.calendar.dayFontSize }}>
      {day.toFormat('d')}
    </Text>
  )
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
      sx={{
        cursor: disabled ? 'default' : 'pointer',
        minHeight,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100% / 7)'
      }}
    >
      {children}
    </Flex>
  )
}
