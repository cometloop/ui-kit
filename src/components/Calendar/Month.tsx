import { Box } from '@lib/components/Box'
import { FontFamily, Text } from '@lib/components/Text'
import { isToday, weekDays } from '@lib/components/Calendar/utils'
import { Flex } from '@lib/components/Flex'
import { Header4 } from '@lib/components/Header'
import { DateTime, Interval } from 'luxon'
import { Day } from '@lib/components/Calendar/Day'
import { Agenda } from '@lib/components/Calendar/interfaces'
import { useCalendar } from '@lib/hooks/useCalendar'
import { dayInRange } from '@lib/utils/date'

export interface MonthProps {
  datetime: DateTime
  start: DateTime
  end: DateTime
  onDayClick?: (day: DateTime) => void
  markedDates: Agenda
}

export const Month: React.FC<MonthProps> = (props) => {
  const { datetime, start, end, markedDates, onDayClick } = props

  const { startPrefillDay, lastPrefillDay } = useCalendar(datetime)

  const currentMonth = datetime.month

  const interval = Interval.fromDateTimes(
    startPrefillDay,
    lastPrefillDay
  ).splitBy({ day: 1 })

  return (
    <Box width={[1]}>
      <Header4
        fontFamily={FontFamily.Roboto}
        color="#666"
        textAlign={'center'}
        m="2rem 0"
      >
        {datetime.toFormat('MMMM yyyy')}
      </Header4>
      <Flex flexDirection={'row'} mb="1rem">
        {weekDays.map((day) => {
          return (
            <Flex width={'calc(100% / 7)'} justifyContent={'center'} key={day}>
              <Text color="#888">{day}</Text>
            </Flex>
          )
        })}
      </Flex>
      <Flex flexDirection={'row'} flexWrap="wrap">
        {interval.map((i, index) => {
          const dayBelongsToMonth = currentMonth === i.start.month
          const inRange = dayInRange(i.start, start, end)
          const markKey = i.start.toFormat('yyyy-MM-dd')
          return (
            <Day
              marking={markedDates[markKey]}
              dayInRange={inRange}
              onDayClick={onDayClick}
              isToday={isToday(i.start)}
              key={index}
              day={i.start}
              dayBelongsToTargetMonth={dayBelongsToMonth}
            />
          )
        })}
      </Flex>
    </Box>
  )
}
