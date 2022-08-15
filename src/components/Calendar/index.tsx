import { Agenda } from '@lib/components/Calendar/interfaces'
import { Month } from '@lib/components/Calendar/Month'
import { DateTime, Interval } from 'luxon'
import { useLayoutEffect } from 'react'
import { Box } from 'theme-ui'

export interface CalendarProps {
  markedDates?: Agenda
  current: string
  minDate: string
  maxDate: string
  scrollToToday?: boolean
  onDayClick?: (day: DateTime) => void
}

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { markedDates, minDate, maxDate, scrollToToday, onDayClick } = props

  const start = DateTime.fromISO(minDate)
  const end = DateTime.fromISO(maxDate)

  const interval = Interval.fromDateTimes(start, end.endOf('month')).splitBy({
    months: 1
  })

  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id}`)
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'center' })
    }
  }

  useLayoutEffect(() => {
    if (scrollToToday) {
      scrollTo('calendar-today')
      return
    }
    return () => {}
  }, [scrollToToday])

  return (
    <Box>
      {interval.map((x) => {
        return (
          <Month
            start={start}
            end={end}
            onDayClick={onDayClick}
            key={x.start.toString()}
            datetime={x.start}
            markedDates={markedDates}
          />
        )
      })}
    </Box>
  )
}
