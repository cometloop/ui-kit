import { Text } from '@lib/components/Text'
import { isToday, weekDays } from '@lib/components/Calendar/utils'

import { DateTime, Interval } from 'luxon'
import { Day } from '@lib/components/DatePicker/Day'
import { Box, Flex } from 'theme-ui'

export interface MonthProps {
  selected: DateTime
  datetime: DateTime
  start: DateTime
  end: DateTime
  min: DateTime
  max: DateTime
  onSelected?: (day: DateTime) => void
}

export const Month: React.FC<MonthProps> = (props) => {
  const { datetime, start, end, min, max, onSelected, selected } = props
  const currentMonth = datetime.month
  const interval = Interval.fromDateTimes(start, end).splitBy({ day: 1 })
  return (
    <Box sx={{ width: '100%' }}>
      <Flex sx={{ flexDirection: 'row', marginBottom: '1rem' }}>
        {weekDays.map((day) => {
          return (
            <Flex
              sx={{
                width: 'calc(100% / 7)',
                justifyContent: 'center'
              }}
              key={day}
            >
              <Text sx={{ color: '#888', fontSize: 1 }}>{day}</Text>
            </Flex>
          )
        })}
      </Flex>
      <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {interval.map((i, index) => {
          const dayBelongsToMonth = currentMonth === i.start.month
          const dayInRange =
            i.start.startOf('day') >= min.startOf('day') &&
            i.start.startOf('day') <= max.startOf('day')
          const isSelected =
            selected?.startOf('day').toString() ===
            i.start.startOf('day').toString()

          return (
            <Day
              dayInRange={dayInRange}
              onSelected={onSelected}
              isToday={isToday(i.start)}
              isSelected={isSelected}
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
