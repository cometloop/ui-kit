import { Box } from '@lib/components/Box'
import { Button } from '@lib/components/Button'
import { Month } from '@lib/components/DatePicker/Month'
import { Flex } from '@lib/components/Flex'
import { Header4 } from '@lib/components/Header'
import { FontFamily } from '@lib/components/Text'
import { useDatePicker } from '@lib/hooks/useCalendar'
import { colors } from '@lib/themes/colors'
import { getSelectedDay } from '@lib/utils/date'
import { DateTime, Interval } from 'luxon'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export interface DatePickerProps {
  selected?: string
  minDate: string
  maxDate: string
  onSelected?: (day: DateTime) => void
}

const arrowSize = '2.4rem'

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { selected, minDate, maxDate, onSelected } = props
  const min = DateTime.fromISO(minDate)
  const max = DateTime.fromISO(maxDate)

  const selectedDay: DateTime | undefined = getSelectedDay(selected, min, max)

  const [currentMonth, setCurrentMonth] = useState(
    selectedDay?.startOf('month') || DateTime.now
  )

  useEffect(() => {
    setCurrentMonth(selectedDay?.startOf('month') || DateTime.now)
  }, [min.year])

  const data = useDatePicker(currentMonth, min, max)
  const { startPrefillDay, lastPrefillDay, canGoBack, canGoNext } = data

  const onPrevious = () => {
    if (canGoBack) {
      setCurrentMonth(currentMonth.minus({ month: 1 }))
    }
  }

  const onNext = () => {
    if (canGoNext) {
      setCurrentMonth(currentMonth.plus({ month: 1 }))
    }
  }

  const onSelectedDay = (day: DateTime) => {
    onSelected && onSelected(day)
  }

  const arrowColorPrevious = canGoBack ? colors.blue : colors.gray
  const arrowColorNext = canGoNext ? colors.blue : colors.gray

  return (
    <Box width={'350px'}>
      <Flex justifyContent={'space-between'} alignItems="center" m="0">
        <Button
          disabled={!canGoBack}
          onClick={onPrevious}
          p={'1rem 1rem 1rem 0'}
          bg={'transparent'}
        >
          <MdKeyboardArrowLeft size={arrowSize} color={arrowColorPrevious} />
        </Button>
        <Header4
          fontSize={'1.3rem'}
          fontFamily={FontFamily.Roboto}
          color="#666"
          textAlign={'left'}
        >
          {currentMonth.toFormat('MMMM yyyy')}
        </Header4>
        <Button
          disabled={!canGoNext}
          onClick={onNext}
          p={'1rem 1rem 1rem 0'}
          bg={'transparent'}
        >
          <MdKeyboardArrowRight size={arrowSize} color={arrowColorNext} />
        </Button>
      </Flex>

      <Month
        selected={selectedDay}
        start={startPrefillDay}
        end={lastPrefillDay}
        min={min}
        max={max}
        onSelected={onSelectedDay}
        key={currentMonth.toString()}
        datetime={currentMonth}
      />
    </Box>
  )
}
